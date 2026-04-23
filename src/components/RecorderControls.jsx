import React from 'react';
import { motion } from 'framer-motion';
import { Circle, Square, Mic, MicOff, Download, Trash2 } from 'lucide-react';

const RecorderControls = ({ 
  isRecording, 
  recordedVideo, 
  withAudio, 
  startRecording, 
  stopRecording, 
  setWithAudio, 
  downloadVideo, 
  discardVideo 
}) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {!isRecording ? (
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={startRecording}
          className="btn-primary flex items-center space-x-3"
        >
          <Circle className="w-5 h-5 fill-current" />
          <span>Start Recording</span>
        </motion.button>
      ) : (
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={stopRecording}
          className="px-6 py-3 rounded-xl font-semibold bg-red-500 hover:bg-red-600 text-white flex items-center space-x-3 shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all"
        >
          <Square className="w-5 h-5 fill-current" />
          <span>Stop Recording</span>
        </motion.button>
      )}

      <button 
        onClick={() => setWithAudio(!withAudio)}
        className={`btn-secondary flex items-center space-x-2 ${withAudio ? 'text-cyan-400 border-cyan-500/30' : 'text-slate-500'}`}
      >
        {withAudio ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
        <span>Audio {withAudio ? 'On' : 'Off'}</span>
      </button>

      {recordedVideo && (
        <>
          <motion.button 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={downloadVideo}
            className="btn-secondary flex items-center space-x-2 text-indigo-400 border-indigo-500/30"
          >
            <Download className="w-5 h-5" />
            <span>Download</span>
          </motion.button>
          <motion.button 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={discardVideo}
            className="btn-secondary flex items-center space-x-2 text-red-400 border-red-500/30"
          >
            <Trash2 className="w-5 h-5" />
            <span>Discard</span>
          </motion.button>
        </>
      )}
    </div>
  );
};

export default RecorderControls;
