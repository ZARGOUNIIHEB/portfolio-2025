import { useRef } from "react";
import Marquee from "../components/Marquee"; // Marquee component for scrolling text
import { useGSAP } from "@gsap/react"; // GSAP React hook
import gsap from "gsap"; // GSAP animation library


const ContactSummary = () => {
  const containerRef = useRef(null); // Ref for the section container

  // Items for the first marquee
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  // Items for the second marquee (repeated "contact us")
  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us"
  ];

  // Pin the section while scrolling using GSAP ScrollTrigger
  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current, // Pin this section
        start: "center center",
        end: () => `+=${window.innerHeight * 0.8} center`,
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      {/* Top marquee with keywords */}
      <Marquee items={items} />
      {/* Centered contact message */}
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Let’s build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          web application <span className="text-gold">together</span> “
        </p>
      </div>
      {/* Bottom marquee with "contact us" repeated, reversed direction */}
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
