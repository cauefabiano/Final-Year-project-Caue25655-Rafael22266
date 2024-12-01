import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import reviewRoutes from "./routes/reviewRoutes.js";

import userRoutes from "./routes/userRoutes.js";
import pubRoutes from "./routes/pubRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors({
  origin: "http://localhost:3000", // change if frontend runs on a different port
  credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// Serve static files from uploads folder
app.use("/uploads", express.static("uploads"));

// API routes
app.use("/api/users", userRoutes);
app.use("/api/pubs", pubRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/reviews", reviewRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
  });
