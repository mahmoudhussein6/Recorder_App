import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#030712] flex items-center justify-center overflow-hidden"
    >
      {/* Background Orbs for the Splash */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />
      
      <div className="relative flex flex-col items-center space-y-6">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="w-24 h-24 bg-indigo-600 rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.4)]"
        >
          <span className="text-white font-bold text-5xl">R</span>
        </motion.div>

        {/* Text Animation */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl font-bold tracking-tighter text-white"
          >
            Recorder<span className="text-indigo-500">.</span>
          </motion.h1>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden relative mt-4">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
