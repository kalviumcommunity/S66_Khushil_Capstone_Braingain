import express from "express";
import { getBooks, addBook, updateBook } from "../controllers/bookController.js";

const router = express.Router();

// GET
router.get("/", getBooks);

// POST
router.post("/", addBook);

// PUT
router.put("/:id", updateBook);

export default router;