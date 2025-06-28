"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Laryngoscope(props) {

  // const modelRef = useRef()
  // useFrame(()=>{
  //   modelRef.current.rotation.y += 0.007
  // })

  const { nodes, materials } = useGLTF('models/laryngoscope.glb')
  return (
    // <group {...props} dispose={null} ref={modelRef} scale={[5, 5, 5]} position={[17, -5, 40]} rotation={[1, Math.PI, 0]}>
    <group {...props} dispose={null} scale={[5, 5, 5]} position={[17, -5, 40]} rotation={[1, Math.PI, 0]}>
      <group position={[3.912, -0.513, 6.598]} rotation={[-0.121, 0.348, -0.179]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.cable_detail}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Larynoscope_Normal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Larynoscope_Normal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.Larynoscope_Info}
          position={[-1.958, -1.133, -0.225]}
          rotation={[1.013, 0.418, 1.529]}
          scale={0.993}
        />
      </group>

      <group position={[0.344, -0.013, 7.821]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.cable_normal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.cable_detail}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.Larynoscope_Normal}
        />
      </group>
      <group position={[3.912, -0.513, 6.598]} rotation={[-0.121, 0.348, -0.179]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.Visor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.Larynoscope_Info}
          position={[-0.116, 0.12, -0.228]}
          rotation={[2.561, -0.04, 2.723]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.Larynoscope_Info}
          position={[-1.166, 0.048, 0.566]}
          rotation={[-2.24, 1.15, 1.668]}
          scale={0.307}
        />
      </group>
      <group position={[2.594, -0.048, 8.507]} rotation={[0.039, 0.029, 0.026]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.Larynoscope_Normal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.Larynoscope_Normal}
          position={[-0.04, -0.002, 0.026]}
          rotation={[Math.PI / 2, 0.05, 0.983]}
          scale={0.166}
        />
      </group>
      <group position={[2.474, -0.24, 8.289]} rotation={[0.039, 0.029, 0.026]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.Larynoscope_Normal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.Larynoscope_Normal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.Larynoscope_Normal}
          position={[-0.035, -0.002, 0.023]}
          rotation={[Math.PI / 2, 0.05, 0.983]}
          scale={0.11}
        />
      </group>
      <group position={[0, 0.452, 3.586]} rotation={[-1.094, 0, 0]} scale={0.121}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.Larynoscope_Normal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.Larynoscope_Normal}
          position={[0, 1.363, -0.027]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.712}
        />
      </group>
      <group position={[-0.095, -0.006, 4.952]} rotation={[1.574, 0, 1.571]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.Larynoscope_Normal}
          position={[-4.951, -0.096, 0.009]}
          rotation={[-3.114, 1.568, 1.543]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.Larynoscope_Normal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.Larynoscope_Normal}
          position={[0.011, 0.034, -0.004]}
          rotation={[-3.114, 1.568, 1.543]}
        />
      </group>
      <group position={[0, 0, -2.183]} rotation={[Math.PI / 2, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.Larynoscope_Normal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          material={materials.Larynoscope_Normal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.Larynoscope_Normal}
        />
      </group>
      <group position={[0, 0, 2.5]} rotation={[1.571, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_68.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_70.geometry}
          material={materials.Larynoscope_Normal}
          position={[0, 0.016, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_72.geometry}
          material={materials.Larynoscope_Info}
          position={[0.425, 0.096, -0.248]}
          rotation={[Math.PI / 2, 0, -2.092]}
          scale={0.225}
        />
      </group>
      <group position={[0, 0.004, 6.031]} rotation={[Math.PI / 2, -0.442, -0.73]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_76.geometry}
          material={materials.cable_normal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_78.geometry}
          material={materials.Larynoscope_Normal}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['Material.002']}
        position={[0.344, -0.013, 7.821]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.cable_normal}
        position={[2.419, -0.727, 1.247]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_64.geometry}
        material={materials.Handle}
        position={[0, 0, 0.257]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_66.geometry}
        material={materials['Material.001']}
        position={[-0.882, 0.184, 4.684]}
        rotation={[-1.511, -0.277, -0.2]}
        scale={4.327}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_74.geometry}
        material={materials['Material.001']}
        position={[4.579, -1.532, 11.683]}
        rotation={[1.59, 0.464, -1.091]}
        scale={4.327}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_80.geometry}
        material={materials['Material.005']}
        position={[0, 0, 1.796]}
        scale={0.888}
      />
    </group>
  )
}

useGLTF.preload('models/laryngoscope.glb')