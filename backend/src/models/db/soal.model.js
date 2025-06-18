import mongoose from "mongoose";

const answer_options = {
  order: String, // a, b, c, d, e
  content: String, // jawaban dalam HTML, bisa berupa teks atau gambar, audio, video
  is_correct: Boolean, // true jika jawaban ini benar
};

const soalSchema = new mongoose.Schema({
  quetion_html: String,
  answer_type: {
    type: String,
    enum: [
      "pilihan_ganda", // pilihan ganda
      "pilihan_ganda_komplek", // pilihan ganda kompleks
      "esai", // isian singkat
      "upload", // audio
      "drag_and_drop", // drag and drop
      "pernyataan", // pernyataan
      "pencocokan", // pencocokan
    ],
    default:"pilihan_ganda", 
  },

  answer_options: [answer_options], // array of jawaban, bisa kosong jika isian singkat atau panjang

  self_question_rule: {
    ref: "SoalRule", // referensi ke model SoalRule
    type: mongoose.Types.ObjectId, // tipe data ObjectId dari mongoose
    default: null, // jika tidak ada aturan soal, maka null
  },

  question_group_id: {
    type: [mongoose.Types.ObjectId], // untuh indikator masih dipakai di grup soal
    ref: "SoalGroup", // referensi ke model SoalGroup
    default: 0, // jika tidak ada grup soal, maka 0
  },
});

const Soal = mongoose.model("Soal", soalSchema);

export default Soal;
