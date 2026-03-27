import MCQ from "../models/MCQ.js";

// ✅ GET all MCQs
export const getMCQs = async (req, res) => {
  try {
    const mcqs = await MCQ.find();
    res.json(mcqs);
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