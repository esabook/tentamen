import SoalTag from '../../models/db/soalTag.model.js';

// GET /all?page=1&size=10
export const getAllSoalTags = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    const skip = (page - 1) * size;
    const total = await SoalTag.countDocuments();
    const soalTags = await SoalTag.find().skip(skip).limit(size);
    res.json({
      data: soalTags,
      page,
      size,
      total,
      totalPages: Math.ceil(total / size)
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch soal tags', error: err.message });
  }
};

// POST /add
export const addSoalTag = async (req, res) => {
  try {
    const soalTag = new SoalTag(req.body);
    await soalTag.save();
    res.json({ message: 'Soal tag added', data: soalTag });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add soal tag', error: err.message });
  }
};

// POST /update
export const updateSoalTag = async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    if (!_id) return res.status(400).json({ message: '_id is required' });
    const updated = await SoalTag.findByIdAndUpdate(_id, updateData, { new: true });
    if (!updated) return res.status(404).json({ message: 'Soal tag not found' });
    res.json({ message: 'Soal tag updated', data: updated });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update soal tag', error: err.message });
  }
};

// POST /delete
export const deleteSoalTag = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) return res.status(400).json({ message: '_id is required' });
    const deleted = await SoalTag.findByIdAndDelete(_id);
    if (!deleted) return res.status(404).json({ message: 'Soal tag not found' });
    res.json({ message: 'Soal tag deleted', data: deleted });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete soal tag', error: err.message });
  }
};
