import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Download, Palette, Layers, Smartphone, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Extract color palettes in seconds with our optimized algorithms and AI-powered processing.',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Palette,
    title: 'Smart Color Analysis',
    description: 'Advanced color detection that identifies dominant, accent, and complementary colors intelligently.',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    icon: Download,
    title: 'Multiple Export Formats',
    description: 'Export your palettes as HEX, RGB, HSL, or download as Adobe Swatch Exchange (ASE) files.',
    gradient: 'from-green-400 to-cyan-500'
  },
  {
    icon: Layers,
    title: 'Batch Processing',
    description: 'Process multiple images at once and generate consistent color schemes across your project.',
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Works perfectly on all devices with responsive design and touch-friendly interfaces.',
    gradient: 'from-pink-400 to-red-500'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your images are processed locally and never stored on our servers. Complete privacy guaranteed.',
    gradient: 'from-indigo-400 to-purple-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Powerful Features for
            <span className="block text-teal-600">
              Creative Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to extract, analyze, and export beautiful color palettes from any image.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex p-3 rounded-xl bg-teal-600 mb-6 transition-transform duration-300"
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}