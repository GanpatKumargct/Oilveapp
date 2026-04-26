import React from 'react';
import { motion } from 'framer-motion';
import { Apple } from 'lucide-react';
import PhoneCarousel from './PhoneCarousel';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-olive-100 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>

      <div className="container mx-auto max-w-7xl flex flex-col items-center text-center">
        
        {/* Top Content */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-olive-900 leading-[1.1] tracking-tight mb-6"
          >
            Discover Olive: Your family's nutrition ally and powerful food scanner app
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-lg md:text-xl text-olive-800 mb-10 leading-relaxed max-w-xl"
          >
            Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="flex items-center justify-center gap-3 bg-olive-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-olive-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              <Apple size={24} />
              <span>Download for iOS</span>
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-background bg-olive-${200 + i*100} flex items-center justify-center text-xs font-bold text-white overflow-hidden`}>
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-olive-800 font-medium">
              Join a supportive community of over <span className="font-bold text-olive-900">200,000</span> users.
            </p>
          </motion.div>
        </div>

        {/* Bottom Content - Phone Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative w-full mx-auto pb-20 mt-16"
        >
          <PhoneCarousel />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
