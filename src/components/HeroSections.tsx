import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/images/material-area-2.jpg";
import image2 from "../assets/images/hero-image.webp";

const HeroSection = () => {
  const images = [image1, image2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center bg-gray-100"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 3s ease-in-out",
        opacity: 0.8,
        
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white"
        >
          Welcome to Zion Farm Land
        </motion.h1>
        <p className="text-lg mt-4">A modern and responsive landing page.</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;