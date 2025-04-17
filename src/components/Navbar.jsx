// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // For smooth scrolling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolling ? 'bg-white shadow-md' : 'bg-transparent'}`}
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center justify-between px-6 py-4">
                <Link to="hero" smooth={true} duration={500} className="text-xl font-bold text-indigo-600 cursor-pointer">
                    Anushka Gupta
                </Link>
                <div className="hidden md:flex gap-6 text-gray-800 font-medium">
                    {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Achievements', 'Contact'].map((item) => (
                        <Link key={item} to={item.toLowerCase()} smooth={true} duration={500} className="hover:text-indigo-500 transition-colors duration-300 cursor-pointer">
                            {item}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg p-6 md:hidden"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div className="flex flex-col mt-10 space-y-4">
                        {['Home', 'About', 'Projects', 'Skills', 'Experience ', 'Achievements', 'Contact'].map((item) => (
                            <Link key={item} to={item.toLowerCase()} smooth={true} duration={500} className="text-gray-800 hover:text-indigo-500 transition-colors duration-300 cursor-pointer" onClick={toggleMenu}>
                                {item}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;