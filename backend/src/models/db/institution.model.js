import mongoose from "mongoose";

/**
 * nama
 * alamat
 * kota
 * kab
 * jenis
 *
 * username //untuk website
 *
 * email
 * nama lengkap
 * whatsapp
 *
 * afiliate_code
 * my_afiliate_code
 *
 */
const institutionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
  },
  address: {
    type: String,
  },
  city_region: {
    type: String,
  },
  provincy: {
    type: String,
  },

  username: {
    //admin name
    type: String,
    required: true,
    unique: true,
  },
  
  email: {
    type: String,
  },
  full_name: {
    type: String,
  },
  whatsapp: {
    type: String,
  },
  affiliate_code: {
    type: String,
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
