// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/models/spooky_thing.glb')
//   return (
//     /* position={[40, -10, 0]} -> +40 far right, -10 far down */
//     <group {...props} position={[96, -55, 0]} scale={11} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <group position={[-3.065, -2.611, 3.037]} rotation={[-0.028, -0.046, -0.001]} scale={0.445}>
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Cylinder_0.geometry}
//             material={materials['Material.002']}
//           />
//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Cylinder_1.geometry}
//             material={materials['Material.003']}
//           />
//         </group>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube_0.geometry}
//           material={materials['Material.001']}
//           position={[-3.057, -2.726, 3.688]}
//           rotation={[0, 0, 1.181]}
//           scale={[0.05, 0.05, 0.06]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube000_0.geometry}
//           material={materials.Material}
//           position={[-1.37, -0.41, 1.195]}
//         />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/models/spooky_thing.glb')




















import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/spooky_thing.glb')
  return (
    /* 
      - Height/Length set to 10 (down slightly from 11, but larger than 8.5)
      - Width and Depth scaled to 12.5 to give it a fuller, healthy proportion
    */
    <group {...props} position={[90, -55, 0]} scale={[12.5, 10, 12.5]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-3.065, -2.611, 3.037]}
         rotation={[-0.028, -0.046, -0.001]} 
         scale={0.445}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_0.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_0.geometry}
          material={materials['Material.001']}
          position={[-3.057, -2.726, 3.688]}
          rotation={[0, 0, 1.181]}
          scale={[0.05, 0.05, 0.06]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_0.geometry}
          material={materials.Material}
          position={[-1.37, -0.41, 1.195]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/spooky_thing.glb')