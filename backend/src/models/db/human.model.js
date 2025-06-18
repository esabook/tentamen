import mongoose from "mongoose";

/**
 * identity //nis, ktp, hp, nip
 * full_name
 * birth_date
 * contact
 * profile_image
 */
const humanSchema = new mongoose.Schema({
  identity: {
    type: String,
    required: true,
    unique: true,
  },
  identity_type: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
  },
  birth_date: {
    type: String,
  },
  contact: {
    type: String,
  },
  contact_other: {
    type: String,
  },
  profile_image: {
    type: String,
  },
  archived: {
    type: Boolean,
    default: false,
  },
});

const Human = mongoose.model("Human", humanSchema);

export default Human;
