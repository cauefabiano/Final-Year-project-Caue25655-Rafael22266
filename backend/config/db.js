import mongoose from "mongoose";

// Function that connects the backend to MongoDB
const connectDB = async () => {
  try {
    // Check if the environment variable exists
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing from the environment variables");
    }

    // Connect to MongoDB using Mongoose
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log a success message when connected
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // Log an error message if connection fails
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1); // Stop the server if the database connection fails
  }
};

export default connectDB;