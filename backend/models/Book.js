import mongoose from "mongoose";

const kc_BookSchema = new mongoose.Schema({
  image: String,
  title: String,
  author: String,
  publisher: String,
  summary: String,
});

export default mongoose.model("kc_Book", kc_BookSchema);
