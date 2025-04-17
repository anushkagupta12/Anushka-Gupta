// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    title: 'Internship at IIT Guwahati',
    organization: 'IIT Guwahati',
    duration: 'June 2022 - August 2022',
    responsibilities: [
      'Built a CNN model for water classification.',
      'Optimized the model with hyperparameter tuning.',
      'Contributed to real-world research at the North-East Renewable Energy Research Lab.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-r from-gray-50 to-blue-100 py-20 px-6">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">Experience</h2>
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
            >
               <h3 className="font-semibold text-lg">{experience.title}</h3>
              <p className="text-sm text-gray-500">{experience.organization} | {experience.duration}</p>
              <ul className="mt-2 space-y-1">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="list-disc list-inside">{responsibility}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;