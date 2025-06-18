import Ujian from '../../models/db/ujian.model.js';
import mongoose from 'mongoose';
import Answer from '../../models/db/answer.model.js';
import Account from '../../models/db/account.model.js';

// GET /all?page=1&size=10
export const getAllUjian = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    const skip = (page - 1) * size;
    const total = await Ujian.countDocuments();
    const ujians = await Ujian.find()
      .populate('peserta', '-password')
      .populate('pengawas', '-password')
      .populate('soal_group')
      .skip(skip)
      .limit(size);
    res.json({
      data: ujians,
      page,
      size,
      total,
      totalPages: Math.ceil(total / size)
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch ujian', error: err.message });
  }
};

// POST /add
export const addUjian = async (req, res) => {
  try {
    const ujian = new Ujian(req.body);
    await ujian.save();
    res.status(201).json({ message: 'Ujian created', data: ujian });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create ujian', error: err.message });
  }
};

// POST /update
export const updateUjian = async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    if (!_id) return res.status(400).json({ message: '_id is required' });
    const updated = await Ujian.findByIdAndUpdate(_id, updateData, { new: true });
    if (!updated) return res.status(404).json({ message: 'Ujian not found' });
    res.json({ message: 'Ujian updated', data: updated });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update ujian', error: err.message });
  }
};

// POST /delete
export const deleteUjian = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) return res.status(400).json({ message: '_id is required' });
    const deleted = await Ujian.findByIdAndDelete(_id);
    if (!deleted) return res.status(404).json({ message: 'Ujian not found' });
    res.json({ message: 'Ujian deleted', data: deleted });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete ujian', error: err.message });
  }
};

// POST /start/:id (generate PIN ujian, set expired 50 menit)
export const startUjian = async (req, res) => {
  try {
    const { id } = req.params;
    const ujian = await Ujian.findById(id);
    if (!ujian) return res.status(404).json({ message: 'Ujian not found' });
    ujian.generatePin();
    ujian.time_start = new Date();
    await ujian.save();
    res.json({ message: 'PIN generated, ujian started', data: ujian });
  } catch (err) {
    res.status(500).json({ message: 'Failed to start ujian', error: err.message });
  }
};

// GET /:id (detail ujian)
export const getUjianById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'Invalid id' });
    const ujian = await Ujian.findById(id)
      .populate('peserta', '-password')
      .populate('pengawas', '-password')
      .populate('soal_group');
    if (!ujian) return res.status(404).json({ message: 'Ujian not found' });
    res.json({ data: ujian });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch ujian', error: err.message });
  }
};

// GET /:id/leaderboard (live leaderboard 10 skor tertinggi)
export const liveLeaderboard = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'Invalid ujian id' });
    // Ambil peserta dari ujian
    const ujian = await Ujian.findById(id).select('peserta');
    if (!ujian) return res.status(404).json({ message: 'Ujian not found' });

    // Aggregate skor total per peserta (account_id) untuk ujian ini
    if (!ujian.peserta || ujian.peserta.length === 0) {
      return res.json({ leaderboard: [] }); // Tidak ada peserta
    }
    // Pastikan soal_group sesuai dengan ujian jika diperlukan
    // const soalGroupId = ujian.soal_group ? mongoose.Types.ObjectId(ujian.soal_group) : null;
    // Ambil leaderboard top 10 peserta berdasarkan skor
    // Jika soal_group diperlukan, tambahkan filter di $match
    // $match: { soal_group: soalGroupId } jika perlu
    const leaderboard = await Answer.aggregate([
      {
        $match: {
          account_id: { $in: ujian.peserta },
          //soal_group: mongoose.Types.ObjectId(id) // Pastikan soal_group sesuai dengan ujian
        }
      },
      {
        $group: {
          _id: "$account_id",
          totalScore: { $sum: { $ifNull: ["$score", 0] } }
        }
      },
      { $sort: { totalScore: -1 } },
      { $limit: 10 },
      {
        $lookup: {
          from: "accounts",
          localField: "_id",
          foreignField: "_id",
          as: "account"
        }
      },
      { $unwind: "$account" },
      {
        $project: {
          _id: 0,
          account_id: "$account._id",
          full_name: "$account.full_name",
          totalScore: 1
        }
      }
    ]);
    res.json({ leaderboard });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch leaderboard', error: err.message });
  }
};
