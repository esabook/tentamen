import Role from "../../models/db/role.model.js";

// GET /all?page=1&size=10
export const getAllRoles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    const skip = (page - 1) * size;
    const total = await Role.countDocuments();
    const roles = await Role.find().skip(skip).limit(size);
    res.json({
      data: roles,
      page,
      size,
      total,
      totalPages: Math.ceil(total / size),
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch roles", error: err.message });
  }
};

// POST /add
export const addRole = async (req, res) => {
  try {
    const role = new Role(req.body);
    await role.save();
    res.json({ message: "Role added", data: role });
  } catch (err) {
    res.status(500).json({ message: "Failed to add role", error: err.message });
  }
};

// POST /update
export const updateRole = async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    if (!_id) return res.status(400).json({ message: "_id is required" });
    const updated = await Role.findByIdAndUpdate(_id, updateData, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Role not found" });
    res.json({ message: "Role updated", data: updated });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update role", error: err.message });
  }
};

// POST /delete
export const deleteRole = async (req, res) => {
  try {
    const { _id } = req.body;

    if (!_id) return res.status(400).json({ message: "_id is required" });

    // Validasi apakah _id adalah ObjectId yang valid
    if (!/^[0-9a-fA-F]{24}$/.test(_id)) {
      return res.status(400).json({ message: "Invalid _id format" });
    }

    // Cek apakah role masih digunakan oleh userRole
    const userRoleCount = await import(
      "../../models/db/userRole.model.js"
    ).then((m) => m.default.countDocuments({ roleId: _id }));

    if (userRoleCount > 0) {
      return res.status(400).json({
        message: "Role masih digunakan oleh userRole, tidak dapat dihapus.",
      });
    }
    
    const deleted = await Role.findByIdAndDelete(_id);
    if (!deleted) return res.status(404).json({ message: "Role not found" });
    
    res.json({ message: "Role deleted", data: deleted });

  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete role", error: err.message });
  }
};
