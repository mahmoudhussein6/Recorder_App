import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScreenRecorder from './components/ScreenRecorder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background'
import SEO from './components/SEO'
import SplashScreen from './components/SplashScreen'
import NotFound from './components/NotFound'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // Show splash for 2.5s

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden flex flex-col items-center">
        <SEO />
        <AnimatePresence>
          {showSplash && <SplashScreen />}
        </AnimatePresence>
        <Background />

        <div className="w-full sticky top-0 z-[100] flex flex-col items-center pt-8 pb-4 bg-[var(--color-surface-obsidian)]/80 backdrop-blur-md border-b border-white/5">
          <Navbar />
        </div>

        {/* Main Content */}
        <main className="relative z-10 w-full py-12 md:py-20">
          <Routes>
            <Route path="/" element={<ScreenRecorder />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
