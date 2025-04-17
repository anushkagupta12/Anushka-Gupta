// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Learnify',
    description: 'An e-learning platform built with React.',
    technologies: 'React, Node.js',
    github: 'https://github.com/anushkagupta12/Learnify',
    liveDemo: 'https://learnify-743.vercel.app/',
  },
  {
    title: 'Diabetes Prediction',
    description: 'A machine learning project using Python and Scikit-learn.',
    technologies: 'Python, Scikit-learn',
    github: 'https://github.com/anushkagupta12/Diabetes-Prediction',
    liveDemo: 'https://github.com/anushkagupta12/Diabetes-Prediction',
  },
  {
    title: 'Hotel Landing Page',
    description: 'A responsive hotel landing page using HTML/CSS/JS.',
    technologies: 'HTML, CSS, JavaScript',
    github: 'https://github.com/anushkagupta12/Hotel-Orentia',
    liveDemo: 'https://anushkagupta12.github.io/Hotel-Orentia/',
  },
  {
    title: 'Car Rental System',
    description: 'A car rental system built in Java.',
    technologies: 'Java',
    github: 'https://github.com/anushkagupta12/Car-Rental-System/tree/main/CarRentalSystem',
    liveDemo: 'https://github.com/anushkagupta12/Car-Rental-System/tree/main/CarRentalSystem',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-r from-indigo-100 via-white to-purple-100 py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-bold text-indigo-600">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <p className="mt-1 text-sm text-gray-500">Technologies: {project.technologies}</p>
              <div className="mt-4 flex justify-between">
                <a
                  href={project.github}
                  className="bg-[#6EE7B7] text-[#1F2937] px-6 py-2 rounded-full font-semibold hover:bg-[#A7F3D0] transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  className="bg-[#6EE7B7] text-[#1F2937] px-6 py-2 rounded-full font-semibold hover:bg-[#A7F3D0] transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;