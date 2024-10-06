// // // src/components/About.js
// // import { motion } from 'framer-motion';

// // // Define the About component, which returns a JSX section element
// // const About = () => {
// //   return (
// //     // Section element with id 'about' and classes for padding and background color
// //     <section id="about" className="py-20 px-4 bg-gray-100">
// //       {/* Container div with max-width and horizontal margin for centering */}
// //       <div className="max-w-5xl mx-auto">
// //         {/* Animated h2 element with initial opacity 0, animating to opacity 1 over 1 second */}
// //         <motion.h2
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 1 }}
// //           className="text-4xl font-bold mb-6 text-center"
// //         >
// //           About Me
// //         </motion.h2>
// //         {/* Animated p element with initial opacity 0 and x position -100, animating to opacity 1 and x position 0 over 1 second */}
// //         <motion.p
// //           initial={{ opacity: 0, x: -100 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 1 }}
// //           className="text-lg text-gray-700"
// //         >
// //           Recent Computer Science graduate with a BSc in Software Systems Development from South East Technological University. Skilled in front-end and back-end development using Java, Python, JavaScript, TypeScript, and more...
// //         </motion.p>
// //         {/* Animated div element with initial opacity 0 and y position 100, animating to opacity 1 and y position 0 over 1 second */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 100 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1 }}
// //           className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
// //         >
// //           {/* Education section */}
// //           <div>
// //             <h3 className="text-xl font-semibold mb-2">Education</h3>
// //             <p className="text-gray-600">South East Technological University, Waterford</p>
// //             <p className="text-gray-600">BSc Software Systems Development (GPA: 2.1)</p>
// //           </div>
// //           {/* Certifications section */}
// //           <div>
// //             <h3 className="text-xl font-semibold mb-2">Certifications</h3>
// //             <p className="text-gray-600">AWS Cloud Practitioner (Sep 2022 - Sep 2025)</p>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // // Export the About component as the default export
// // export default About;


// import React from "react";
// // src/components/About.js
// import { motion } from 'framer-motion';

// // Define the About component, which returns a JSX section element
// const About = () => {
//   return (
//     // Section element with id 'about' and classes for padding and background color
//     <section id="about" className="py-20 px-4 bg-gray-100">
//       {/* Container div with max-width and horizontal margin for centering */}
//       <div className="max-w-5xl mx-auto">
//         {/* Animated h2 element for the title */}
//         <motion.h2
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-4xl font-bold mb-6 text-center"
//         >
//           About Me
//         </motion.h2>
//         {/* About Me paragraph with your updated information */}
//         <motion.p
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="text-lg text-gray-700 mb-6"
//         >
//           Recent Computer Science graduate with a BSc in Software Systems Development from South East Technological University. Skilled in front-end and back-end development using Java, Python, JavaScript, TypeScript, and Kotlin and more. Hands-on experience with React.js, Next.js, Vue.js, Node.js, and Django. Proficient in database management (MySQL, MongoDB, Firebase) and familiar with Git, Docker, and AWS. 
//           <br/>AWS Certified Cloud Practitioner with strong problem-solving abilities and a passion for building scalable applications.<br/>
//         </motion.p>
//         {/* Animated div element for Education and Certifications */}
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
//         >
//           {/* Education section */}
//           <div>
//             <h3 className="text-xl font-semibold mb-2">Education</h3>
//             <p className="text-gray-600">South East Technological University, Waterford</p>
//             <p className="text-gray-600">BSc Software Systems Development (GPA: 2.1)</p>
//           </div>
//           {/* Certifications section */}
//           <div>
//             <h3 className="text-xl font-semibold mb-2">Certifications</h3>
//             <p className="text-gray-600">AWS Cloud Practitioner (Sep 2022 - Sep 2025)</p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Export the About component as the default export
// export default About;



// src/components/About.js
import React from "react";
import { motion } from 'framer-motion';

// Define the About component, which returns a JSX section element
const About = () => {
  return (
    // Section element with id 'about' and classes for padding and background color
    <section id="about" className="py-20 px-4 bg-gray-100">
      {/* Container div with max-width and horizontal margin for centering */}
      <div className="max-w-5xl mx-auto">
        {/* Animated h2 element for the title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          About Me
        </motion.h2>
        {/* About Me paragraph with your updated information */}
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-700 mb-6"
        >
          Recent Computer Science graduate with a BSc in Software Systems Development from South East Technological University. Skilled in front-end and back-end development using Java, Python, JavaScript, TypeScript, and Kotlin. Hands-on experience with React.js, Next.js, Vue.js, Node.js, and Django. Proficient in database management (MySQL, MongoDB, Firebase) and familiar with Git, Docker, and AWS.
          <br />AWS Certified Cloud Practitioner with strong problem-solving abilities and a passion for building scalable applications. Seeking an entry-level or internship role to apply technical skills and contribute to innovative projects.
        </motion.p>
        {/* Animated div element for Education and Certifications */}
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
        {/* Hobbies/Interests section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8"
        >
          <h3 className="text-xl font-semibold mb-2">Hobbies & Interests</h3>
          <p className="text-gray-700">
            In my free time, I enjoy exploring the world of coding through personal projects and participating in online hackathons, which helps me stay updated with the latest technologies. I have a passion for reading, particularly in the realms of technology and science fiction, as it fuels my creativity and inspires innovative ideas. Additionally, I love outdoor activities like hiking and cycling, which allow me to connect with nature and maintain a healthy lifestyle. Cooking is another interest of mine, as I enjoy experimenting with new recipes and flavors, often sharing my culinary creations with friends and family.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Export the About component as the default export
export default About;
