import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

const Profile = () => {
  // Retrieve user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const email = storedUser?.email || "Not available";
  const name = storedUser?.name || "User";
  const photo = storedUser?.photo || "https://i.pravatar.cc/150?u=default"; // fallback avatar

  return (
    <motion.div
      className="mt-24 text-center text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-4">
        <img
          src={photo}
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-md"
        />
      </div>

      <h2 className="text-3xl font-bold text-yellow-400 mb-2">{name}'s Profile</h2>
      <p className="text-lg mb-2">Welcome to your profile page!</p>

      <div className="mt-6 bg-yellow-100 text-black p-4 rounded shadow-md max-w-md mx-auto">
        <p><strong>Email:</strong> {email}</p>
      </div>
    </motion.div>
  );
};

export default Profile;
