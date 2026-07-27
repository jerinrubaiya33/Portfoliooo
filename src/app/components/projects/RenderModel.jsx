// "use client";

// import { Environment, OrbitControls } from "@react-three/drei";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import clsx from "clsx";
// import React, { Suspense, useState, useRef, useEffect } from "react";

// const CameraController = ({ isHovered, defaultZoom, hoverZoom }) => {
//   const { camera } = useThree();

//   useFrame(() => {
//     const targetZ = isHovered ? hoverZoom : defaultZoom;
//     // Let the hover zoom interpolate smoothly on the Z axis
//     camera.position.z += (targetZ - camera.position.z) * 0.05;

//     camera.lookAt(0, 0, 0);
//   });

//   return null;
// };

// const RenderModel = ({
//   children,
//   className,
//   defaultZoom = 220,
//   hoverZoom = 180,
// }) => {
//   const [webglAvailable, setWebglAvailable] = useState(true);
//   const [hasCheckedWebgl, setHasCheckedWebgl] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [zoom, setZoom] = useState(defaultZoom);
//   const [scale, setScale] = useState(0.7);

//   const modelRef = useRef();
//   const containerRef = useRef();

//   const isMobile =
//     typeof window !== "undefined" && window.innerWidth < 550;

//   useEffect(() => {
//     const canvas = document.createElement("canvas");

//     try {
//       const context =
//         canvas.getContext("webgl2", {
//           antialias: true,
//           alpha: true,
//         }) ||
//         canvas.getContext("webgl", {
//           antialias: true,
//           alpha: true,
//         }) ||
//         canvas.getContext("experimental-webgl");

//       setWebglAvailable(Boolean(context));
//     } catch {
//       setWebglAvailable(false);
//     } finally {
//       setHasCheckedWebgl(true);
//     }
//   }, []);

//   useEffect(() => {
//     const updateDimensions = () => {
//       const width = window.innerWidth;

//       if (width < 400) {
//         setZoom(320);
//         setScale(0.5);
//       } else if (width < 768) {
//         setZoom(260);
//         setScale(0.6);
//       } else {
//         setZoom(defaultZoom);
//         setScale(0.7);
//       }
//     };

//     updateDimensions();

//     window.addEventListener("resize", updateDimensions);

//     return () =>
//       window.removeEventListener("resize", updateDimensions);
//   }, [defaultZoom]);

//   useEffect(() => {
//     const timeoutRef = { current: null };

//     const handleWheel = () => {
//       if (isMobile) {
//         setIsHovered(true);

//         clearTimeout(timeoutRef.current);

//         timeoutRef.current = setTimeout(() => {
//           setIsHovered(false);
//         }, 1000);
//       }
//     };

//     const container = containerRef.current;

//     container?.addEventListener("wheel", handleWheel, {
//       passive: true,
//     });

//     return () => {
//       if (container) {
//         container.removeEventListener("wheel", handleWheel);
//       }

//       clearTimeout(timeoutRef.current);
//     };
//   }, [isMobile]);

//   const handlePointerOver = () => setIsHovered(true);
//   const handlePointerOut = () => setIsHovered(false);

//   return (
//     <div
//       className={clsx("w-full h-full relative", className)}
//       ref={containerRef}
//     >
//       {hasCheckedWebgl && !webglAvailable ? (
//         <div
//           className="flex h-full w-full items-center justify-center bg-transparent"
//           aria-label="3D scene unavailable on this device"
//         >
//           <div className="max-w-xs px-6 text-center text-sm text-white/80">
//             3D preview is unavailable on this device or browser.
//           </div>
//         </div>
//       ) : (
//         <Canvas
//           camera={{
//             position: [0, 35, zoom], // Initial setup: slight top-view (Y=35)
//             fov: 38,
//             near: 0.1,
//             far: 5000,
//           }}
//           gl={{
//             antialias: true,
//             alpha: true,
//           }}
//           style={{
//             width: "100%",
//             height: "100%",
//           }}
//         >
//           <Suspense fallback={null}>
//             <ambientLight intensity={0.7} />

//             <directionalLight
//               position={[20, 30, 20]}
//               intensity={2}
//               castShadow
//               shadow-mapSize-width={2048}
//               shadow-mapSize-height={2048}
//             />

//             <Environment preset="city" />

//             {React.isValidElement(children) &&
//               React.cloneElement(children, {
//                 ref: modelRef,
//                 scale,
//                 onPointerOver: handlePointerOver,
//                 onPointerOut: handlePointerOut,
//               })}

//             <OrbitControls
//               enableZoom={false}
//               enablePan={false}
//               enableRotate={true}

//               /* FIX DISTANCE */
//               minDistance={220}
//               maxDistance={220}

//               /* VERY SUBTLE LEFT ↔ RIGHT ROTATION */
//               // minAzimuthAngle={-0.08}
//               // maxAzimuthAngle={0.08}  
//               minAzimuthAngle={-0.8} // Tight restriction so it doesn't rotate too much left
//               maxAzimuthAngle={0.5}  // Tight restriction so it doesn't rotate too much right

//               /* POSITION TO TOP ONLY (BLOCKS BOTTOM) */
//               minPolarAngle={0.8}  // Fully allowed to pull camera straight over the top
//               maxPolarAngle={1.41}   // Initial position angle floor. Completely prevents tilting to the bottom.

//               /* SUPER SMOOTH CONTROL */
//               enableDamping
//               dampingFactor={0.05}
//               rotateSpeed={1.0}

//               makeDefault
//             />

//             <CameraController
//               isHovered={isHovered}
//               defaultZoom={zoom}
//               hoverZoom={hoverZoom}
//             />
//           </Suspense>
//         </Canvas>
//       )}
//     </div>
//   );
// };
// export default RenderModel;














"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense, useState, useRef, useEffect } from "react";

// Separate camera controller to smoothly interpolate zoom properties without resetting canvas state
const CameraController = ({ isHovered, defaultZoom, hoverZoom }) => {
  const { camera, invalidate } = useThree();

  useFrame(() => {
    const targetZ = isHovered ? hoverZoom : defaultZoom;
    
    // Smooth interpolation for hover zooming
    const diff = targetZ - camera.position.z;
    if (Math.abs(diff) > 0.01) {
      camera.position.z += diff * 0.05;
      camera.lookAt(0, 0, 0);
      invalidate(); // Force a frame render update when animating under "demand" loop
    }
  });

  return null;
};

const RenderModel = ({
  children,
  className,
  defaultZoom = 220,
  hoverZoom = 180,
}) => {
  const [webglAvailable, setWebglAvailable] = useState(true);
  const [hasCheckedWebgl, setHasCheckedWebgl] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [zoom, setZoom] = useState(defaultZoom);
  const [scale, setScale] = useState(0.7);

  const modelRef = useRef();
  const containerRef = useRef();

  const isMobile = typeof window !== "undefined" && window.innerWidth < 550;

  // GPU & WebGL Feature Detection
  useEffect(() => {
    const canvas = document.createElement("canvas");
    try {
      const context =
        canvas.getContext("webgl2", { alpha: true }) ||
        canvas.getContext("webgl", { alpha: true }) ||
        canvas.getContext("experimental-webgl");

      setWebglAvailable(Boolean(context));
    } catch {
      setWebglAvailable(false);
    } finally {
      setHasCheckedWebgl(true);
    }
  }, []);

  // Screen-size Breakpoint Scaling Matrix
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setZoom(320);
        setScale(0.5);
      } else if (width < 768) {
        setZoom(260);
        setScale(0.6);
      } else {
        setZoom(defaultZoom);
        setScale(0.7);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [defaultZoom]);

  // High-frequency event handling optimizations for passive touch/wheel gestures
  useEffect(() => {
    const timeoutRef = { current: null };
    const handleWheel = () => {
      if (isMobile) {
        setIsHovered(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setIsHovered(false);
        }, 1000);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: true });

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
      className={clsx("w-full h-full relative raw-canvas-wrapper", className)}
      ref={containerRef}
    >
      {hasCheckedWebgl && !webglAvailable ? (
        <div
          className="flex h-full w-full items-center justify-center bg-transparent"
          aria-label="3D scene unavailable on this device"
        >
          <div className="max-w-xs px-6 text-center text-sm text-white/80">
            3D preview is unavailable on this device or browser.
          </div>
        </div>
      ) : (
        <Canvas
          // 1. "demand" optimization loops renders frames ONLY when state changes or users scroll/drag
          frameloop="demand" 
          // 2. Caps max pixel processing density at 1.5 to save mobile processing overhead
          dpr={[1, 1.5]} 
          camera={{
            position: [0, 35, zoom],
            fov: 38,
            near: 0.1,
            far: 500, // 3. Cut down render projection box length from 1000 to save memory matrix buffers
          }}
          gl={{
            powerPreference: "high-performance",
            antialias: false, // 4. Kept false to remove anti-aliasing lag on low-power mobile devices
            alpha: true,
            stencil: false,
            depth: true,
            failIfMajorPerformanceCaveat: true // Prevents complete browser context crash hanging
          }}
          className="pointer-events-none"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.9} />
            
            <directionalLight
              position={[20, 30, 20]}
              intensity={1.5}
            />

            <Environment preset="city" />

            <group 
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            >
              {React.isValidElement(children) &&
                React.cloneElement(children, {
                  ref: modelRef,
                  scale,
                })}
            </group>

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              minDistance={220}
              maxDistance={220}
              minAzimuthAngle={-0.8}
              maxAzimuthAngle={0.5}
              minPolarAngle={0.8}
              maxPolarAngle={1.41}
              enableDamping
              dampingFactor={0.05}
              rotateSpeed={1.0}
              makeDefault
            />

            <CameraController
              isHovered={isHovered}
              defaultZoom={zoom}
              hoverZoom={hoverZoom}
            />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default RenderModel;