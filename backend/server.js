import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import pubRoutes from "./routes/pubRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Add a Root Route to Fix "Cannot GET /"
app.get("/", (req, res) => {
  res.send("🚀 Welcome to Pub-Rating API! The server is running.");
});

// ✅ API Routes
app.use("/api/pubs", pubRoutes);
app.use("/api/users", userRoutes);

// Handle 404 Errors for Undefined Routes
app.use((req, res, next) => {
  res.status(404).json({ message: "❌ Route Not Found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "❌ Server Error" });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
