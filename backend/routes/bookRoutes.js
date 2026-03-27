import { kc_getBooks } from "../controllers/bookController.js";
import express from "express";

const kc_router = express.Router();

kc_router.get("/", kc_getBooks);

export default kc_router;