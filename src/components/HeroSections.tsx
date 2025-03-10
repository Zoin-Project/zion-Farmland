import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/images/material-area-2.jpg";
import image2 from "../assets/images/hero-image.webp";
import image3 from "../assets/images/hero-image.jpg";

const HeroSection = () => {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center bg-gray-100"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold"
      >
        Welcome to My Landing Page
      </motion.h1>
      <p className="text-lg mt-4">A modern and responsive landing page.</p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;