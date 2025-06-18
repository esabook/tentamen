import { message500 } from "../../models/response/message500.js";
import { generateJwtToken } from "../../libs/util.js";
import User from "../../models/db/user.model.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
    const { full_name, email, password } = req.body;
    try {

        if (!email || !password) {
            return res.status(400).json({
                message: "All field are required."
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                message: "Password must be at least 8 characters, Including uppercase, lowercase, number."
            });
        }

        const user = await User.findOne({ email: email });
        if (user) return res.status(400).json({
            message: "Email already registered."
        });

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            full_name: full_name,
            email: email,
            password: hashPassword
        });

        if (newUser) {
            generateJwtToken(newUser._id, res);
            await newUser.save();

            return res.status(201).json(newUser.toJSON());
        } else {
            return res.status(400).json({
                message: "Invalid user data."
            });
        }

    } catch (error) {
        console.log("Error in signupController", error)
        res.status(500).json(message500);
    }
};


export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }


        var token = generateJwtToken(user._id, res);

        res.status(200).json({
            jwt: token,
            full_name: user.full_name,
            email: user.email,
            profilePic: user.profilePic
        });

    } catch (error) {
        console.log("Error in loginController", error);
        res.status(500).json(message500);
    }
};


export const signOut = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logout successfully." });
    } catch (error) {
        console.log("Error in loginController", error);
        res.status(500).json(message500);
    }
};