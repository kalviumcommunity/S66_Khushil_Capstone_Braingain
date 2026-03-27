import mongoose from "mongoose";

const kc_MCQSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
});

export default mongoose.model("kc_MCQ", kc_MCQSchema);
