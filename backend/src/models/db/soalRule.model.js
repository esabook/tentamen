/**
 * //default rule:
 * acak-soal
 * acak-jawaban
 * skala nilai
 * skor tidak menjawab
 * boleh lompati soal
 * redirect ke soal selanjutnya setelah simpan
 */

import mongoose from "mongoose";

const soalRuleSchema = new mongoose.Schema({
  shuffle_soal: {
    type: Boolean,
    default: false, // default acak soal
  },
  shuffle_choices: {
    type: Boolean,
    default: false, // default acak pilihan jawaban
  },
  skor_unanswered: {
    type: Number,
    default: 0, // default skor untuk soal yang tidak dijawab
  },
  skor_wrong_answer: {
    type: Number,
    default: 1, // default skor untuk jawaban salah
  },
  skor_right_answer: {
    type: Number,
    default: 2, // default skor untuk jawaban benar
  },

  allow_skip_soal: {
    type: Boolean,
    default: true,
  },
  
  // jika true maka peserta ujian akan diarahkan ke soal selanjutnya setelah mengirim jawaban.
  redirect_next_soal: {
    type: Boolean,
    default: true,
  },

  // jika true maka peserta ujian akan dapat melihat hasil total skor sementara yang didapat, setelah kirim jawaban.
  show_end_result: {
    type: Boolean,
    default: false,
  },
  

});

const SoalRule = mongoose.model("SoalRule", soalRuleSchema);

export default SoalRule;
