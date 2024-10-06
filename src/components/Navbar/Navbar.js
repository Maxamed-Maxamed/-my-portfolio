import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle menu item click and close menu
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full z-10 top-0 left-0 h-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="hero" smooth={true} duration={500}>
            Maxamed Maxamed
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="about" smooth={true} duration={500} className="hover:text-gray-400">
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} className="hover:text-gray-400">
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-gray-400">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-gray-400">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <span className="text-3xl">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-start mt-4 space-y-4 bg-gray-800 p-4 rounded-lg shadow-lg"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={handleMenuItemClick} // Close menu on click
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={handleMenuItemClick} // Close menu on click
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={handleMenuItemClick} // Close menu on click
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={handleMenuItemClick} // Close menu on click
          >
            Contact
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
