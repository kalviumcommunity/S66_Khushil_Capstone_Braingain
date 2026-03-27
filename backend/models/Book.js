import mongoose from "mongoose";

const kc_BookSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    publisher: {
      type: String,
    },
    summary: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("kc_Book", kc_BookSchema);