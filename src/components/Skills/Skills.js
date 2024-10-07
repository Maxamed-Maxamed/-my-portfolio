import React from 'react';
import { motion } from 'framer-motion'; 
import { Card, CardContent, Typography, Grid } from '@mui/material';

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: 'Java', imgUrl: 'https://www.svgrepo.com/show/184143/java.svg' },
      { name: 'Python', imgUrl: 'https://www.svgrepo.com/show/376344/python.svg' },
      { name: 'JavaScript', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png' },
      { name: 'HTML/CSS', imgUrl: 'https://logowik.com/content/uploads/images/css3-html51661.jpg' },
      { name: 'Kotlin', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kotlin_logo.svg/2560px-Kotlin_logo.svg.png' },
      { name: 'TypeScript', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' },
    ],
  },
  {
    category: "Frameworks and Libraries",
    skills: [
      { name: 'React', imgUrl: 'https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg' },
      { name: 'Next.js', imgUrl: 'https://nextjs.org/static/favicon/favicon.ico' },
      { name: 'Node.js', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo_2015.svg/1024px-Node.js_logo_2015.svg.png' },
      { name: 'Vue.js', imgUrl: 'https://vuejs.org/images/logo.png' },
      { name: 'Django', imgUrl: 'https://www.djangoproject.com/m/img/logos/django-logo-negative.png' },
      { name: 'Flutter', imgUrl: 'https://flutter.dev/assets/images/shared/brand/flutter/logo/flutter-lockup.png' },
      // Add other frameworks as necessary
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      { name: 'Android Studio', imgUrl: 'https://developer.android.com/images/brand/Android_Robot.png' },
      { name: 'Xcode', imgUrl: 'https://developer.apple.com/xcode/images/xcode-icon.png' },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: 'Team Collaboration', imgUrl: 'path/to/soft-skill-icon.png' },
      { name: 'Communication', imgUrl: 'path/to/soft-skill-icon.png' },
      { name: 'Time Management', imgUrl: 'path/to/soft-skill-icon.png' },
      { name: 'Problem-Solving', imgUrl: 'path/to/soft-skill-icon.png' },
      { name: 'Critical Thinking', imgUrl: 'path/to/soft-skill-icon.png' },
    ],
  },
  {
    category: "Design and Prototyping Tools",
    skills: [
      { name: 'Figma', imgUrl: 'https://www.figma.com/favicon.ico' },
      { name: 'Adobe XD', imgUrl: 'https://www.adobe.com/content/dam/shared/images/product-icons/svg/adobe-xd.svg' },
      { name: 'Sketch', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sketch_Logo.svg/1200px-Sketch_Logo.svg.png' },
      { name: 'InVision', imgUrl: 'https://www.invisionapp.com/favicon.ico' },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: 'SQL', imgUrl: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
      { name: 'MySQL', imgUrl: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
      { name: 'MongoDB', imgUrl: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' },
      { name: 'Firebase', imgUrl: 'https://firebase.google.com/images/brand-guidelines/logo-logomark.png' },
      { name: 'PostgreSQL', imgUrl: 'https://www.postgresql.org/media/img/about/press/elephant.png' },
      // Add other databases as necessary
    ],
  },
  {
    category: "Tools and Platforms",
    skills: [
      { name: 'Git', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png' },
      { name: 'GitHub', imgUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
      { name: 'Docker', imgUrl: 'https://www.svgrepo.com/show/331370/docker.svg' },
      { name: 'AWS', imgUrl: 'https://www.svgrepo.com/show/353443/aws.svg' },
      { name: 'VS Code', imgUrl: 'https://code.visualstudio.com/assets/favicon.ico' },
      // Add other tools as necessary
    ],
  },
  {
    category: "Software Development",
    skills: [
      { name: 'Agile methodologies', imgUrl: 'path/to/agile-icon.png' },
      { name: 'Software Lifecycle Management', imgUrl: 'path/to/lifecycle-icon.png' },
      { name: 'Code Reviews', imgUrl: 'path/to/review-icon.png' },
      { name: 'CI/CD Pipelines', imgUrl: 'path/to/cicd-icon.png' },
      { name: 'GitHub Actions', imgUrl: 'path/to/actions-icon.png' },
    ],
  },
  {
    category: "APIs and Web Services",
    skills: [
      { name: 'GraphQL', imgUrl: 'https://graphql.org/img/logo.svg' },
      { name: 'RESTful Services', imgUrl: 'path/to/restful-icon.png' },
    ],
  },
  {
    category: "Testing Frameworks",
    skills: [
      { name: 'Jest', imgUrl: 'https://jestjs.io/img/jest.png' },
      { name: 'Mocha', imgUrl: 'https://mochajs.org/assets/images/brand/logo.svg' },
      { name: 'Chai', imgUrl: 'https://chaijs.com/img/chai-icon.png' },
      { name: 'PyTest', imgUrl: 'https://miro.medium.com/v2/resize:fit:800/1*F2BHs6p9erpiGKro5Pg1uQ.png' },
      { name: 'Selenium', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Selenium_Logo.png/1200px-Selenium_Logo.png' },
    ],
  },
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
        {skillsData.map((category) => (
          <div key={category.category} className="mb-10">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-2xl font-semibold mb-4 text-center"
            >
              {category.category}
            </motion.h3>
            <Grid container spacing={4}>
              {category.skills.map((skill) => (
                <Grid item xs={12} sm={6} md={4} key={skill.name}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card 
                      className="bg-gray-800" 
                      sx={{ borderRadius: '8px', boxShadow: 3 }}
                    >
                      <CardContent className="flex flex-col items-center">
                        <img 
                          src={skill.imgUrl} 
                          alt={skill.name} 
                          loading="lazy"
                          className="h-16 w-16 object-contain mb-2" 
                          onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/default/image.png'; }} 
                        />
                        <Typography variant="h6" component="p" align="center" className="text-white">
                          {skill.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;