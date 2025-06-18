import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  account_id: {
    type: mongoose.Types.ObjectId,
    ref: "Account", // referensi ke model Account
    index: true, // untuk mempercepat query berdasarkan account_id
  },

  soal_id: {
    type: mongoose.Types.ObjectId,
    ref: "Soal", // referensi ke model Soal
    index: true, // untuk mempercepat query berdasarkan soal_id
  },

  answer_content: String, // jawaban dalam HTML, bisa berupa teks atau gambar, audio, video
  is_correct: Boolean, // true jika jawaban ini benar
  
  score: Number, // skor yang didapat dari jawaban ini
  score_adjust: Number, // penyesuaian skor jika ada
  
  read_at: {
    type: Date,
    default: Date.now, // waktu saat jawaban dibaca
  },
  
  answered_at: {
    type: Date,
    default: Date.now, // waktu saat jawaban dikirim
  },

});

const Answer = mongoose.model("Answer", answerSchema);
export default Answer;