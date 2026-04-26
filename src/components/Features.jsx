import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Database, Lightbulb } from 'lucide-react';

const FeatureItem = ({ icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className="bg-white p-8 rounded-3xl shadow-sm border border-olive-100 hover:shadow-md transition-shadow"
  >
    <div className="w-14 h-14 bg-olive-100 text-olive-600 rounded-2xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-olive-900 mb-4">{title}</h3>
    <p className="text-olive-800 leading-relaxed">{description}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto max-w-7xl px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-olive-900 tracking-tight mb-6"
          >
            Achieve Nutritional Clarity
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-olive-800"
          >
            Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureItem 
            icon={<Scan size={28} />}
            title="Scan & Detect"
            description="When you open Olive simply scan the barcode to instantly detect product ingredients. Olive's intuitive design means busy parents can quickly see which items contain harmful substances."
            delay={0.1}
          />
          <FeatureItem 
            icon={<Database size={28} />}
            title="Data Analysis & Validation"
            description="After scanning, our app compares product data with an extensive food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess."
            delay={0.2}
          />
          <FeatureItem 
            icon={<Lightbulb size={28} />}
            title="Actionable Insights"
            description="Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations."
            delay={0.3}
          />
        </div>

        {/* Proactive Section */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-olive-50 rounded-[40px] p-8 sm:p-12">
              <div className="space-y-6">
                {['Veggie Spaghetti Squash', 'Chhole (Chickpea Curry)', 'Lentil and Spinach Soup', 'Stuffed Bell Peppers with Rice', 'Mediterranean Quinoa Salad'].map((meal, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-olive-100 flex items-center justify-center text-olive-600 font-bold">✓</div>
                    <span className="font-medium text-olive-900">{meal}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-bold text-olive-900 mb-6">Proactive Ingredient Filtering</h2>
            <ul className="space-y-6 text-lg text-olive-800">
              <li className="flex items-start gap-4">
                <span className="text-olive-500 mt-1">✦</span>
                Olive flags harmful additives and controversial ingredients before they become mainstream concerns.
              </li>
              <li className="flex items-start gap-4">
                <span className="text-olive-500 mt-1">✦</span>
                Keeps you ahead of potential food safety concerns.
              </li>
              <li className="flex items-start gap-4">
                <span className="text-olive-500 mt-1">✦</span>
                Gives busy parents the confidence to make safer food choices every time.
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Features;
