import Human from "../../models/db/human.model.js";

// GET /all?page=1&size=10
export const getAllHumans = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    const skip = (page - 1) * size;

    const total = await Human.countDocuments();
    const humans = await Human.find().skip(skip).limit(size);

    res.json({
      data: humans,
      page,
      size,
      total,
      totalPages: Math.ceil(total / size),
    });

  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch humans", error: err.message });
  }
};

// POST /update/:id
export const updateHuman = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    if (!id) return res.status(400).json({ message: 'id is required' });
    const updated = await Human.findByIdAndUpdate(id, updateData, { new: true });
    if (!updated) return res.status(404).json({ message: 'Human not found' });
    res.json({ message: 'Human updated', data: updated });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update human', error: err.message });
  }
};

// POST /delete/:id
export const deleteHuman = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'id is required' });
    const deleted = await Human.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Human not found' });
    res.json({ message: 'Human deleted', data: deleted });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete human', error: err.message });
  }
};

// POST /archive/:id
export const archiveHuman = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'id is required' });
    const archived = await Human.findByIdAndUpdate(id, { archived: true }, { new: true });
    if (!archived) return res.status(404).json({ message: 'Human not found' });
    res.json({ message: 'Human archived', data: archived });
  } catch (err) {
    res.status(500).json({ message: 'Failed to archive human', error: err.message });
  }
};

// POST /add
export const addHuman = async (req, res) => {
  try {
    const { identity, identity_tipe, full_name, birth_date, contact, contact_other, profile_image } = req.body;
    if (!identity || !identity_tipe) {
      return res.status(400).json({ message: 'identity dan identity_tipe wajib diisi' });
    }
    // Cek duplikasi identity
    const existing = await Human.findOne({ identity });
    if (existing) {
      return res.status(400).json({ message: 'Identity sudah terdaftar' });
    }
    const human = new Human({ identity, identity_tipe, full_name, birth_date, contact, contact_other, profile_image });
    await human.save();
    res.status(201).json({ message: 'Human created', data: human });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create human', error: err.message });
  }
};
