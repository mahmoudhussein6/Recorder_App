import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="text-center space-y-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight"
      >
        <span className="gradient-text">Recorder</span>
      </motion.h1>
      <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
        High-fidelity screen recording directly in your browser. 
        No plugins, no installs, just pure performance.
      </p>
    </div>
  );
};

export default Header;
