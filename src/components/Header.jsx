import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-7xl">
        <a href="/" className="text-2xl font-bold text-olive-900 tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-olive-600 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-background rounded-full"></div>
          </div>
          Olive
        </a>
        
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          <a href="#features" className="text-olive-800 hover:text-olive-600 transition-colors">Features</a>
          <a href="#pricing" className="text-olive-800 hover:text-olive-600 transition-colors">Pricing</a>
          <a href="#blog" className="text-olive-800 hover:text-olive-600 transition-colors">Blog</a>
          <a href="#restaurants" className="text-olive-800 hover:text-olive-600 transition-colors">Restaurants</a>
          <a href="#sign-in" className="text-olive-800 hover:text-olive-600 transition-colors">Sign in</a>
          <button className="bg-olive-900 text-white px-5 py-2.5 rounded-full hover:bg-olive-800 transition-colors shadow-sm">
            Get Olive
          </button>
        </nav>

        {/* Mobile Menu Button - simplified */}
        <button className="md:hidden text-olive-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
