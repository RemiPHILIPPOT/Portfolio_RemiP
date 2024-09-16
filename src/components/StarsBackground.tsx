// StarsBackground.tsx
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import React, { useRef } from "react";

const StarsComponent = () => {
    const starsRef = useRef<any>();

    useFrame(() => {
        if (starsRef.current) {
            starsRef.current.rotation.y += 0.001;
            starsRef.current.rotation.x += 0.0005;
            starsRef.current.position.z += 0.05;
            if (starsRef.current.position.z > 50) {
                starsRef.current.position.z = -100;
            }
        }
    });

    return (
        <group ref={starsRef}>
            <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={1}
            />
        </group>
    );
};

interface StarsBackgroundProps {
    visible: boolean;
}

const StarsBackground: React.FC<StarsBackgroundProps> = ({ visible }) => {
    if (!visible) return null;

    return <StarsComponent />;
};

export default StarsBackground;
