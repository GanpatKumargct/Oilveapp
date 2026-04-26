import React from 'react';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, features, highlighted, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`p-10 rounded-[2.5rem] flex flex-col h-full relative ${
      highlighted 
        ? 'bg-olive-900 text-white shadow-2xl scale-100 lg:scale-105 z-10' 
        : 'bg-white text-olive-900 border-2 border-olive-100'
    }`}
  >
    {highlighted && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#A2C04D] text-olive-900 text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
        Best Value
      </div>
    )}
    
    <h3 className="text-2xl font-bold mb-2 capitalize">{title}</h3>
    <div className="mb-8">
      {price && <p className="text-lg opacity-80">{price}</p>}
    </div>
    
    <ul className="space-y-4 mb-10 flex-grow">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <svg className={`w-6 h-6 shrink-0 ${highlighted ? 'text-olive-400' : 'text-olive-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          <span className={highlighted ? 'text-olive-100' : 'text-olive-800'}>{feature}</span>
        </li>
      ))}
    </ul>
    
    <button className={`w-full py-4 rounded-full font-bold text-lg transition-all ${
      highlighted 
        ? 'bg-white text-olive-900 hover:bg-olive-100' 
        : 'bg-olive-900 text-white hover:bg-olive-800'
    }`}>
      Subscribe
    </button>
  </motion.div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background relative">
      <div className="container mx-auto max-w-5xl px-6">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-olive-900 tracking-tight"
          >
            Healthy Choices. Honest Pricing.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <PricingCard 
            title="monthly"
            features={[
              'Unlimited Scans',
              'Unlimited Database Searches',
              'Comprehensive Lab-Testing Data'
            ]}
            delay={0.1}
          />
          <PricingCard 
            title="yearly"
            highlighted={true}
            features={[
              'Everything in monthly plan',
              'Get 7 months free',
              '60% Savings'
            ]}
            delay={0.2}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 text-center bg-white rounded-3xl p-12 border border-olive-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-olive-900 mb-4">100% Independent. Always.</h2>
          <p className="text-lg text-olive-800 max-w-2xl mx-auto">
            We never monetize through brand deals, affiliate links, or ads — so you can trust our recommendations are always aligned with our users.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;
