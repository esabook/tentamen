import mongoose from "mongoose";

const soalGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  category_ids: {
    type: [mongoose.Types.ObjectId],
    ref: "SoalCategory", // referensi ke model SoalCategory
    required: true, // kategori harus diisi
  },

  soal_ids: {
    type: [mongoose.Types.ObjectId],
    ref: "Soal", // referensi ke model Soal
  },

  tag_ids: {
    type: [mongoose.Types.ObjectId],
    ref: "SoalTag", // referensi ke model SoalTag
  },

  child_question_group_ids: {
    type: [mongoose.Types.ObjectId],
    ref: "SoalGroup",
  },

  is_active: {
    type: Boolean,
    default: true, // apakah grup soal ini aktif
  },
  is_archived: {
    type: Boolean,
    default: false, // apakah grup soal ini diarsipkan
  },
  

  instructions_html: {
    type: String,
    default: "", // petunjuk pengerjaan dalam HTML, bisa kosong
  },

  repeat_audio_limit: {
    type: Number,
    default: 0, // batas putar ulang audio, 0 berarti tidak ada batas
  },

  repeat_video_limit: {
    type: Number,
    default: 0, // batas putar ulang video, 0 berarti tidak ada batas
  },

  score_conversion: {
    type: String,
    default: "", // konversi skor, bisa kosong
  },

  question_rule_id: {
    type: Number,
    ref: "SoalRule", // referensi ke model SoalRule
    default: 0, // rule id adalah mengikuti aturan default
  },
});

const SoalGroup = mongoose.model("SoalGroup", soalGroupSchema);

export default SoalGroup;
