import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Share, Video } from 'lucide-react';

const VideoPreview = ({ recordedVideo, isRecording }) => {
  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-inner flex items-center justify-center relative">
      {recordedVideo ? (
        <video 
          src={recordedVideo} 
          controls 
          className="w-full h-full object-contain"
        />
      ) : isRecording ? (
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Monitor className="w-20 h-20 text-indigo-500/50" />
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Share className="w-8 h-8 text-cyan-400" />
            </motion.div>
          </div>
          <p className="text-slate-500 animate-pulse">Capturing Screen...</p>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-6 text-center px-4">
          <div className="w-20 h-20 rounded-full bg-indigo-500/10 flex items-center justify-center">
            <Video className="w-10 h-10 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">No recording yet</h3>
            <p className="text-slate-500 mt-1">Start capturing your screen to see the preview here.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPreview;
