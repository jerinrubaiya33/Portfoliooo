import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  // Use a compressed version of the file once optimized
  const { scene } = useGLTF("/models/land.glb");

  return (
    <group
      {...props}
      dispose={null}
      scale={82000}
      position={[20, 25, -70]}
      rotation={[0.2, -3.17, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.271}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          
          {/* Direct scene injection bypasses CPU loop evaluations entirely */}
          <primitive object={scene} />

        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/land.glb");