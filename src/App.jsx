import React, { useEffect, useState } from "react";
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

  // When loading progress reaches 100%, show the main content
  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  return (
    // ReactLenis provides smooth scrolling for the app
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
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
