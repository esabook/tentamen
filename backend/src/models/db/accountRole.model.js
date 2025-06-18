import mongoose from "mongoose";

/**
 * contoh: a::admin, b::guru, c::guru, d::murid
 */
const accountRoleSchema = new mongoose.Schema({
    account_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true,
        ref: "Account"
    },
    role_id: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: "Role"
    }
});

const AccountRole = mongoose.model("AccountRole", accountRoleSchema);

export default AccountRole;