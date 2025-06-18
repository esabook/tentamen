import Institution from "../../models/db/institution.model.js";

// GET /all?page=1&size=10
export const getAllInstitutions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    const skip = (page - 1) * size;
    const total = await Institution.countDocuments();
    const institutions = await Institution.find().skip(skip).limit(size);
    res.json({
      data: institutions,
      page,
      size,
      total,
      totalPages: Math.ceil(total / size),
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch institutions", error: err.message });
  }
};

// POST /add
export const addInstitution = async (req, res) => {
  try {
    const institution = new Institution(req.body);
    await institution.save();
    res.json({ message: "Institution added", data: institution });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to add institution", error: err.message });
  }
};

// POST /update
export const updateInstitution = async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    if (!_id) return res.status(400).json({ message: "_id is required" });
    const updated = await Institution.findByIdAndUpdate(_id, updateData, {
      new: true,
    });
    if (!updated)
      return res.status(404).json({ message: "Institution not found" });
    res.json({ message: "Institution updated", data: updated });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update institution", error: err.message });
  }
};

// POST /delete
export const deleteInstitution = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) return res.status(400).json({ message: "_id is required" });
    const deleted = await Institution.findByIdAndDelete(_id);
    if (!deleted)
      return res.status(404).json({ message: "Institution not found" });
    res.json({ message: "Institution deleted", data: deleted });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete institution", error: err.message });
  }
};
