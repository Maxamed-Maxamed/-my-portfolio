// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

// Hero component that displays a hero section with a heading, subheading, and a call-to-action button
const Hero = () => {
  return (
    // Hero section container with a full-screen height, centered content, and a dark gray background
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      {/* Animated heading that fades in and moves up from the bottom */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }} // Initial state: invisible and 50px above its final position
        animate={{ opacity: 1, y: 0 }} // Final state: visible and at its final position
        transition={{ duration: 1 }} // Animation duration: 1 second
        className="text-5xl md:text-6xl font-bold"
      >
        Maxamed Maxamed
      </motion.h1>
      {/* Animated subheading that fades in and moves up from the bottom */}
      <motion.p
        initial={{ opacity: 0, y: 50 }} // Initial state: invisible and 50px below its final position
        animate={{ opacity: 1, y: 0 }} // Final state: visible and at its final position
        transition={{ duration: 1, delay: 0.5 }} // Animation duration: 1 second, delayed by 0.5 seconds
        className="mt-4 text-lg md:text-xl"
      >
        Recent Computer Science Graduate & Full-Stack Developer
      </motion.p>
      {/* Animated call-to-action button that fades in */}
      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition"
        initial={{ opacity: 0 }} // Initial state: invisible
        animate={{ opacity: 1 }} // Final state: visible
        transition={{ duration: 1, delay: 1 }} // Animation duration: 1 second, delayed by 1 second
      >
        View Projects
      </motion.a>
    </section>
  );
};

// Export the Hero component as the default export
export default Hero;