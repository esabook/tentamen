import mongoose from "mongoose";
import { toSnakeCase } from "../../libs/util.js";

const permissionSchema = new mongoose.Schema(
  {
    _id: {
      type: String
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      lowercase: true,
    },
    description: {
      type: String,
      maxlength: 500,
    },
  },
  { timestamps: true }
);

permissionSchema.path("name").set(function (v) {
  this._id = toSnakeCase(v);
  return v;
});

const Permission = mongoose.model("Permission", permissionSchema);

export default Permission;
