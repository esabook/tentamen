import AccountRole from '../../models/db/accountRole.model.js';

// GET /all?page=1&size=10
export const getAllAccountRoles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;
    const skip = (page - 1) * size;
    const total = await AccountRole.countDocuments();
    const accountRoles = await AccountRole.find().skip(skip).limit(size);
    res.json({
      data: accountRoles,
      page,
      size,
      total,
      totalPages: Math.ceil(total / size)
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch accountRoles', error: err.message });
  }
};

// POST /add
export const addAccountRole = async (req, res) => {
  try {
    const accountRole = new AccountRole(req.body);
    await accountRole.save();
    res.json({ message: 'AccountRole added', data: accountRole });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add accountRole', error: err.message });
  }
};

// POST /update
export const updateAccountRole = async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    if (!_id) return res.status(400).json({ message: '_id is required' });
    const updated = await AccountRole.findByIdAndUpdate(_id, updateData, { new: true });
    if (!updated) return res.status(404).json({ message: 'AccountRole not found' });
    res.json({ message: 'AccountRole updated', data: updated });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update accountRole', error: err.message });
  }
};

// POST /delete
export const deleteAccountRole = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) return res.status(400).json({ message: '_id is required' });
    const deleted = await AccountRole.findByIdAndDelete(_id);
    if (!deleted) return res.status(404).json({ message: 'AccountRole not found' });
    res.json({ message: 'AccountRole deleted', data: deleted });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete accountRole', error: err.message });
  }
};
