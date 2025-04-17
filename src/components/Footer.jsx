// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-10 px-4 text-center"
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      {/* Top Row: Quick Links */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          {['about', 'projects', 'skills', 'experience', 'achievements', 'contact'].map((section, i) => (
            <li key={i}>
              <a 
                href={`#${section}`} 
                className="hover:text-indigo-400 transition-colors duration-300 capitalize"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Row: Social Icons */}
      <div className="flex justify-center gap-6 mt-4">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-indigo-400 transition-colors duration-300"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaGithub size={28} />
          </motion.div>
        </a>
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-indigo-400 transition-colors duration-300"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaLinkedin size={28} />
          </motion.div>
        </a>
        <a 
          href="https://leetcode.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-indigo-400 transition-colors duration-300"
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaCode size={28} />
          </motion.div>
        </a>
      </div>

      {/* Bottom Row: Copyright */}
      {/* <p className="text-sm text-gray-400 mt-6">© 2025 Anushka Gupta. All rights reserved.</p> */}
    </motion.footer>
  );
};

export default Footer;
