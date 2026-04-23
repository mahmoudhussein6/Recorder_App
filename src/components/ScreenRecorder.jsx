import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Components
import Header from './Header';
import RecordingStatus from './RecordingStatus';
import VideoPreview from './VideoPreview';
import RecorderControls from './RecorderControls';
import FeatureGrid from './FeatureGrid';

const ScreenRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [timer, setTimer] = useState(0);
  const [withAudio, setWithAudio] = useState(true);
  const [stream, setStream] = useState(null);

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerIntervalRef = useRef(null);

  const startRecording = async () => {
    try {
      const displayStream = await navigator.mediaDevices.getDisplayMedia({
        video: { cursor: "always" },
        audio: false 
      });

      let combinedStream = displayStream;

      if (withAudio) {
        try {
          const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const tracks = [...displayStream.getTracks(), ...audioStream.getTracks()];
          combinedStream = new MediaStream(tracks);
        } catch (err) {
          console.warn("Microphone access denied or not available", err);
        }
      }

      setStream(combinedStream);
      
      const mediaRecorder = new MediaRecorder(combinedStream, {
        mimeType: 'video/webm; codecs=vp9'
      });

      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setRecordedVideo(url);
        
        combinedStream.getTracks().forEach(track => track.stop());
        setStream(null);
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordedVideo(null);
      
      setTimer(0);
      timerIntervalRef.current = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);

      displayStream.getVideoTracks()[0].onended = () => {
        stopRecording();
      };

    } catch (err) {
      console.error("Error starting recording:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      clearInterval(timerIntervalRef.current);
    }
  };

  const downloadVideo = () => {
    if (recordedVideo) {
      const a = document.createElement('a');
      a.href = recordedVideo;
      a.download = `recording-${new Date().getTime()}.webm`;
      a.click();
    }
  };

  const discardVideo = () => {
    setRecordedVideo(null);
    setTimer(0);
  };

  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (stream) stream.getTracks().forEach(track => track.stop());
    };
  }, [stream]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-4xl space-y-8">
        
        <Header />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel rounded-3xl p-8 relative overflow-hidden"
        >
          {/* Decorative background blur */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />

          <div className="relative z-10 flex flex-col items-center space-y-12">
            
            <RecordingStatus isRecording={isRecording} timer={timer} />

            <VideoPreview recordedVideo={recordedVideo} isRecording={isRecording} />

            <RecorderControls 
              isRecording={isRecording}
              recordedVideo={recordedVideo}
              withAudio={withAudio}
              startRecording={startRecording}
              stopRecording={stopRecording}
              setWithAudio={setWithAudio}
              downloadVideo={downloadVideo}
              discardVideo={discardVideo}
            />
          </div>
        </motion.div>

        <FeatureGrid />
      </div>
    </div>
  );
};

export default ScreenRecorder;
