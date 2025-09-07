import React, { useEffect, useRef, useState } from "react";
import { socials } from "../constants"; // Social media links
import { useGSAP } from "@gsap/react"; // GSAP React hook
import gsap from "gsap"; // GSAP animation library
import { Link } from "react-scroll"; // For smooth scrolling navigation

const Navbar = () => {
  // Refs for DOM elements to animate
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);

  // Animation timelines
  const tl = useRef(null);
  const iconTl = useRef(null);

  // State for menu open/close and burger visibility
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);
  const [navBg, setNavBg] = useState("bg-myblue-myskin-multigrad"); // default color
  const [valueOne, setValueOne] = useState("bg-myblue-myskin-multigrad".slice(0, 9));
  const [valueTwo, setValueTwo] = useState("bg-" + "bg-myblue-myskin-multigrad".slice(10, 16));
  const [btnColor, setBtnColor] = useState("bg-myskin");

  // GSAP setup for menu and burger icon animations
  useGSAP(() => {
    // Set initial positions/styles
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    // Timeline for menu slide-in and links fade-in
    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );

    // Timeline for burger icon transformation
    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  const updateValuesFromBg = (bg) => {
    switch (bg) {
      case "bg-mygold-mylightblue-multigrad":
        setValueOne(bg.slice(0, 9));
        setValueTwo("bg-" + bg.slice(10, 21));
        break;
      case "bg-myblue-myskin-multigrad":
        setValueOne(bg.slice(0, 9));
        setValueTwo("bg-" + bg.slice(10, 16));
        break;
      case "bg-mylightblue-myblue-multigrad":
        setValueOne(bg.slice(0, 14));
        setValueTwo("bg-" + bg.slice(15, 21));
        break;
      case "bg-myblue-mygold-multigrad":
        setValueOne(bg.slice(0, 9));
        setValueTwo("bg-" + bg.slice(10, 16));
        break;
      default:
        console.log("No color provided.");
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);


      // Change navbar background based on scroll position
      if (currentScrollY < 600) {
        //  setNavBg("bg-myblue-myskin-multigrad"); // top of page
        const newBg = "bg-myblue-myskin-multigrad";
        setNavBg(newBg);
        updateValuesFromBg(newBg);
        if (isOpen) setBtnColor(valueTwo);

        // console.log(btnColor);

      } else if (currentScrollY >= 600 && currentScrollY < 800) {
        const newBg = "bg-myblue-myskin-multigrad";
        setNavBg(newBg);
        updateValuesFromBg(newBg);
        if (isOpen) setBtnColor(valueTwo);
        // console.log(btnColor);
      } else if (currentScrollY >= 800 && currentScrollY < 1500) {
        const newBg = "bg-myblue-myskin-multigrad"; //White space end
        setNavBg(newBg);
        updateValuesFromBg(newBg);
        if (isOpen) setBtnColor(valueTwo);
        // console.log(btnColor);
      } else if (currentScrollY >= 1500 && currentScrollY < 3000) {
        const newBg = "bg-mygold-mylightblue-multigrad";
        setNavBg(newBg);
        updateValuesFromBg(newBg);
        if (isOpen) setBtnColor(valueTwo);
        // console.log(btnColor);
      } else if (currentScrollY >= 3000 && currentScrollY < 4500) {
        const newBg = "bg-mygold-mylightblue-multigrad";
        setNavBg(newBg);
        updateValuesFromBg(newBg);
        if (isOpen) setBtnColor(valueTwo);
        // console.log(btnColor);
      } else if (currentScrollY >= 4500 && currentScrollY < 5000) {
        const newBg = "bg-mygold-mylightblue-multigrad";//Blue space end
        setNavBg(newBg);
        updateValuesFromBg(newBg);
        if (isOpen) setBtnColor(valueTwo);
        // console.log(btnColor);
      } else if (currentScrollY >= 5000 && currentScrollY < 8000) {
        const newBg = "bg-mylightblue-myblue-multigrad"; // Yellow space end
        setNavBg(newBg);
        updateValuesFromBg(newBg);
        if (isOpen) setBtnColor(valueTwo);
        // console.log(btnColor);
      } else {
        const newBg = "bg-myblue-mygold-multigrad"; // Perple space
        setNavBg(newBg);
        updateValuesFromBg(newBg);
        if (isOpen) setBtnColor(valueTwo);
        // console.log(btnColor);
      }

      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu open/close and animate accordingly
  const toggleMenu = () => {


    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
      setBtnColor(valueOne);
    } else {
      tl.current.play();
      iconTl.current.play();
      setBtnColor(valueTwo);
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sliding navigation menu */}
      <nav
        ref={navRef}
        className={`fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase ${navBg} text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2`}
      >
        {/* Navigation links */}
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
          {["home", "services", "about", "work", "contact"].map(
            (section, index) => (
              <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                <Link
                  className="transition-all duration-300 custom-cursor hover:text-white"
                  to={`${section}`}
                  smooth
                  offset={0}
                  duration={2000}
                >
                  {section}
                </Link>
              </div>
            )
          )}
        </div>
        {/* Contact info and social links */}
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50">E-mail</p>
            <p className="text-xl tracking-widest lowercase text-pretty">
              iheb.zargouni.pr@gmail.com
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-sm leading-loose tracking-widest uppercase custom-cursor hover:text-white transition-colors duration-300"
                >
                  {"{ "}
                  {social.name}
                  {" }"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* Burger menu button */}
      <div
        className={`fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 ${btnColor} rounded-full custom-cursor w-14 h-14 md:w-20 md:h-20 top-4 right-10`}
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        {/* Top line of burger icon */}
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        {/* Bottom line of burger icon */}
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
      </div >
    </>
  );
};

export default Navbar;
