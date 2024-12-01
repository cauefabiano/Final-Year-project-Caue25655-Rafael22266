import React from 'react';
import { Info } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div
      className="mt-20 px-6 max-w-4xl mx-auto text-center text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-center mb-4">
        <Info size={40} className="text-yellow-400" />
      </div>

      <h1 className="text-5xl font-bold mb-6 text-yellow-400">About Us</h1>

      <p className="text-lg mb-4">
        Welcome to our <span className="font-semibold text-yellow-300">Pub Rating</span> application!
      </p>

      <p className="text-base mb-4 leading-relaxed">
        This platform was developed as part of a college project to provide users with a simple and enjoyable way to explore, rate, and review local pubs.
      </p>

      <div className="bg-yellow-100 text-black p-4 rounded-lg shadow-md mb-4 text-left">
        <p className="font-semibold mb-2">With this app, you can:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Discover new pubs</li>
          <li>Share your experience by leaving reviews</li>
          <li>View community feedback</li>
        </ul>
      </div>

      <p className="text-base mb-4 leading-relaxed">
        We focused on creating a smooth user experience, combining a modern interface with real-time database interaction. Whether you're just curious or passionate about pubs, this app was built with you in mind.
      </p>

      <p className="text-lg font-medium text-yellow-300">
        Enjoy exploring — and feel free to add your favorite spot! 🍻
      </p>
    </motion.div>
  );
};

export default AboutUs;
