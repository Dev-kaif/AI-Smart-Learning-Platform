import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "./Rstyle.css"; // Make sure to include your custom CSS file or embedded style

const Navbar = () => {
  // Define animation variants for the navbar
  const navVariants = {
    hidden: { opacity: 0, y: -20 }, // Initial state (invisible and slightly moved up)
    visible: { 
      opacity: 1, // Fully visible
      y: 0, // Normal position
      transition: { duration: 1, ease: "easeInOut" } // Animation details
    },
  };

  return (
    <motion.div 
      id="res-nav"
      initial="hidden" // Set initial state
      animate="visible" // Animate to the visible state
      variants={navVariants} // Apply the defined variants
    >
      <div className="res-nav-con"></div>
      <div>
        <a href="/" className="res-nav-link">Home</a>
        <a href="/about" className="res-nav-link">About</a>
      </div>
    </motion.div>
  );
};

export default Navbar;
