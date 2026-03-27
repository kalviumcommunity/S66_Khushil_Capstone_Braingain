import express from "express";
import { getMCQs, addMCQ } from "../controllers/mcqController.js";

const router = express.Router();

// GET
router.get("/", getMCQs);

// POST
router.post("/", addMCQ);

export default router;