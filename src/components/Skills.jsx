// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skillsData = {
  Languages: ['Java', 'Python', 'C', 'JavaScript'],
  'Web Technologies': ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Bootstrap'],
  Database : ['MySQL', 'MongoDB'],
  'Data/ML': ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
  Tools: ['Git', 'GitHub', 'Colab', 'VS Code'],
  'CS Fundamentals': ['DSA', 'OOP', 'OS'],
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-r from-gray-50 to-blue-100 py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="w-full mb-6">
              <h3 className="font-semibold text-lg text-gray-800 dark:text-slate-100 mb-4">{category}</h3>
              <div className="flex flex-wrap justify-center gap-5">
                {skills.map((skill, i) => (
                  <motion.span 
                    key={skill} 
                    className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold shadow-sm hover:bg-indigo-200 hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, scale: 0.8 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ type: "spring", stiffness: 200, delay: i * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;