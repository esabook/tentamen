import mongoose from "mongoose";
import Human from "./human.model.js"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlenght: 8,
    },
    profile_pic: {
        type: String
    },
    full_name: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },
    user_detail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Human",
    }
});

const User = mongoose.model("User", userSchema);

export default User;