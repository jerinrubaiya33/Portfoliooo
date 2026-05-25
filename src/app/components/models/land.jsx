
import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/land.glb");

  return (
    <group
      {...props}
      dispose={null}
      scale={225}
      position={[20, 25, -70]}
      rotation={[0.2, -3.17, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.271}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SmallObjects_SmallObjectsOpaque_0.geometry}
              material={materials.SmallObjectsOpaque}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SmallObjects_SmallObjectTransparent_0.geometry}
              material={materials.SmallObjectTransparent}
            />
          </group>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MainMeshOtuline_Outline_0.geometry}
            material={materials.Outline}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MainMeshBounds_SmallObjectsOpaque_0.geometry}
            material={materials.SmallObjectsOpaque}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MainMesh_Material_0.geometry}
            material={materials.Material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Skybox_SmallObjectsOpaque_0.geometry}
            material={materials.SmallObjectsOpaque}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RocksOutline_Outline_0.geometry}
            material={materials.Outline}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/land.glb");


































// import React from "react";
// import { useGLTF } from "@react-three/drei";

// export function Model(props) {
//   const { nodes, materials } = useGLTF("/models/land.glb");

//   return (
//     <group
//       {...props}
//       dispose={null}
//       scale={225}
//       position={[20, 25, -70]}
//       rotation={[0.2, -3.17, 0]}
//     >
//       <group rotation={[-Math.PI / 2, 0, 0]} scale={0.271}>
//         <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
//           <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
//             <mesh
//               castShadow
//               receiveShadow
//               geometry={nodes.SmallObjects_SmallObjectsOpaque_0.geometry}
//               material={materials.SmallObjectsOpaque}
//             />

//             <mesh
//               castShadow
//               receiveShadow
//               geometry={nodes.SmallObjects_SmallObjectTransparent_0.geometry}
//               material={materials.SmallObjectTransparent}
//             />
//           </group>

//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.MainMeshOtuline_Outline_0.geometry}
//             material={materials.Outline}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           />

//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.MainMeshBounds_SmallObjectsOpaque_0.geometry}
//             material={materials.SmallObjectsOpaque}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           />

//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.MainMesh_Material_0.geometry}
//             material={materials.Material}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           />

//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.Skybox_SmallObjectsOpaque_0.geometry}
//             material={materials.SmallObjectsOpaque}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           />

//           <mesh
//             castShadow
//             receiveShadow
//             geometry={nodes.RocksOutline_Outline_0.geometry}
//             material={materials.Outline}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           />
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/models/land.glb");