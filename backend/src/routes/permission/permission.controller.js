import Permission from "../../models/db/permission.model.js";

// GET /all?page=1&size=10
export const getAllPermissions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    const skip = (page - 1) * size;
    const total = await Permission.countDocuments();
    const permissions = await Permission.find().skip(skip).limit(size);
    res.json({
      data: permissions,
      page,
      size,
      total,
      totalPages: Math.ceil(total / size),
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch permissions", error: err.message });
  }
};

// POST /add
export const addPermission = async (req, res) => {
  try {
    const permission = new Permission(req.body);
    await permission.save();
    res.json({ message: "Permission added", data: permission });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to add permission", error: err.message });
  }
};

// POST /update
export const updatePermission = async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    if (!_id) return res.status(400).json({ message: "_id is required" });
    const updated = await Permission.findByIdAndUpdate(_id, updateData, {
      new: true,
    });
    if (!updated)
      return res.status(404).json({ message: "Permission not found" });
    res.json({ message: "Permission updated", data: updated });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update permission", error: err.message });
  }
};

// POST /delete
export const deletePermission = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) return res.status(400).json({ message: "_id is required" });
    const deleted = await Permission.findByIdAndDelete(_id);
    if (!deleted)
      return res.status(404).json({ message: "Permission not found" });
    res.json({ message: "Permission deleted", data: deleted });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete permission", error: err.message });
  }
};
