import { useGSAP } from "@gsap/react"; // Hook for GSAP animations in React
import gsap from "gsap"; // GSAP animation library
import { ScrollTrigger } from "gsap/all"; // ScrollTrigger plugin for scroll-based animations

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger with GSAP

const ServiceSummary = () => {
  // Set up GSAP scroll animations for each service title
  useGSAP(() => {
    gsap.to("#title-service-1-fullstack", {
      xPercent: 20,
      scrollTrigger: { target: "#title-service-1-fullstack", scrub: true },
    });
    gsap.to("#title-service-2-fullstack", {
      xPercent: -30,
      scrollTrigger: { target: "#title-service-2-fullstack", scrub: true },
    });
    gsap.to("#title-service-3-fullstack", {
      xPercent: 100,
      scrollTrigger: { target: "#title-service-3-fullstack", scrub: true },
    });

    gsap.to("#title-service-1-devops", {
      xPercent: 20,
      scrollTrigger: { target: "#title-service-1-devops", scrub: true },
    });
    gsap.to("#title-service-3-devops", {
      xPercent: 100,
      scrollTrigger: { target: "#title-service-3-devops", scrub: true },
    });
    gsap.to("#title-service-4-devops", {
      xPercent: -100,
      scrollTrigger: { target: "#title-service-4-devops", scrub: true },
    });

    gsap.to("#title-service-1-ai", {
      xPercent: 20,
      scrollTrigger: { target: "#title-service-1-ai", scrub: true },
    });
    gsap.to("#title-service-4-ai", {
      xPercent: -100,
      scrollTrigger: { target: "#title-service-4-ai", scrub: true },
    });
    gsap.to("#title-service-2-ai", {
      xPercent: -30,
      scrollTrigger: { target: "#title-service-2-ai", scrub: true },
    });
  });


  return (
    // Section for summarizing services with animated titles
    <section className="bg-gold-white-multigrad mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
      {/* FULL-STACK DEVELOPEMENT   (service 1) */}
      <div id="title-service-1-fullstack">
        <p>FULL-STACK DEVELOPMENT</p>
      </div>
      {/* React - Node.js - APIs                   (service 2) */}
      <div
        id="title-service-2-fullstack"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal text-7xl">React</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="font-normal text-7xl">Node.js</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="font-normal text-7xl">APIs</p>
      </div>
      {/* Databases                                      (service 3) */}
      <div
        id="title-service-3-fullstack"
        className="flex items-center justify-center gap-3 -translate-x-48">
        <p className="italic font-normal text-7xl">Databases</p>
      </div>

      {/* DEVOPS                                        (service 1) */}
      <div id="title-service-1-devops">
        <p>DEVOPS</p>
      </div>
      {/* CI/CD Pipelines - Docker               (service 3) */}
      <div
        id="title-service-3-devops"
        className="flex items-center justify-center gap-3 -translate-x-48">
        <p className="font-normal text-7xl">CI/CD Pipelines</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="italic font-normal text-7xl">Docker</p>
      </div>
      {/* Deployment - Scalability                (service 2) */}
      <div
        id="title-service-2-fullstack"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal text-7xl">Deployment</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="font-normal text-7xl">Scalability</p>
      </div>
      {/* AI & AUTOMATION                      (service 1) */}
      <div id="title-service-1-ai">
        <p>AI & AUTOMATION</p>
      </div>
      {/* OpenAI API - LLM Integration         (service 2) */}
      <div
        id="title-service-2-fullstack"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal text-7xl">OpenAI API</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="font-normal text-7xl">LLM Integration</p>
      </div>
      {/* Smart Apps                                      (service 3) */}
      <div
        id="title-service-3-fullstack"
        className="flex items-center justify-center gap-3 -translate-x-48">
        <p className="italic font-normal text-7xl">Smart Apps </p>
      </div>
    </section>
  );
};

export default ServiceSummary;
