"use client";
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Laptop(props) {
  const { nodes, materials } = useGLTF("/models/laptop.glb");
 

  useEffect(() => {
    // Traverse and fix material settings
    Object.values(materials).forEach((material) => {
      if (material) {
        material.envMapIntensity = 0.5; // reduce environment reflections
        material.roughness = 0.7;        // make it more rough (less shiny)
        material.metalness = 0.1;         // reduce metallic look
        material.needsUpdate = true;
      }
    });
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 4]} position={[0, 105, 50]}>
        <group position={[-180, 30, -310]} scale={[0.7, 0.7, 0.7]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials['05___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials['11___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Laptop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Laptop2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials['04___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials['06___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials['07___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials['08___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials['09___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials['10___Default']}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/laptop.glb");