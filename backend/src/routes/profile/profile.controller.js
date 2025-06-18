import User from "../../models/db/user.model.js";
import { message500 } from "../../models/response/message500.js";

export const profileUpdate = async (req, res) => {
  try {
    const {} = req.user;
    const { full_name, profile_pic } = req.body;

    const user = await User.findOne({ email: email });

    if (!full_name) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // Update user profile
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.full_name = full_name;
    if (profile_pic) user.profile_pic = profile_pic;

    await user.save();

    res.json({
      message: "Profile updated successfully",
      data: { full_name: user.full_name, profile_pic: user.profile_pic },
    });
  } catch (error) {
    console.log("Error in profile.controller", error);
    res.status(500).json(message500);
  }
};

export const profileDelete = async (req, res) => {
  try {
    const { email } = req.user;
    const user = await User.findOneAndDelete({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
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
    const user = await User.findOneAndUpdate(
      { email },
      { $set: { isActive: false } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "Profile deactivated successfully" });
  } catch (error) {
    console.log("Error in profileDeactivate", error);
    res.status(500).json(message500);
  }
};
