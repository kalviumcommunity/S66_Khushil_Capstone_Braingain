import express from "express";
import { getBooks, addBook } from "../controllers/bookController.js";

const router = express.Router();

// GET
router.get("/", getBooks);

// POST
router.post("/", addBook);

export default router;