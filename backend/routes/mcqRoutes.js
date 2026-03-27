import express from "express";
import { getMCQs, addMCQ, updateMCQ } from "../controllers/mcqController.js";

const router = express.Router();

// GET
router.get("/", getMCQs);

// POST
router.post("/", addMCQ);

// PUT
router.put("/:id", updateMCQ);

export default router;