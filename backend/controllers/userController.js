import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

// ✅ Register a new user
export const registerUser = asyncHandler(async (req, res) => {
  const { email, password, name, photo } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashedPassword,
    name,
    photo,
  });

  if (user) {
    res.status(201).json({
      token: generateToken(user._id),
      user: {
        email: user.email,
        name: user.name || "User",
        photo: user.photo || `https://i.pravatar.cc/150?u=${user._id}`,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// ✅ Login user
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      token: generateToken(user._id),
      user: {
        email: user.email,
        name: user.name || "User",
        photo: user.photo || `https://i.pravatar.cc/150?u=${user._id}`,
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});