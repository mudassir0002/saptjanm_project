import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa"; // Importing profile icon

const ProfileCreation = () => {
  const [step, setStep] = useState(1);
  const [profileData, setProfileData] = useState({
    name: "",
    dob: "",
    gender: "",
    location: "",
    preferences: "",
    photo: null,
  });

  const handleFileChange = (e) => {
    setProfileData({ ...profileData, photo: e.target.files[0] });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-lg mx-auto p-8 bg-white shadow-xl rounded-2xl border border-gray-200 mt-10"
    >
      {/* Step Progress Bar */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((num) => (
          <motion.div
            key={num}
            animate={{ scale: step === num ? 1.2 : 1 }}
            className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold transition-all duration-300 shadow-md ${step === num ? "bg-pink-600 text-white" : "bg-gray-300 text-gray-600"
              }`}
          >
            {num}
          </motion.div>
        ))}
      </div>

      {/* Step Content */}
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="h-96"
      >
        {step === 1 && (
          <div className="space-y-6 h-full flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Basic Information</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
            />
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              onChange={(e) => setProfileData({ ...profileData, dob: e.target.value })}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setStep(2)}
              className="w-full bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-700 transition"
            >
              Next
            </motion.button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 h-full flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Preferences</h2>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Location"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
            />
            <textarea
              placeholder="Partner Preferences"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              onChange={(e) => setProfileData({ ...profileData, preferences: e.target.value })}
            />
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setStep(1)}
                className="bg-gray-400 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-500 transition"
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setStep(3)}
                className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-700 transition"
              >
                Next
              </motion.button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Profile Photo</h2>
            <div className="relative w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute w-full h-full opacity-0 cursor-pointer rounded-full"
              />
              {profileData.photo ? (
                <img
                  src={URL.createObjectURL(profileData.photo)}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <FaUserCircle className="text-gray-500 text-6xl" />
              )}
            </div>

            {/* Button Container */}
            <div className="flex space-x-4">
              {/* Back Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setStep(2)} // Navigate back to Step 2
                className="w-1/2 bg-gray-300 text-gray-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-400 transition"
              >
                Back
              </motion.button>

              {/* Complete Profile Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-1/2 bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-700 transition"
              >
                Complete Profile
              </motion.button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProfileCreation;
