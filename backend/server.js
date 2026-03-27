import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import kc_bookRoutes from "./routes/bookRoutes.js";
import kc_mcqRoutes from "./routes/mcqRoutes.js";

dotenv.config();

const kc_app = express();

// ✅ CORS (no frontend URLs)
kc_app.use(cors());

kc_app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.KC_MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((kc_err) => console.log(kc_err));

// ✅ Test Route
kc_app.get("/", (req, res) => {
  res.send("GET API Backend is live");
});

// ✅ ONLY GET Routes
kc_app.use("/api/books", kc_bookRoutes);
kc_app.use("/api/mcq", kc_mcqRoutes);

// ✅ Server Start
kc_app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});