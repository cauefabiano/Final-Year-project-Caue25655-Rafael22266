import Pub from "../models/Pub.js";

// ✅ Add a new pub
export const addPub = async (req, res) => {
  const { name, location, rating, image } = req.body;

  if (!name || !location || !image) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    const newPub = new Pub({ 
      name, 
      location, 
      rating: rating || 0, 
      image, 
      reviews: [] 
    });
    
    const savedPub = await newPub.save();
    res.status(201).json(savedPub);
  } catch (error) {
    res.status(500).json({ message: "Error adding pub" });
  }
};

// ✅ Get all pubs
export const getPubs = async (req, res) => {
  try {
    const pubs = await Pub.find();
    res.json(pubs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pubs" });
  }
};

// ✅ Get a single pub by ID
export const getPubById = async (req, res) => {
  try {
    const pub = await Pub.findById(req.params.id);
    if (!pub) return res.status(404).json({ message: "Pub not found" });
    res.json(pub);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pub" });
  }
};

// ✅ Add a review to a pub
export const addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const pubId = req.params.id;

  try {
    const pub = await Pub.findById(pubId);
    if (!pub) return res.status(404).json({ message: "Pub not found" });

    const newReview = { 
      rating: Number(rating), 
      comment, 
      createdAt: new Date() 
    };

    pub.reviews.push(newReview);
    pub.rating = pub.reviews.reduce((sum, rev) => sum + rev.rating, 0) / pub.reviews.length;
    await pub.save();

    res.status(201).json({ message: "Review added successfully!", pub });
  } catch (error) {
    res.status(500).json({ message: "Error adding review" });
  }
};
