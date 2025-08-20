import { useGSAP } from "@gsap/react"; // GSAP React hook for animation
import gsap from "gsap"; // GSAP animation library
import { ScrollTrigger } from "gsap/all"; // ScrollTrigger plugin for scroll-based animation
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger with GSAP

// AnimatedTextLines displays each line of text with entrance animation
export const AnimatedTextLines = ({ text, className }) => {
  const containerRef = useRef(null); // Ref for the container div
  const lineRefs = useRef([]); // Refs for each animated line

  // Split text into non-empty lines
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  // Animate lines when they enter the viewport
  useGSAP(() => {
    if (lineRefs.current.length > 0) {
      gsap.from(lineRefs.current, {
        y: 100, // Animate from 100px below
        opacity: 0, // Fade in
        duration: 1,
        stagger: 0.3, // Stagger each line
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current, // Trigger animation on scroll
        },
      });
    }
  });

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          ref={(el) => (lineRefs.current[index] = el)} // Assign ref for animation
          className="block leading-relaxed tracking-wide text-pretty"
        >
          {line}
        </span>
      ))}
    </div>
  );
};
