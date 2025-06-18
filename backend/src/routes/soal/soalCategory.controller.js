import SoalCategory from '../../models/db/soalCategory.model.js';

// GET /all?page=1&size=10
export const getAllSoalCategories = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    const skip = (page - 1) * size;
    const total = await SoalCategory.countDocuments();
    const soalCategories = await SoalCategory.find().skip(skip).limit(size);
    res.json({
      data: soalCategories,
      page,
      size,
      total,
      totalPages: Math.ceil(total / size)
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch soal categories', error: err.message });
  }
};

// POST /add
export const addSoalCategory = async (req, res) => {
  try {
    const soalCategory = new SoalCategory(req.body);
    await soalCategory.save();
    res.json({ message: 'Soal category added', data: soalCategory });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add soal category', error: err.message });
  }
};

// POST /update
export const updateSoalCategory = async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    if (!_id) return res.status(400).json({ message: '_id is required' });
    const updated = await SoalCategory.findByIdAndUpdate(_id, updateData, { new: true });
    if (!updated) return res.status(404).json({ message: 'Soal category not found' });
    res.json({ message: 'Soal category updated', data: updated });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update soal category', error: err.message });
  }
};

// POST /delete
export const deleteSoalCategory = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) return res.status(400).json({ message: '_id is required' });
    const deleted = await SoalCategory.findByIdAndDelete(_id);
    if (!deleted) return res.status(404).json({ message: 'Soal category not found' });
    res.json({ message: 'Soal category deleted', data: deleted });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete soal category', error: err.message });
  }
};
