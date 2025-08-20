import { useGSAP } from "@gsap/react"; // Hook for GSAP animations in React
import gsap from "gsap"; // GSAP animation library
import { ScrollTrigger } from "gsap/all"; // ScrollTrigger plugin for scroll-based animations

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger with GSAP

const ServiceSummary = () => {
  // Set up GSAP scroll animations for each service title
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20, // Move right by 20% on scroll
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true, // Smoothly animate with scroll
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30, // Move left by 30% on scroll
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100, // Move right by 100% on scroll
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100, // Move left by 100% on scroll
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  });

  return (
    // Section for summarizing services with animated titles
    <section className="bg-gold-white-multigrad mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
      {/* Service 1: Architecture */}
      <div id="title-service-1">
        <p>Architucture</p>
      </div>
      {/* Service 2: Development & Deployment with gold divider */}
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Deployment</p>
      </div>
      {/* Service 3: APIs, Frontends, Scalability with gold dividers */}
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p>APIs</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="italic">Frontends</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Scalability</p>
      </div>
      {/* Service 4: Databases */}
      <div id="title-service-4" className="translate-x-48">
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
