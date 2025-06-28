// "use client";
// import { Environment, OrbitControls } from "@react-three/drei";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import clsx from "clsx";
// import React, { Suspense, useState, useRef } from "react";

// const CameraController = ({ isHovered, defaultZoom, hoverZoom }) => {
//   const { camera } = useThree();
//   useFrame(() => {
//     const targetZ = isHovered ? hoverZoom : defaultZoom;
//     camera.position.z += (targetZ - camera.position.z) * 0.05;
//   });
//   return null;
// };

// const RenderModel = ({
//   children,
//   className,
//   defaultZoom = 180,
//   hoverZoom = 130,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const modelRef = useRef();

//   const handlePointerOver = () => setIsHovered(true);
//   const handlePointerOut = () => setIsHovered(false);

//   return (
//     <div className={clsx("w-full h-full relative", className)}>
//       <Canvas
//         camera={{ position: [0, 0, defaultZoom], fov: 40, near: 1, far: 2000 }}
//         gl={{ antialias: true }}
//       >
//         <Suspense fallback={null}>
//           <ambientLight intensity={0.4} />
//           <directionalLight
//             position={[5, 5, 5]}
//             intensity={1.2}
//             castShadow
//             shadow-mapSize-width={1024}
//             shadow-mapSize-height={1024}
//           />
//           <Environment preset="city" />

//           {React.cloneElement(children, {
//             ref: modelRef,
//             onPointerOver: handlePointerOver,
//             onPointerOut: handlePointerOut,
//           })}

//           <OrbitControls
//             enableZoom={true}
//             enablePan={false}
//             enableRotate={false}
//             minDistance={100}
//             maxDistance={200}
//           />

//           <CameraController
//             isHovered={isHovered}
//             defaultZoom={defaultZoom}
//             hoverZoom={hoverZoom}
//           />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default RenderModel;






"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense, useState, useRef, useEffect } from "react";

const CameraController = ({ isHovered, defaultZoom, hoverZoom }) => {
  const { camera } = useThree();
  useFrame(() => {
    const targetZ = isHovered ? hoverZoom : defaultZoom;
    camera.position.z += (targetZ - camera.position.z) * 0.05;
  });
  return null;
};

const RenderModel = ({
  children,
  className,
  defaultZoom = 180,
  hoverZoom = 130,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [zoom, setZoom] = useState(defaultZoom);
  const [scale, setScale] = useState(0.7);
  const modelRef = useRef();
  const containerRef = useRef();

  const isMobile = typeof window !== "undefined" && window.innerWidth < 550;

  // Responsive behavior
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;

      if (width < 400) {
        setZoom(250);
        setScale(0.4);
      } else if (width < 768) {
        setZoom(200);
        setScale(0.5);
      } else {
        setZoom(defaultZoom);
        setScale(0.7);
      }
    };

    updateDimensions(); // Run on mount
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [defaultZoom]);

  // Scroll to zoom effect on mobile
  useEffect(() => {
    const handleWheel = (e) => {
      if (isMobile) {
        setIsHovered(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setIsHovered(false);
        }, 1000); // Reset zoom after scroll stops
      }
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: true });

    const timeoutRef = { current: null };

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      clearTimeout(timeoutRef.current);
    };
  }, [isMobile]);

  const handlePointerOver = () => setIsHovered(true);
  const handlePointerOut = () => setIsHovered(false);

  return (
    <div
      className={clsx("w-full h-full relative touch-none", className)}
      ref={containerRef}
    >
      <Canvas
        camera={{ position: [0, 0, zoom], fov: 40, near: 1, far: 2000 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <Environment preset="city" />

          {React.isValidElement(children) &&
            React.cloneElement(children, {
              ref: modelRef,
              scale,
              onPointerOver: handlePointerOver,
              onPointerOut: handlePointerOut,
            })}

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            minDistance={100}
            maxDistance={300}
          />

          <CameraController
            isHovered={isHovered}
            defaultZoom={zoom}
            hoverZoom={hoverZoom}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RenderModel;