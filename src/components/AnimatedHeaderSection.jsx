import React from "react";
import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines"; // Animated text lines component
import { useGSAP } from "@gsap/react"; // GSAP React hook
import gsap from "gsap"; // GSAP animation library

// AnimatedHeaderSection displays a section header with optional scroll-triggered animation
const AnimatedHeaderSection = ({
  subTitle,            // Small subtitle above the main title
  title,               // Main section title
  text,                // Description text below the title
  textColor,           // Tailwind color class for text
  withScrollTrigger = false, // Whether to animate on scroll
}) => {
  const contextRef = useRef(null); // Ref for the whole header container
  const headerRef = useRef(null);  // Ref for the header content

  // Split the title into parts if it contains spaces (for multi-line display)
  const shouldSplitTitle = title.includes(" ");
  const titleParts = shouldSplitTitle ? title.split(" ") : [title];

  // GSAP animation for header entrance (optionally scroll-triggered)
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
          trigger: contextRef.current,
        }
        : undefined,
    });
    tl.from(contextRef.current, {
      y: "50vh",        // Animate from 50% viewport height below
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,     // Fade in header
        y: "200",       // Animate from 200px below
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"           // Start slightly after previous animation
    );
  }, []);

  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16 "
        >
          {/* Subtitle */}
          <p
            className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          {/* Title, split into lines if needed */}
          <div className="px-10">
            <h1
              className={`flex flex-col gap-12 uppercase banner-text-responsive sm:gap-16 md:block ${textColor}`}
            >
              {titleParts.map((part, index) => (
                part === "ZARGOUNI" ? (
                  <span
                    key={index}
                    style={{
                      color: '#cfa355',
                      WebkitTextStroke: '2px rgba(255,255,255,0.5)',
                      fontSize: 'inherit',
                      fontWeight: 'bold',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      textTransform: 'inherit',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(50px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      padding: '10px'
                    }}
                    className="inline-block"
                  >
                    {part}
                  </span>
                ) : (
                  <span key={index}>{part} </span>
                )
              ))}
            </h1>
          </div>
        </div>
      </div >
      {/* Divider and animated description text */}
      < div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="py-12 sm:py-16 text-end">
          <AnimatedTextLines
            text={text}
            className={`font-light uppercase value-text-responsive ${textColor}`}
          />
        </div>
      </div >
    </div >
  );
};

export default AnimatedHeaderSection;
