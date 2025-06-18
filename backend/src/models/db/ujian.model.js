import mongoose from "mongoose";

const ujianSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  peserta: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // user dengan role siswa
  }],
  pengawas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // user dengan role guru pengawas
    required: true
  },
  soal_group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SoalGroup",
    required: true
  },
  time_start: {
    type: Date
  },
  time_finish: {
    type: Date
  },
  start_pin: {
    code: { type: String },
    generated_at: { type: Date },
    expired_at: { 
        type: Date,
        default: function() {
            return this.waktu_selesai; // Default ke waktu_selesai jika tidak di-set
        },
        validate: {
            validator: function(v) {
                return v > this.pin_ujian.generated_at; // Pastikan expired_at lebih besar dari generated_at
            },
            message: props => `expired_at (${props.value}) harus lebih besar dari generated_at (${this.pin_ujian.generated_at})`
        }
    
     }
  },
  status: {
    type: String,
    enum: ["draft", "waiting", "started", "finished"],
    default: "draft"
  }
}, { timestamps: true });

// Method untuk generate PIN dan set expired 50 menit
ujianSchema.methods.generatePin = function() {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const now = new Date();
  this.pin_ujian = {
    code,
    generated_at: now,
    expired_at: new Date(now.getTime() + 50 * 60000)
  };
  this.status = "waiting";
};

const Ujian = mongoose.model("Ujian", ujianSchema);
export default Ujian;
