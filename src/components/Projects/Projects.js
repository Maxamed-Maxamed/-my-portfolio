// src/components/Projects.js
import { motion } from 'framer-motion';

// Define an array of project objects, each containing title, description, tech stack, and link
const projects = [
  {
    title: 'Hydration Mate - Mobile App',
    description:
      'A mobile app designed to help users maintain regular hydration. Built with Android Studio and Firebase.',
    techStack: 'Android Studio, Firebase, Material-UI',
    link: 'https://github.com/Maxamed-Maxamed',
  },
  {
    title: 'Movie Web Application',
    description:
      'Developed a movie web application using the MERN stack. Users can browse and manage movie information.',
    techStack: 'MongoDB, Express, React, Node.js, Material-UI',
    link: 'https://github.com/Maxamed-Maxamed',
  },
  // Add more projects
];

// Define the Projects component, which renders a section with a list of projects
const Projects = () => {
  return (
    // Create a section element with an id of "projects" and some basic styling
    <section id="projects" className="py-20 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Animate the heading with Framer Motion */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Projects
        </motion.h2>
        {/* Create a grid container to hold the project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map over the projects array and render a project card for each item */}
          {projects.map((project, index) => (
            // Animate the project card with Framer Motion
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6">
                {/* Display the project title */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                {/* Display the project description */}
                <p className="text-gray-600 mb-4">{project.description}</p>
                {/* Display the project tech stack */}
                <p className="text-gray-800 font-semibold">Tech Stack: {project.techStack}</p>
                {/* Link to the project */}
                <a
                  href={project.link}
                  className="block mt-4 text-teal-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export the Projects component
export default Projects;