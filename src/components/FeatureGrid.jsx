import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Mic, Settings2 } from 'lucide-react';

const FeatureGrid = () => {
  const features = [
    { icon: <Monitor className="w-6 h-6" />, title: "Full Screen", desc: "Record any window or screen." },
    { icon: <Mic className="w-6 h-6" />, title: "Crystal Audio", desc: "Clear microphone capture." },
    { icon: <Settings2 className="w-6 h-6" />, title: "High Quality", desc: "VP9 encoding for web." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
          className="bg-white/2 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
        >
          <div className="text-indigo-400 mb-4">{feature.icon}</div>
          <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
          <p className="text-slate-500 text-sm">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
