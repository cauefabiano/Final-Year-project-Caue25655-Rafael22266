import express from "express";
import { addPub, getPubs, getPubById, addReview } from "../controllers/pubController.js";

const router = express.Router();

// ✅ Add a new pub
router.post("/add", addPub);

// ✅ Get all pubs
router.get("/", getPubs);

// ✅ Get a single pub by ID
router.get("/:id", getPubById);

// ✅ Add a review to a pub
router.post("/:id/review", addReview);

export default router;
