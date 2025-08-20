import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei"; // Hook to load GLTF 3D models
import { useGSAP } from "@gsap/react"; // GSAP React hook for animation
import gsap from "gsap"; // GSAP animation library

/**
 * Brain 3D model component.
 * @param {object} props - Props to pass to the primitive, including scale.
 * @example
 * <Brain scale={1.2} />
 */
export function Brain(props) {
    const shapeContainer = useRef(null); // Ref for the group containing the model
    const { scene } = useGLTF("/models/brain-model.glb"); // Load the GLTF brain model

    // Animate the brain model dropping in from above on mount
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(shapeContainer.current.position, {
            y: 5,           // Start 5 units above
            duration: 3,    // Animate over 3 seconds
            ease: "circ.out",
        });
    }, []);

    return (
        // Group containing the brain model, with animation ref
        <group ref={shapeContainer} {...props} dispose={null}>
            <primitive
                object={scene}           // The loaded 3D scene
                scale={props.scale ?? 3} // Use provided scale or default to 3
                position={[0, 0, 0]}     // Center the model
                {...props}               // Pass any additional props
            />
        </group>
    );
}
