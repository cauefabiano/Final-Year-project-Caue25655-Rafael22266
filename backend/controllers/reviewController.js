import asyncHandler from "express-async-handler";
import Pub from "../models/Pub.js";

// ✅ POST /api/reviews
export const addReview = asyncHandler(async (req, res) => {
  const { pubId, rating, comment } = req.body;

  if (!req.user) {
    res.status(401);
    throw new Error("Not authorized. User not found.");
  }

  const user = req.user;

  const pub = await Pub.findById(pubId);
  if (!pub) {
    res.status(404);
    throw new Error("Pub not found");
  }

  const alreadyReviewed = pub.reviews.find(
    (r) => r.user.toString() === user._id.toString()
  );
  if (alreadyReviewed) {
    res.status(400);
    throw new Error("Pub already reviewed");
  }

  const review = {
    name: user.name,
    rating: Number(rating),
    comment,
    user: user._id,
  };

  pub.reviews.push(review);
  pub.numReviews = pub.reviews.length;
  pub.rating =
    pub.reviews.reduce((acc, item) => item.rating + acc, 0) / pub.reviews.length;

  await pub.save();

  res.status(201).json({ message: "Review added successfully!" });
});
