// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Java', imgUrl: 'https://www.svgrepo.com/show/184143/java.svg' },
  { name: 'React', imgUrl: 'https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg' },
  { name: 'AWS', imgUrl: 'https://www.svgrepo.com/show/353443/aws.svg' },
  { name: 'Python', imgUrl: 'https://www.svgrepo.com/show/376344/python.svg' },
  { name: 'C++', imgUrl: 'https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png' },
  { name: 'Docker', imgUrl: 'https://www.svgrepo.com/show/331370/docker.svg' },
  { name: 'SQL', imgUrl: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
  { name: 'Git', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png' },
  { name: 'Linux', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1727px-Tux.svg.png' },
  { name: 'JavaScript', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png' },
  { name: 'TypeScript', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' },
  { name: 'Kotlin', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kotlin_logo.svg/2560px-Kotlin_logo.svg.png' }, // Placeholder image
  // Add more skills with logo URLs
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-100 text-black">
          {skills.map((skill) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={skill.name}
              className="flex flex-col items-center"
            >
              <img src={skill.imgUrl} alt={skill.name} className="h-16 w-16 object-contain" />
              <p className="mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

