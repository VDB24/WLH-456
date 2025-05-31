import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
      >
        Project Hub
      </motion.h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
        Collaborate on real-world projects and build your portfolio
      </p>
      
      {/* Content coming soon */}
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
          Projects coming soon...
        </h2>
      </div>
    </div>
  );
}