import Pub from "../models/Pub.js"; // Importing the Pub model

// Add a new pub to the database
export const addPub = async (req, res) => {
  const { name, location, rating, image } = req.body;

  // Check if required fields are provided
  if (!name || !location || !image) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    // Create a new Pub object
    const newPub = new Pub({ 
      name, 
      location, 
      rating: rating || 0, // Default rating to 0 if not provided
      image, 
      reviews: [] // Start with empty review list
    });

    // Save the pub to the database
    const savedPub = await newPub.save();

    // Return the saved pub in the response
    res.status(201).json(savedPub);
  } catch (error) {
    res.status(500).json({ message: "Error adding pub" });
  }
};

// Get a list of all pubs
export const getPubs = async (req, res) => {
  try {
    const pubs = await Pub.find(); // Retrieve all pubs from the database
    res.json(pubs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pubs" });
  }
};

// Get a specific pub by ID
export const getPubById = async (req, res) => {
  try {
    const pub = await Pub.findById(req.params.id); // Find pub by ID from URL
    if (!pub) return res.status(404).json({ message: "Pub not found" });
    res.json(pub);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pub" });
  }
};

// Add a review to a specific pub
export const addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const pubId = req.params.id;

  try {
    const pub = await Pub.findById(pubId); // Find the pub by ID
    if (!pub) return res.status(404).json({ message: "Pub not found" });

    // Create a new review object
    const newReview = { 
      rating: Number(rating), 
      comment, 
      createdAt: new Date() 
    };

    // Add the review to the pub
    pub.reviews.push(newReview);

    // Recalculate the average rating
    pub.rating = pub.reviews.reduce((sum, rev) => sum + rev.rating, 0) / pub.reviews.length;

    // Save the updated pub
    await pub.save();

    res.status(201).json({ message: "Review added successfully!", pub });
  } catch (error) {
    res.status(500).json({ message: "Error adding review" });
  }
};