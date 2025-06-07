import mongoose from "mongoose";

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
    }
});

const User = mongoose.model("User", userSchema);

export default User;