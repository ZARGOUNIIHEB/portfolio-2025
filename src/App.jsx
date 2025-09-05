import React, { useEffect, useState, useRef } from "react";
// Importing all section components for the portfolio
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react"; // Smooth scrolling provider
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei"; // Progress hook for loading state


const App = () => {
  // Get loading progress from three.js (used for loader)
  const { progress } = useProgress();
  // State to track if the app is ready to show content
  const [isReady, setIsReady] = useState(false);
  // Audio ref
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  // Handle speaker button click
  const handleSpeakerClick = () => {
    if (audioRef.current) {
      const newMuted = !isMuted;
      audioRef.current.volume = newMuted ? 0 : 0.1; // Reduced volume to 10%
      setIsMuted(newMuted);
    }
  };

  // When loading progress reaches 100%, show the main content
  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  // Auto-play music on user interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (!isReady || !audioRef.current) return;
      if (audioRef.current.paused) {
        audioRef.current.volume = 0.1; // Set volume to 10%
        audioRef.current.play().catch(error => console.log('Play failed:', error));
      }
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('mousedown', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('scroll', handleInteraction, { passive: true });
    document.addEventListener('wheel', handleInteraction, { passive: true });
    document.addEventListener('mousemove', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('mousedown', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('wheel', handleInteraction);
      document.removeEventListener('mousemove', handleInteraction);
    };
  }, [isReady]);



  return (
    // ReactLenis provides smooth scrolling for the app
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {/* Background music */}
      <audio
        ref={audioRef}
        src="/assets/audio/background.mp3"
        loop
        preload="auto"
        onCanPlay={() => console.log('Audio ready to play')}
        onError={() => console.log('Audio load error')}
      />
      {/* Loader overlay shown until progress reaches 100% */}
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-myblue text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          {/* Progress bar */}
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      {/* Main content fades in when ready */}
      <div
        className={`${isReady ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
      >
        {/* Speaker button */}
        <button
          onClick={handleSpeakerClick}
          className="fixed top-4 left-4 z-50 bg-black/50 text-white p-4 text-2xl rounded hover:bg-black/70 transition"
          aria-label={isMuted ? "Unmute music" : "Mute music"}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
        {/* Portfolio sections */}
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
