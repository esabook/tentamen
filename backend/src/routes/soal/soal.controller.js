import Soal from '../../models/db/soal.model.js';

// GET /all?page=1&size=10
export const getAllSoal = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    const skip = (page - 1) * size;
    const total = await Soal.countDocuments();
    const soals = await Soal.find().skip(skip).limit(size);
    res.json({
      data: soals,
      page,
      size,
      total,
      totalPages: Math.ceil(total / size)
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch soal', error: err.message });
  }
};

// POST /add?groupId=:groupId
export const addSoal = async (req, res) => {
  try {
    const groupId = req.query.groupId;
    const soalData = { ...req.body };
    if (groupId) soalData.groupId = groupId;
    const soal = new Soal(soalData);
    await soal.save();
    res.json({ message: 'Soal added', data: soal });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add soal', error: err.message });
  }
};

// POST /update/:id
export const updateSoal = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updated = await Soal.findByIdAndUpdate(id, updateData, { new: true });
    if (!updated) return res.status(404).json({ message: 'Soal not found' });
    res.json({ message: 'Soal updated', data: updated });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update soal', error: err.message });
  }
};

// POST /archive/:id
export const archiveSoal = async (req, res) => {
  try {
    const { id } = req.params;
    const archived = await Soal.findByIdAndUpdate(id, { archived: true }, { new: true });
    if (!archived) return res.status(404).json({ message: 'Soal not found' });
    res.json({ message: 'Soal archived', data: archived });
  } catch (err) {
    res.status(500).json({ message: 'Failed to archive soal', error: err.message });
  }
};

// POST /delete/:id
export const deleteSoal = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Soal.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Soal not found' });
    res.json({ message: 'Soal deleted', data: deleted });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete soal', error: err.message });
  }
};
