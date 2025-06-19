import UjianResult from '../../models/db/ujianResult.model.js';
import Ujian from '../../models/db/ujian.model.js';
import Account from '../../models/db/account.model.js';
import SoalGroup from '../../models/db/soalGroup.model.js';
import { getCache } from '../../libs/cache.js';

// GET /ujianResult/:ujianId
export const getUjianResult = async (req, res) => {
  try {
    const { ujianId } = req.params;
    const result = await UjianResult.findOne({ ujian_id: ujianId })
      .populate('ujian_id')
      .populate('soal_group')
      .populate('pengawas', '-password')
      .populate('peserta.account_id', '-password')
      .populate('leaderboard.account_id', '-password');
    if (!result) return res.status(404).json({ message: 'UjianResult not found' });
    res.json({ data: result });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch ujianResult', error: err.message });
  }
};

// GET /ujianResult/:ujianId/leaderboard (live leaderboard)
export const getLiveLeaderboard = async (req, res) => {
  try {
    const { ujianId } = req.params;
    const redis = getCache();
    const cacheKey = `leaderboard:${ujianId}`;
    let cached = await redis.get(cacheKey);
    if (cached) {
      return res.json(JSON.parse(cached));
    }
    const result = await UjianResult.findOne({ ujian_id: ujianId }, { leaderboard: 1, last_updated: 1 });
    if (!result) return res.status(404).json({ message: 'UjianResult not found' });
    const response = { leaderboard: result.leaderboard, last_updated: result.last_updated };
    await redis.set(cacheKey, JSON.stringify(response), { EX: 10 }); // cache 10 detik
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch leaderboard', error: err.message });
  }
};

// PATCH /ujianResult/:ujianId/score (update skor peserta, misal setelah submit jawaban)
export const updatePesertaScore = async (req, res) => {
  try {
    const { ujianId } = req.params;
    const { account_id, skor, jawaban, waktu_submit } = req.body;
    const result = await UjianResult.findOne({ ujian_id: ujianId });
    if (!result) return res.status(404).json({ message: 'UjianResult not found' });
    // Update peserta
    let peserta = result.peserta.find(p => p.account_id.toString() === account_id);
    if (!peserta) {
      peserta = { account_id, skor, jawaban: jawaban || [], waktu_submit, hadir: true };
      result.peserta.push(peserta);
    } else {
      peserta.skor = skor;
      peserta.jawaban = jawaban || peserta.jawaban;
      peserta.waktu_submit = waktu_submit || peserta.waktu_submit;
      peserta.hadir = true;
    }
    // Update leaderboard (top 10)
    result.leaderboard = result.peserta
      .filter(p => p.hadir)
      .sort((a, b) => b.skor - a.skor)
      .slice(0, 10)
      .map(p => ({ account_id: p.account_id, skor: p.skor }));
    result.last_updated = new Date();
    await result.save();
    // Invalidate cache leaderboard
    try {
      const redis = getCache();
      await redis.del(`leaderboard:${ujianId}`);
    } catch (e) { /* ignore cache error */ }
    res.json({ message: 'Score updated', leaderboard: result.leaderboard });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update score', error: err.message });
  }
};
