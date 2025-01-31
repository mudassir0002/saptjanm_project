// Modify the existing Dashboard component to include pagination and "View More"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfileCard from "../components/ProfileCard";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [mockMatches, setMockMatches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const matchesPerPage = 10;

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?gender=female&results=50");
        const data = await response.json();
        const profiles = data.results.map((user, i) => ({
          id: i,
          name: `${user.name.first} ${user.name.last}`,
          age: user.dob.age,
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          photo: user.picture.large,
        }));
        setMockMatches(profiles);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching profiles:", error);
        setIsLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const indexOfLastMatch = currentPage * matchesPerPage;
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
  const currentMatches = mockMatches.slice(indexOfFirstMatch, indexOfLastMatch);

  const handleNextPage = () => {
    if (currentPage * matchesPerPage < mockMatches.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar isLoggedIn={true} />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 animate-pulse">
            Loading...
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar isLoggedIn={true} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Matches</h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {currentMatches.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </motion.div>

        <div className="mt-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNextPage}
            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors shadow-md"
          >
            View More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
