import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileCreation from "../pages/ProfileCreation";
import Dashboard from "../pages/Dashboard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar isLoggedIn={false} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-red-500 py-20 text-white text-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto px-6"
        >
          <h1 className="text-5xl font-extrabold mb-6">Find Your Perfect Match</h1>
          <p className="text-lg mb-6 opacity-90">Join millions of happy couples who found love through us</p>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-white text-pink-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-pink-100 transition"
            >
              <Link to="/auth?mode=signup">Join Now</Link>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-600 transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-12 tracking-tight">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { step: "1", title: "Create a Profile", desc: "Sign up and personalize your profile in just a few clicks." },
              { step: "2", title: "Find Matches", desc: "Our AI-powered system finds the best matches for you." },
              { step: "3", title: "Connect & Chat", desc: "Start meaningful conversations and build connections." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(236, 72, 153, 0.2)" }}
                className="p-10 bg-white/80 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg transform transition-all duration-300"
              >
                <div className="text-6xl font-extrabold text-pink-500 drop-shadow-md mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 text-center backdrop-blur-sm bg-gray-100/40">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Smart Matching", icon: "💡" },
              { title: "Secure Platform", icon: "🔒" },
              { title: "24/7 Support", icon: "⏳" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="p-8 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 border border-gray-200"
              >
                <div className="text-6xl mb-4 text-pink-600">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{`Find your best match effortlessly with our AI-powered system.`}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-12 tracking-tight">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: "Aisha & Rahul",
                review: "We never thought we'd find love online, but here we are, engaged! This platform is truly amazing.",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Neha & Arjun",
                review: "I met my best friend and soulmate here. This platform is life-changing!",
                image: "https://randomuser.me/api/portraits/men/45.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(236, 72, 153, 0.2)" }}
                className="p-8 bg-white/80 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg transform transition-all duration-300"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 mx-auto rounded-full border-4 border-pink-300 shadow-md mb-4"
                />
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "{testimonial.review}"
                </p>
                <h3 className="text-2xl font-semibold mt-4 text-pink-600">{testimonial.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Creation Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <ProfileCreation />
          {/* <Profile /> */}
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Dashboard />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
