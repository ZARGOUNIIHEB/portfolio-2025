import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"; // Section header with animation
import { servicesData } from "../constants"; // Array of service data
import { useMediaQuery } from "react-responsive"; // Responsive hook for screen size
import { useGSAP } from "@gsap/react"; // GSAP animation hook
import gsap from "gsap";

const Services = () => {
  // Description text for the section
  const text = `I build secure, high-performance full-stack apps
    with smooth UX to drive growth 
    not headaches.`;

  // Refs for each service card (for animation)
  const serviceRefs = useRef([]);

  // Check if the screen is desktop size
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); // 768px

  // Animate service cards when they enter the viewport
  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200, // Animate from 200px below
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // Start animation when top of card is at 80% of viewport
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section id="services" className="min-h-screen bg-myblue rounded-t-4xl">
      {/* Animated section header */}
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Service"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {/* Render each service card */}
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)} // Assign ref for animation
          key={index}
          className="sticky px-10 pt-6 pb-12 text-white bg-myblue border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                // On desktop, cards are sticky and spaced out
                top: `calc(10vh + ${index * 5}em)`,
                marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
              }
              : { top: 0 } // On mobile, no sticky positioning
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              {/* Service title */}
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              {/* Service description */}
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {service.description}
              </p>
              {/* List of service items */}
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      {/* Item number */}
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
                      {/* Item title */}
                      {item.title}
                    </h3>
                    {/* Divider between items */}
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
