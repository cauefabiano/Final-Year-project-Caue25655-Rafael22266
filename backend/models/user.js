import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "User",
  },
  photo: {
    type: String,
  },
}, { timestamps: true });

// Avoid error of OverwriteModelError:
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
