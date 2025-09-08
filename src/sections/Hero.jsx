import { Canvas } from "@react-three/fiber"; // R3F canvas for 3D rendering

import { Brain } from "../components/Brain"; // Custom 3D brain model
import { Environment, Float, Lightformer } from "@react-three/drei"; // Drei helpers for lighting and floating
import { useMediaQuery } from "react-responsive"; // Responsive hook for screen size
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"; // Animated header component

const Hero = () => {
  // Detect if the device is mobile for responsive scaling
  const isMobile = useMediaQuery({ maxWidth: 853 });

  // Hero section description text
  const text = `I design and build scalable web & AI-powered applications,
   with CI/CD pipelines and cloud-ready architecture`;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      {/* Animated header for hero section */}
      <AnimatedHeaderSection
        subTitle={"Full-Stack Developer | DevOps Enthusiast | AI Integrator"}
        title={"Iheb ZARGOUNI"}
        text={text}
        textColor={"text-black"}
      />
      {/* 3D background figure */}
      <figure
        className="absolute inset-0 -z-50  bg-gradient-to-b from-mygold to-primary"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, 15], fov: 35, near: 0.1, far: 100 }}
        >
          {/* Ambient light for soft illumination */}
          <ambientLight intensity={0.08} />
          {/* Stronger, focused light for highlights */}
          <directionalLight
            castShadow
            position={[5, 10, 10]}
            intensity={1.5}
            color="#fff8dc"
          />
          {/* Optional: Rim light for glow */}
          <pointLight position={[0, 2, 2]} intensity={2} color="#ffd700" />

          {/* Floating 3D brain model, scaled for mobile/desktop */}
          <Float speed={0.5}>
            {/* <Planet scale={isMobile ? 0.7 : 1} /> */}
            <Brain scale={isMobile ? 1.7 : 3} />
          </Float>
          {/* Environment lighting with multiple lightformers for glow */}
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
