// import MCQ from "../models/MCQ.js";
import kc_MCQ from "../models/MCQ.js";

// ✅ GET all MCQs
export const getMCQs = async (req, res) => {
  try {
    const mcqs = await kc_MCQ.find().populate("bookId");

    res.json({
      message: "MCQs fetched successfully",
      data: mcqs,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ POST add MCQ
export const addMCQ = async (req, res) => {
  try {
    const newMCQ = new MCQ(req.body);
    await newMCQ.save();

    res.status(201).json({
      message: "MCQ added successfully",
      data: newMCQ
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ PUT update MCQ
export const updateMCQ = async (req, res) => {
  try {
    const updatedMCQ = await MCQ.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "MCQ updated successfully",
      data: updatedMCQ
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// import MCQ from "../models/MCQ.js";
// import Book from "../models/Book.js";

// // GET all MCQs
// export const getMCQs = async (req, res) => {
//   try {
//     const mcqs = await MCQ.find().populate("book"); // optional but good

//     res.json(mcqs);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // POST MCQ (WITH RELATIONSHIP)
// export const addMCQ = async (req, res) => {
//   try {
//     const { bookId, question, options, answer } = req.body;

//     // 1. Create MCQ linked to book
//     const newMCQ = await MCQ.create({
//       question,
//       options,
//       answer,
//       book: bookId,
//     });

//     // 2. Push MCQ into Book
//     await Book.findByIdAndUpdate(bookId, {
//       $push: { mcqs: newMCQ._id },
//     });

//     res.status(201).json({
//       message: "MCQ added and linked to Book successfully",
//       data: newMCQ,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // UPDATE MCQ
// export const updateMCQ = async (req, res) => {
//   try {
//     const updatedMCQ = await MCQ.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     res.json({
//       message: "MCQ updated successfully",
//       data: updatedMCQ,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };