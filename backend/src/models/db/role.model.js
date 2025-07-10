import mongoose from "mongoose";
import { toSnakeCase } from "../../libs/util.js";

const roleSchema = new mongoose.Schema(
  {
    _id: {
      type: String
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    permissions: [
      {
        type: String,
        ref: "Permission",
      },
    ],
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

roleSchema.path("name").set(function (v) {
  this._id = toSnakeCase(v);
  return v;
});

const Role = mongoose.model("Role", roleSchema);

export default Role;
