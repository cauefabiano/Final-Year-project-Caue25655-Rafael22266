import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import path from "path";
import fs from "fs";

const router = express.Router();

// POST /api/upload
router.post("/", upload.single("image"), (req, res) => {
    console.log("➡️ Upload route hit");
    console.log("📦 File received:", req.file);
  
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
  
    const filePath = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl: filePath });
  });

export default router;
