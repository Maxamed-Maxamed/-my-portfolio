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
      { name: 'Next.js', imgUrl: 'https://logowik.com/content/uploads/images/nextjs2106.logowik.com.webp' },
      { name: 'Node.js', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png' },
      { name: 'Vue.js', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgyp0cGPFS4V3HEtHeE2hO0udk6QbTA5Kcg&s' },
      { name: 'Django', imgUrl: 'https://www.djangoproject.com/m/img/logos/django-logo-negative.png' },
      { name: 'Flutter', imgUrl: 'https://logowik.com/content/uploads/images/flutter5786.jpg' },
      // Add other frameworks as necessary
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      { name: 'Android Studio', imgUrl: 'https://developer.android.com/images/brand/Android_Robot.png' },
      { name: 'Xcode', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPE69SFNIWcmqMOVlPvSolhPhLHYVbJkuSiA&s' },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: 'Team Collaboration', imgUrl: 'https://cdn-icons-png.flaticon.com/512/1402/1402119.png' },
      { name: 'Communication', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNhUQfTIekZxNRRIASlxAUJhiIrtQ9AzDVxQ&s' },
      { name: 'Time Management', imgUrl: 'https://cdn-icons-png.flaticon.com/512/9815/9815843.png' },
      { name: 'Problem-Solving', imgUrl: 'https://cdn-icons-png.flaticon.com/512/8148/8148303.png' },
      { name: 'Critical Thinking', imgUrl: 'https://cdn-icons-png.flaticon.com/512/7095/7095973.png' },
    ],
  },
  {
    category: "Design and Prototyping Tools",
    skills: [
      { name: 'Figma', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png' },
      { name: 'Adobe XD', imgUrl: 'https://download.logo.wine/logo/Adobe_XD/Adobe_XD-Logo.wine.png' },
      { name: 'Sketch', imgUrl: 'https://www.cdnlogo.com/logos/s/35/sketch.svg' },
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
      { name: 'Agile methodologies', imgUrl: 'https://e7.pngegg.com/pngimages/446/260/png-clipart-agile-software-development-software-development-process-waterfall-model-systems-development-life-cycle-others-text-logo.png' },
      { name: 'Software Lifecycle Management', imgUrl: 'https://www.xenonstack.com/hubfs/application-lifecycle-management.png' },
      { name: 'Code Reviews', imgUrl: 'https://cdn-icons-png.flaticon.com/512/1541/1541537.png' },
      { name: 'CI/CD Pipelines', imgUrl: 'https://media.licdn.com/dms/image/C4D12AQHEozYv3E5rdA/article-cover_image-shrink_600_2000/0/1612876678427?e=2147483647&v=beta&t=2fLzzpCTVay31sHhzOEZpVwyfJvxwwjkv-LOpZ9P8r8' },
      { name: 'GitHub Actions', imgUrl: 'https://miro.medium.com/v2/resize:fit:1075/1*5WC9rtIa0KLXfRrC8Swf1w.png' },
    ],
  },
  {
    category: "APIs and Web Services",
    skills: [
      { name: 'GraphQL', imgUrl: 'https://graphql.org/img/logo.svg' },
      { name: 'RESTful Services', imgUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*CiVW0IQDeLIYO8uXrd-8dw.png' },
    ],
  },
  {
    category: "Testing Frameworks",
    skills: [
      { name: 'Jest', imgUrl: 'https://jestjs.io/img/jest.png' },
      { name: 'Mocha', imgUrl: 'https://mochajs.org/images/mocha-logo.svg' },
      { name: 'Chai', imgUrl: 'https://avatars.githubusercontent.com/u/1515293?s=200&v=4' },
      { name: 'PyTest', imgUrl: 'https://miro.medium.com/v2/resize:fit:800/1*F2BHs6p9erpiGKro5Pg1uQ.png' },
      { name: 'Selenium', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Selenium_Logo.png/1200px-Selenium_Logo.png' },
    ],
  },
];




// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 px-4 bg-gray-900 text-white">
//       <div className="max-w-5xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-4xl font-bold mb-6 text-center"
//         >
//           Skills
//         </motion.h2>
//         {skillsData.map((category) => (
//           <div key={category.category} className="mb-10 ">
//             <motion.h3
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="text-2xl font-semibold mb-4 text-center"
//             >
//               {category.category}
//             </motion.h3>
//             <Grid container spacing={4}>
//               {category.skills.map((skill) => ( 
//                 <Grid item xs={12} sm={6} md={4} key={skill.name}>
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Card 
//                       className="bg-gray-800" 
//                       sx={{ borderRadius: '8px', boxShadow: 3 }}
//                     >
//                       <CardContent className="flex flex-col items-center">
//                         <img 
//                           src={skill.imgUrl} 
//                           alt={skill.name} 
//                           loading="lazy"
//                           className="h-16 w-16 object-contain mb-2 " 
//                           onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/default/image.png'; }} 
//                         />
//                         <Typography variant="h6" component="p" align="center" className="text-black">
//                           {skill.name}
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };


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
          <div key={category.category} className="mb-10 ">
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
                          className="h-24 w-24 object-contain mb-2" 
                          onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/default/image.png'; }} 
                        />
                        <Typography variant="h6" component="p" align="center" className="text-black">
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