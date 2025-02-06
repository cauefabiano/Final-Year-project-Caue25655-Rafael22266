import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// ✅ Ensure routes are correct
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
