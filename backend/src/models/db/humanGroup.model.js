import mongoose from "mongoose";

/**
 * Model untuk grup/kelas/kelompok manusia (HumanGroup)
 * Bisa berisi human yang sudah punya account maupun belum.
 */
const humanGroupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default: "",
    },
    avatar: {
      type: String,
      default: "",
    },
    children: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HumanGroup",
        default: [],
      },
    ],
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HumanGroup",
      default: null,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Human",
      },
    ],
    is_active: {
      type: Boolean,
      default: true,
    },
    is_archived: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const HumanGroup = mongoose.model("HumanGroup", humanGroupSchema);
export default HumanGroup;
