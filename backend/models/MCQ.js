import mongoose from "mongoose";

const kc_MCQSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },

    // 🔥 RELATIONSHIP
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "kc_Book",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("kc_MCQ", kc_MCQSchema);