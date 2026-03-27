import kc_MCQ from "../models/MCQ.js";

export const kc_getMCQs = async (kc_req, kc_res) => {
  const kc_mcqs = await kc_MCQ.find();
  kc_res.json(kc_mcqs);
};