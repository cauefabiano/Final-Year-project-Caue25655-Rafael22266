import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    pub: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pub",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// Prevent OverwriteModelError
const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
