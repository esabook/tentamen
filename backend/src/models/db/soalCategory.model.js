import mongoose from "mongoose";

/**
 * contoh: kelas, mapel, kelompok
 */
const soalCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  desciption: {
    type: String,
    default: "", // deskripsi kategori, bisa kosong
  },
  badge_color: {
    type: String,
    default: "#000000", // Default to black if not specified
  },
  icon: {
    type: String,
    default: "", // icon kategori, bisa kosong
  },
  used_count: {
    type: Number,
    require: true,
  },
});

const SoalCategory = mongoose.model("SoalCategory", soalCategorySchema);

export default SoalCategory;
