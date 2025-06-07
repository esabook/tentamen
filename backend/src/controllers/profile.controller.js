import User from "../models/db/user.model.js";

export const profileUpdate = async (req, res) => {
    try {
        const {} = req.user;
        const { full_name, profile_pic } = req.body;
        
        const user = await User.findOne({ email: email });

        if (!full_name) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

    } catch (error) {
        console.log("Error in loginController", error)
        res.status(500).json({
            message: "Internal Server error."
        });
    }
};