import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for mobile menu toggle

const Navbar = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false); // State to toggle profile menu

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md backdrop-blur-sm bg-opacity-90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
          >
            SaptJanm
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden text-pink-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Search Bar - Hidden on small screens */}
          <div className="hidden sm:flex items-center w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-2 rounded-full border-2 border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-600 transition-all duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative">
                {/* Profile picture and dropdown */}
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="flex items-center space-x-2"
                >
                  <img
                    src="https://via.placeholder.com/40"
                    className="rounded-full border-2 border-pink-100 hover:border-pink-300 transition-all duration-300"
                    alt="Profile"
                  />
                </button>

                {profileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                  >
                    <Link
                      to="/Profile"
                      className="block px-4 py-3 hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition-colors"
                    >
                      Profile Edit
                    </Link>
                    <Link
                      to="/help"
                      className="block px-4 py-3 hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition-colors"
                    >
                      Help
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-3 hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition-colors"
                    >
                      Settings
                    </Link>
                    <button className="w-full text-left px-4 py-3 hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition-colors">
                      Logout
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/auth"
                  className="bg-white text-pink-600 px-6 py-2 rounded-full border-2 border-pink-500 hover:bg-pink-50 hover:border-pink-600 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Login
                </Link>
                <Link
                  to="/auth?mode=signup"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:scale-105"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white shadow-md rounded-lg p-4 space-y-3"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-2 rounded-full border-2 border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-600 transition-all duration-300"
            />
            {isLoggedIn ? (
              <>
                <Link
                  to="/help"
                  className="block px-4 py-3 hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Help
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-3 hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Settings
                </Link>
                <button className="w-full text-left px-4 py-3 hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition-colors">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth"
                  className="block text-center bg-white text-pink-600 px-6 py-2 rounded-full border-2 border-pink-500 hover:bg-pink-50 hover:border-pink-600 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Login
                </Link>
                <Link
                  to="/auth?mode=signup"
                  className="block text-center bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:scale-105"
                >
                  Sign Up
                </Link>
              </>
            )}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
