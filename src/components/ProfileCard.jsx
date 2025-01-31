import React from "react";
import { motion } from "framer-motion";

const ProfileCard = ({ profile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow transform duration-300"
    >
      <img
        src={profile.photo || "https://via.placeholder.com/400"}
        alt={profile.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <div className="flex items-baseline mb-2">
          <h3 className="text-xl font-bold mr-2">{profile.name}</h3>
          <span className="text-gray-600">{profile.age}</span>
        </div>

        <p className="text-gray-600 line-clamp-3 mb-4">{profile.description}</p>

        <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors shadow-md hover:shadow-xl">
          View More Details
        </button>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
