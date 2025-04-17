// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'; // Use FaCode instead of FaLeetcode

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-gray-50 to-blue-100 py-20 px-6">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-semibold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <p className="text-lg text-gray-700 mb-4">
          I’d love to hear from you! Feel free to reach out with any questions or opportunities.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Email: <a href="mailto:anushkagupta1563@gmail.com" className="text-indigo-600">anushkagupta1563@gmail.com</a>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Phone: <span className="text-indigo-600">+91-9026780629</span>
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://github.com/anushkagupta12" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-transform">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/anushka-gupta-56784a255/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-transform">
            <FaLinkedin size={30} />
          </a>
          <a href="https://leetcode.com/u/anushka0743/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-transform">
            <FaCode size={30} />
          </a>
        </div>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              rows="4" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#6EE7B7] text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;