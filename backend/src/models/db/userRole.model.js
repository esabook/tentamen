import mongoose from "mongoose";

/**
 * contoh: a::admin, b::guru, c::guru, d::murid
 */
const userRoleSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true,
        ref: "User"
    },
    role_id: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: "Role"
    }
});

const UserRole = mongoose.model("UserRole", userRoleSchema);

export default UserRole;