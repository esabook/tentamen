import mongoose from "mongoose";

/**
 * contoh: a::admin, b::guru, c::guru, d::murid
 */
const userRoleSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    role_id: {
        type: String,
        require: true
    }
});

const UserRole = mongoose.model("UserRole", userRoleSchema);

export default UserRole;