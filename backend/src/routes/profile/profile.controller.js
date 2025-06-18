import Account from "../../models/db/account.model.js";
import { message500 } from "../../models/response/message500.js";

export const profileUpdate = async (req, res) => {
  try {
    const {} = req.user;
    const { full_name, profile_pic } = req.body;

    const account = await Account.findOne({ email: email });

    if (!full_name) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // Update account profile
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    account.full_name = full_name;
    if (profile_pic) account.profile_pic = profile_pic;

    await account.save();

    res.json({
      message: "Profile updated successfully",
      data: { full_name: account.full_name, profile_pic: account.profile_pic },
    });
  } catch (error) {
    console.log("Error in profile.controller", error);
    res.status(500).json(message500);
  }
};

export const profileDelete = async (req, res) => {
  try {
    const { email } = req.user;
    const account = await Account.findOneAndDelete({ email });
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    console.log("Error in profileDelete", error);
    res.status(500).json(message500);
  }
};

export const profileDeactivate = async (req, res) => {
  try {
    const { email } = req.user;
    const account = await Account.findOneAndUpdate(
      { email },
      { $set: { isActive: false } },
      { new: true }
    );
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.json({ message: "Profile deactivated successfully" });
  } catch (error) {
    console.log("Error in profileDeactivate", error);
    res.status(500).json(message500);
  }
};
