import { useRef } from "react";
import Marquee from "../components/Marquee"; // Marquee component for scrolling text
import { useGSAP } from "@gsap/react"; // GSAP React hook
import gsap from "gsap"; // GSAP animation library


const ContactSummary = () => {
  const containerRef = useRef(null); // Ref for the section container

  // Items for the first marquee
  const items = [
    "logos:python",
    "logos:ubuntu",
    "logos:git",
    "logos:github",
    "logos:docker",
    "logos:aws",
    "logos:jenkins",
    "logos:kubernetes",
    "logos:nginx",
    "logos:haproxy",
    "logos:redis",
    "logos:ansible",
    "logos:terraform",
    "logos:prometheus",
    "logos:grafana",
  ];
  // Items for the second marquee (repeated "contact us")
  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us"
  ];
  // Items for the third marquee (web development logos)
  const items3 = [
    "logos:javascript",
    "logos:react",
    "logos:typescript-icon",
    "logos:nodejs",
    "logos:express",
    "logos:nextjs",
    "logos:tailwindcss",
    "logos:bootstrap",
    "logos:material-ui",
    "logos:sass",
    "logos:html-5",
    "logos:css-3",
    "logos:javascript"
  ];
  // Items for the fourth marquee (AI tools logos)
  const items4 = [
    "logos:openai",
    "Kilo Code",
    "logos:anthropic",
    "logos:cursor",
    "logos:microsoft",
    "logos:github"
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
      className="flex flex-col items-center justify-between min-h-screen gap-1 mt-16"
    >
      {/* Top marquee with keywords */}
      <Marquee items={items3} />
      <Marquee items={items} reverse={true} />
      <Marquee items={items4} />
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
