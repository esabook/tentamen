import mongoose from "mongoose";

const pesertaResultSchema = new mongoose.Schema({
  account_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true
  },
  hadir: {
    type: Boolean,
    default: false
  },
  skor: {
    type: Number,
    default: 0
  },
  jawaban: [
    {
      soal_id: { type: mongoose.Schema.Types.ObjectId, ref: "Soal" },
      answer_content: String,
      is_correct: Boolean,
      score: Number,
      answered_at: Date
    }
  ],
  waktu_submit: Date
}, { _id: false });

const leaderboardSchema = new mongoose.Schema({
  account_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account"
  },
  skor: Number,
  full_name: String
}, { _id: false });

const ujianResultSchema = new mongoose.Schema({
  ujian_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ujian",
    required: true,
    unique: true
  },
  soal_group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SoalGroup",
    required: true
  },
  pengawas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true
  },
  peserta: [pesertaResultSchema],
  leaderboard: [leaderboardSchema], // top 10
  last_updated: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const UjianResult = mongoose.model("UjianResult", ujianResultSchema);
export default UjianResult;
