import SoalBundle from '../../models/db/soalGroup.model.js';

// GET /all?page=1&size=10
export const getAllSoalBundles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    const skip = (page - 1) * size;
    const total = await SoalBundle.countDocuments();
    const soalBundles = await SoalBundle.find().skip(skip).limit(size);
    res.json({
      data: soalBundles,
      page,
      size,
      total,
      totalPages: Math.ceil(total / size)
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch soal bundles', error: err.message });
  }
};

// POST /add
export const addSoalBundle = async (req, res) => {
  try {
    const soalBundle = new SoalBundle(req.body);
    await soalBundle.save();
    res.json({ message: 'Soal bundle added', data: soalBundle });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add soal bundle', error: err.message });
  }
};

// POST /update/:id
export const updateSoalBundle = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updated = await SoalBundle.findByIdAndUpdate(id, updateData, { new: true });
    if (!updated) return res.status(404).json({ message: 'Soal bundle not found' });
    res.json({ message: 'Soal bundle updated', data: updated });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update soal bundle', error: err.message });
  }
};

// POST /archive/:id
export const archiveSoalBundle = async (req, res) => {
  try {
    const { id } = req.params;
    const archived = await SoalBundle.findByIdAndUpdate(id, { archived: true }, { new: true });
    if (!archived) return res.status(404).json({ message: 'Soal bundle not found' });
    res.json({ message: 'Soal bundle archived', data: archived });
  } catch (err) {
    res.status(500).json({ message: 'Failed to archive soal bundle', error: err.message });
  }
};

// POST /delete/:id
export const deleteSoalBundle = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await SoalBundle.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Soal bundle not found' });
    res.json({ message: 'Soal bundle deleted', data: deleted });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete soal bundle', error: err.message });
  }
};
