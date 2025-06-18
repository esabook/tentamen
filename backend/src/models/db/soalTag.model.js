/**
 * contoh: tryout, harian, tengah-semester
 */

import mongoose from "mongoose";

const soalTagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    used_count: {
        type: Number,
        require: true
    },
    badge_color: {
        type: String,
        default: "#000000" // Default to black if not specified
    },
});

const SoalTag = mongoose.model("SoalTag", soalTagSchema);

export default SoalTag;