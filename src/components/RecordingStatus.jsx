import React from 'react';
import { Clock } from 'lucide-react';

const RecordingStatus = ({ isRecording, timer }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center space-x-6">
      <div className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
        <div className={isRecording ? 'recording-dot' : 'w-3 h-3 bg-slate-600 rounded-full'} />
        <span className="text-sm font-medium uppercase tracking-widest text-slate-300">
          {isRecording ? 'Recording' : 'Ready'}
        </span>
      </div>
      <div className="flex items-center space-x-2 text-3xl font-mono text-white tabular-nums">
        <Clock className="w-6 h-6 text-indigo-400" />
        <span>{formatTime(timer)}</span>
      </div>
    </div>
  );
};

export default RecordingStatus;
