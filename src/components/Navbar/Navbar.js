// src/components/Navbar.js

import { useState } from 'react'; // Importing useState hook from React
import { motion } from 'framer-motion'; // Importing motion component from framer-motion for animations

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the open/close status of the mobile menu

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full z-10"> {/* Navbar container with styling */}
      <div className="max-w-7xl mx-auto flex justify-between items-center"> {/* Container for navbar content */}
        <div className="text-xl font-bold"> {/* Logo or brand name */}
          <a href="./hero">Maxamed Maxamed</a>
        </div>
        <div className="hidden md:flex space-x-6"> {/* Links for larger screens */}
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/skills" className="hover:text-gray-400">Skills</a>
          <a href="/projects" className="hover:text-gray-400">Projects</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>

        <div className="md:hidden"> {/* Hamburger menu button for smaller screens */}
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <span className="text-3xl">☰</span> {/* Hamburger icon */}
          </button>
        </div>
      </div>
      {isOpen && ( // Conditional rendering of the mobile menu
        <motion.div
          initial={{ opacity: 0, height: 0 }} // Initial animation state
          animate={{ opacity: 1, height: 'auto' }} // Animation state when open
          className="md:hidden flex flex-col items-start mt-4 space-y-4"
        >
          <a href="#about" className="block px-4">About</a> {/* Mobile menu links */}
          <a href="#skills" className="block px-4">Skills</a>
          <a href="#projects" className="block px-4">Projects</a>
          <a href="#contact" className="block px-4">Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; // Exporting the Navbar component 
