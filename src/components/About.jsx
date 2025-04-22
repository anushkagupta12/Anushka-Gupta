import React from 'react';
import { motion } from 'framer-motion';
import pic from '../assets/pic.jpeg'

const AboutMe = () => {
  return (
    <section id = "about" className="bg-gradient-to-r from-indigo-100 via-white to-purple-100 py-20 px-6">
      <motion.h2
        className="text-4xl font-semibold text-gray-800 text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <motion.div
          className="relative mb-6 md:mb-0 md:mr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -z-10">
            <svg
              className="w-72 h-72 animate-float"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 0C77.614 0 100 22.386 100 50C100 77.614 77.614 100 50 100C22.386 100 0 77.614 0 50C0 22.386 22.386 0 50 0Z"
                fill="rgba(255, 255, 255, 0.5)"
              />
            </svg>
          </div>
          <img
            src={pic} // Replace with your profile image URL
            alt="Anushka Gupta"
            className="rounded-full w-80 h-90 object-cover border-4 border-white shadow-lg"
          />
        </motion.div>
        <motion.p
          className="max-w-lg text-lg text-gray-700 leading-relaxed text-center md:text-left "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I’m <span className="text-indigo-600 font-medium">Anushka Gupta</span>, a 3rd-year B.Tech Computer Science and Engineering student at the National Institute of Technology, Arunachal Pradesh, with a CGPA of 8.78. I’m passionate about <span className="text-indigo-600 font-medium">frontend development</span>, <span className="text-indigo-600 font-medium">machine learning</span>, and building innovative, people-centric tech solutions. Beyond coding, I enjoy solving DSA problems on LeetCode, participating in national conferences, and contributing to open-source projects.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutMe;