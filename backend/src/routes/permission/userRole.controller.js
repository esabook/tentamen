import UserRole from '../../models/db/userRole.model.js';

// GET /all?page=1&size=10
export const getAllUserRoles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    const skip = (page - 1) * size;
    const total = await UserRole.countDocuments();
    const userRoles = await UserRole.find().skip(skip).limit(size);
    res.json({
      data: userRoles,
      page,
      size,
      total,
      totalPages: Math.ceil(total / size)
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch userRoles', error: err.message });
  }
};

// POST /add
export const addUserRole = async (req, res) => {
  try {
    const userRole = new UserRole(req.body);
    await userRole.save();
    res.json({ message: 'UserRole added', data: userRole });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add userRole', error: err.message });
  }
};

// POST /update
export const updateUserRole = async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    if (!_id) return res.status(400).json({ message: '_id is required' });
    const updated = await UserRole.findByIdAndUpdate(_id, updateData, { new: true });
    if (!updated) return res.status(404).json({ message: 'UserRole not found' });
    res.json({ message: 'UserRole updated', data: updated });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update userRole', error: err.message });
  }
};

// POST /delete
export const deleteUserRole = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) return res.status(400).json({ message: '_id is required' });
    const deleted = await UserRole.findByIdAndDelete(_id);
    if (!deleted) return res.status(404).json({ message: 'UserRole not found' });
    res.json({ message: 'UserRole deleted', data: deleted });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete userRole', error: err.message });
  }
};
