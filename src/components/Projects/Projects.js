// // src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

// Define an array of project objects with detailed descriptions
const projects = [
  {
    title: 'Hydration Mate - Mobile App',
    description: 
      'Developed Hydration Mate, a mobile app to help users maintain regular hydration. It sends personalized reminders based on user activity, preferences, and weather conditions. Features include real-time notifications and user progress tracking.',
    techStack: 'Android Studio, Firebase, Material-UI (MUI)',
    impact: 'Increased user engagement by 38%.',
    tools: 'Git, VS Code, Postman API Platform',
    link: 'https://github.com/Maxamed-Maxamed',
  },
  {
    title: 'Movie Web Application',
    description: 
      'Created a Movie Web Application using the MERN stack (MongoDB, Express, React, Node.js) allowing users to browse and manage movie information sourced from the TMDB API. Utilized Redux for state management.',
    techStack: 'MERN Stack, Redux, Material-UI (MUI)',
    impact: 'Improved app performance by 25%.',
    tools: 'Git, VS Code, Postman API Platform',
    link: 'https://github.com/Maxamed-Maxamed',
  },
  {
    title: 'COVID-19 Data Analysis',
    description: 
      'Analyzed COVID-19 data for insights into infection trends and impacts. Employed Excel for data cleaning and visualization and Python for advanced analysis and machine learning.',
    techStack: 'Python, Pandas, NumPy, Matplotlib',
    impact: 'Created clear visualizations and predictive models.',
    tools: 'Excel, VS Code, Anaconda',
    link: 'https://github.com/Maxamed-Maxamed', // Update with appropriate link if available
  },
  {
    title: 'eCommerce Platform',
    description: 
      'Developed an eCommerce platform using Next.js, featuring product listings, shopping cart, and user authentication, optimized for performance and SEO.',
    techStack: 'Next.js, React, Tailwind CSS, AWS',
    impact: 'Ensured scalability and reliability.',
    tools: 'Git, VS Code',
    link: 'https://github.com/Maxamed-Maxamed', // Update with appropriate link if available
  },
  {
    title: 'Chat Application',
    description: 
      'Built a real-time messaging platform using Socket.io and Node.js, allowing users to create accounts, join chat rooms, and send messages instantly.',
    techStack: 'Node.js, Socket.io, React, Tailwind CSS',
    impact: 'Enhanced understanding of real-time communication technologies.',
    tools: 'JWT, Git, VS Code',
    link: 'https://github.com/Maxamed-Maxamed', // Update with appropriate link if available
  },
  {
    title: 'Task Management App',
    description: 
      'Developed a Task Management application using React and Node.js, allowing users to create, update, and delete tasks. Integrated with a MongoDB database for data persistence.',
    techStack: 'React, Node.js, MongoDB',
    impact: 'Streamlined task management, improving user productivity.',
    tools: 'Git, VS Code, Postman API Platform',
    link: 'https://github.com/Maxamed-Maxamed', // Update with appropriate link if available
  },
  
];

// Define the Projects component, which renders a section with a list of projects
const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-gray-800 font-semibold">Tech Stack: {project.techStack}</p>
                <p className="text-gray-800 font-semibold">Impact: {project.impact}</p>
                <p className="text-gray-800 font-semibold">Tools: {project.tools}</p>
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
