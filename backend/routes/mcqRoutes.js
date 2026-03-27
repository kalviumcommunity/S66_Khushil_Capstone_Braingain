import { kc_getMCQs } from "../controllers/mcqController.js";
import express from "express";

const kc_router = express.Router();

kc_router.get("/", kc_getMCQs);

export default kc_router;