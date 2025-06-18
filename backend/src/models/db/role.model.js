import mongoose from "mongoose";
/**
 * contoh: admin, guru, pengawas, siswa, ortu
 */
const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    permission_id: {
        type: mongoose.Types.ObjectId,
        ref: "Permission",
        require: true
    },
    description: {
        type: String
    }
});

const Role = mongoose.model("Role", roleSchema);

export default Role;