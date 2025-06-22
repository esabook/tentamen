import Account from '../../models/db/account.model.js';
import bcrypt from 'bcryptjs';
import { message500 } from '../../models/response/message500.js';

export const getProfile = async (req, res) => {
  try {
    res.status(200).json(req.account);
  } catch (error) {
    res.status(500).json(message500);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { full_name, email, profilePic } = req.body;
    const updated = await Account.findByIdAndUpdate(
      req.account._id,
      { full_name, email, profilePic },
      { new: true, runValidators: true }
    ).select('-password');
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json(message500);
  }
};

export const deleteAccount = async (req, res) => {
  try {
    await Account.findByIdAndDelete(req.account._id);
    res.status(200).json({ message: 'Account deleted.' });
  } catch (error) {
    res.status(500).json(message500);
  }
};

export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const account = await Account.findById(req.account._id);
    if (!account) return res.status(404).json({ message: 'Account not found.' });
    const valid = await bcrypt.compare(oldPassword, account.password);
    if (!valid) return res.status(400).json({ message: 'Old password incorrect.' });
    const salt = await bcrypt.genSalt(10);
    account.password = await bcrypt.hash(newPassword, salt);
    await account.save();
    res.status(200).json({ message: 'Password changed.' });
  } catch (error) {
    res.status(500).json(message500);
  }
};

export const forgotPassword = async (req, res) => {
  // Implementasi pengiriman email reset password
  res.status(501).json({ message: 'Not implemented.' });
};
