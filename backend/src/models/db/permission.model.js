import mongoose from "mongoose";

/**
 * contoh: all, soal, nilai, ujian
 */
const permissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    }
});

const Permission = mongoose.model("Permission", permissionSchema);

export default Permission;