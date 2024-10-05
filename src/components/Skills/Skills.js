// src/components/Skills.js
import { motion } from 'framer-motion';

const skills = [
  { name: 'Java', imgUrl: '/path-to-java-logo.png' },
  { name: 'React', imgUrl: '/path-to-react-logo.png' },
  { name: 'AWS', imgUrl: '/path-to-aws-logo.png' },
  { name: 'Python', imgUrl: '/path-to-python-logo.png' },
  { name: 'C++', imgUrl: '/path-to-cpp-logo.png' },
  { name: 'Docker', imgUrl: '/path-to-docker-logo.png' },
  { name: 'SQL', imgUrl: '/path-to-sql-logo.png' },
  { name: 'Git', imgUrl: '/path-to-git-logo.png' },
  { name: 'Linux', imgUrl: '/path-to-linux-logo.png' },
  { name: 'JavaScript', imgUrl: '/path-to-js-logo.png' },
  { name: 'TypeScript', imgUrl: '/path-to-ts-logo.png' },
  {name: 'koltin', imgUrl: ''},
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
