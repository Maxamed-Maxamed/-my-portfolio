import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../assets/mine.jpeg'; // Import your profile image

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-12">
      {/* Left Side Text */}
      <div className="flex-1 max-w-lg text-center md:text-left space-y-8">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-wide"
        >
          Welcome, I'm <span className="text-teal-400">Maxamed Maxamed</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base md:text-lg font-light leading-loose"
        >
          A passionate Computer Science graduate and skilled Full-Stack Developer with a focus on creating efficient and scalable web applications.
        </motion.p>
        <motion.a
          href="#projects"
          className="inline-block px-10 py-3 bg-teal-500 text-white font-medium rounded-md shadow-md hover:bg-teal-600 transition transform hover:scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Explore My Work
        </motion.a>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] mx-auto rounded-full shadow-2xl border-4 border-teal-500 overflow-hidden"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-gray-800 opacity-30"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
