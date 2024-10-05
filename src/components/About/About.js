// src/components/About.js
import { motion } from 'framer-motion';

// Define the About component, which returns a JSX section element
const About = () => {
  return (
    // Section element with id 'about' and classes for padding and background color
    <section id="about" className="py-20 px-4 bg-gray-100">
      {/* Container div with max-width and horizontal margin for centering */}
      <div className="max-w-5xl mx-auto">
        {/* Animated h2 element with initial opacity 0, animating to opacity 1 over 1 second */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          About Me
        </motion.h2>
        {/* Animated p element with initial opacity 0 and x position -100, animating to opacity 1 and x position 0 over 1 second */}
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-700"
        >
          Recent Computer Science graduate with a BSc in Software Systems Development from South East Technological University. Skilled in front-end and back-end development using Java, Python, JavaScript, TypeScript, and more...
        </motion.p>
        {/* Animated div element with initial opacity 0 and y position 100, animating to opacity 1 and y position 0 over 1 second */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Education section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600">South East Technological University, Waterford</p>
            <p className="text-gray-600">BSc Software Systems Development (GPA: 2.1)</p>
          </div>
          {/* Certifications section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Certifications</h3>
            <p className="text-gray-600">AWS Cloud Practitioner (Sep 2022 - Sep 2025)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Export the About component as the default export
export default About;