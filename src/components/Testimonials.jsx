import React from 'react';
import { motion } from 'framer-motion';

const ReviewCard = ({ name, quote, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-background p-8 rounded-3xl border border-olive-100"
  >
    <div className="flex text-yellow-400 mb-6">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-lg text-olive-900 italic mb-6 leading-relaxed">"{quote}"</p>
    <p className="font-bold text-olive-900">— {name}</p>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="py-24 bg-olive-900 text-white overflow-hidden rounded-t-[3rem]">
      <div className="container mx-auto max-w-7xl px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Real Mothers. Real Results.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-olive-100"
          >
            Join thousands of satisfied parents who trust Olive to help them make healthier choices for their families.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReviewCard 
            name="Megan L." 
            quote="Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry."
            delay={0.1}
          />
          <ReviewCard 
            name="Tina B." 
            quote="Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy."
            delay={0.2}
          />
          <ReviewCard 
            name="Lila M." 
            quote="After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly."
            delay={0.3}
          />
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-olive-100 hover:text-white font-medium hover:underline underline-offset-4 transition-all">
            Read all 3,147+ reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
