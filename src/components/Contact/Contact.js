// src/components/Contact.js
import { motion } from 'framer-motion';

// Contact component that handles user input and form submission
const Contact = () => {
  return (
    // Section element with id 'contact' and styles for padding, background color, and text color
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
      {/* Container element with max-width and horizontal margin */}
      <div className="max-w-5xl mx-auto">
        {/* Animated heading element with initial and animate states */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Contact Me
        </motion.h2>
        {/* Flex container for form and social media links */}
        <div className="flex flex-col items-center">
          {/* Form element with action and method attributes */}
          <form className="w-full md:w-2/3 lg:w-1/2" action="https://formspree.io/f/{YOUR_ID}" method="POST">
            {/* Animated input element for user name */}
            <motion.input
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
              required
            />
            {/* Animated input element for user email */}
            <motion.input
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
              required
            />
            {/* Animated textarea element for user message */}
            <motion.textarea
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              placeholder="Your Message"
              className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
              rows="5"
              required
            ></motion.textarea>
            {/* Animated button element for form submission */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              type="submit"
              className="w-full bg-teal-500 p-3 rounded-lg hover:bg-teal-600 transition"
            >
              Send Message
            </motion.button>
          </form>

          {/* Container element for social media links */}
          <div className="mt-8 text-center">
            <p className="mb-4">Or connect with me on:</p>
            {/* Flex container for social media links */}
            <div className="space-x-4">
              {/* LinkedIn link */}
              <a href="https://www.linkedin.com/in/maxamed-maxamed-a87298151/" target="_blank" rel="noopener noreferrer">
                <img src="/path-to-linkedin-logo.png" alt="LinkedIn" className="h-8 inline-block" />
              </a>
              {/* GitHub link */}
              <a href="https://github.com/Maxamed-Maxamed" target="_blank" rel="noopener noreferrer">
                <img src="/path-to-github-logo.png" alt="GitHub" className="h-8 inline-block" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the Contact component as the default export
export default Contact;