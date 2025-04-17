import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#D1FAE5] to-[#BFDBFE] overflow-hidden">
      {/* Floating Animated Blobs */}
      <div className="absolute -z-10 top-[-5%] left-[-10%] w-96 h-96 bg-[#A7F3D0] rounded-full opacity-25 blur-3xl animate-pulse"></div>
      <div className="absolute -z-10 top-[10%] right-[-5%] w-72 h-72 bg-[#93C5FD] rounded-full opacity-20 blur-2xl animate-pulse"></div>

      {/* Headings */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I’m Anushka Gupta
      </motion.h1>

      <motion.h2
        className="text-xl text-[#4B5563] mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typewriter
          words={[
            'Aspiring Software Engineer',
            'B.Tech CSE @ NIT Arunachal Pradesh',
            'Frontend & AI Developer',
            'ML Enthusiast ',
            'Tech Explorer & Problem Solver',
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.h2>

      {/* Buttons */}
      <div className="flex space-x-4">
        <a href="#contact">
        <motion.button
          className="bg-[#6EE7B7] text-[#1F2937] 
          px-6 py-2 rounded-full font-semibold 
          hover:bg-[#A7F3D0] transition"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Contact
        </motion.button>
        </a>
        <a href="#projects">
        <motion.button
          className="bg-[#6EE7B7] text-[#1F2937] px-6 py-2 rounded-full font-semibold hover:bg-[#A7F3D0] transition"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link/> View Projects
        </motion.button>
        </a>
      </div>

      {/* Decorative Wave at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-32 text-[#BFDBFE]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,128L30,138.7C60,149,120,171,180,186.7C240,203,300,213,360,202.7C420,192,480,160,540,144C600,128,660,128,720,144C780,160,840,192,900,202.7C960,213,1020,203,1080,186.7C1140,171,1200,149,1260,138.7L1320,128L1440,0L1440,320L1320,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
