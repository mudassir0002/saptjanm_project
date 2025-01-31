import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [aboutMe, setAboutMe] = useState("This is my bio...");
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("Male");

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar isLoggedIn={true} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Profile</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center space-x-6 mb-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <input
                type="file"
                onChange={handleProfilePictureChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <img
                src={profilePicture || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
              />
            </motion.div>
            <div>
              <motion.h2
                className="text-2xl font-semibold text-gray-800"
                whileHover={{ scale: 1.1 }}
              >
                {name}, {age}
              </motion.h2>
              <p className="text-gray-600">{gender}</p>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="about-me"
              className="block text-lg font-medium text-gray-700"
            >
              About Me
            </label>
            <textarea
              id="about-me"
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
              rows="4"
            />
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Save Changes
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancel
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
