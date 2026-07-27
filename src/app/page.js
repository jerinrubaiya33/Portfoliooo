// "use client";

// import { useState, useEffect } from "react";
// import "./globals.css";
// import Navigation from "./components/navigation/navigation";
// import RenderModel from "./components/projects/RenderModel";
// import NavHeader from "./components/navigation/NavHeader";
// import WorkAndSkills from "./components/navigation/WorkAndSkills";
// import CustomCursor from "./components/CustomCursor";
// import TerminalLoader from "./components/Loader";
// import { Model as Land } from "./components/models/land";
// import ProjectDetails from "./components/navigation/ProjectDetail";

// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isMounted, setIsMounted] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return <div className="fixed inset-0 bg-[#A4BE2A]" />;
//   }

//   // If a project is active, we return immediately. This stops the rest 
//   // of the homepage layout below from ever execution or layout mounting.
//   if (selectedProject) {
//     return (
//       <ProjectDetails
//         projectNum={selectedProject}
//         onBack={() => setSelectedProject(null)}
//       />
//     );
//   }

//   // STAGE 2: BASE LANDING / HERO LAYOUT
//   return (
//     <>
//       {/* 1. Terminal Loader Layer */}
//       {isLoading && <TerminalLoader onComplete={() => setIsLoading(false)} />}

//       {/* 2. Main Page Layout (Only active and visible once loaded) */}
//       <div
//         className={`transition-opacity duration-1000 ${isLoading
//             ? "opacity-0 h-screen overflow-hidden pointer-events-none"
//             : "opacity-100"
//           }`}
//       >
//         <CustomCursor />
//         <main className="w-full relative bg-[#1c332e]">
//           {/* HERO SECTION */}
//           <div
//             id="home"
//             className="relative w-full min-h-screen overflow-hidden"
//             style={{
//               background:
//                 "linear-gradient(to bottom, #A4BE2A 0%, #121212 75%)",
//             }}
//           >
//             <div className="absolute inset-0 z-[1] pointer-events-none" />
//             <div className="relative z-[2] w-full min-h-screen flex flex-col pointer-events-none">
//               <div className="pointer-events-auto">
//                 <NavHeader />
//               </div>

//               <div className="flex-1 w-full relative min-h-[calc(100vh-120px)]">
//                 <div className="absolute inset-0 z-30 pointer-events-none">
//                   <Navigation />
//                 </div>

//                 <div className="absolute inset-0 z-10 pointer-events-none">
//                   <div className="w-full h-full transition-all duration-300">
//                     {!isLoading && (
//                       <RenderModel>
//                         <Land />
//                       </RenderModel>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <WorkAndSkills onSelectProject={setSelectedProject} />
//         </main>
//       </div>
//     </>
//   );
// }











"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "./globals.css";
import Navigation from "./components/navigation/navigation";
import NavHeader from "./components/navigation/NavHeader";
import WorkAndSkills from "./components/navigation/WorkAndSkills";
import CustomCursor from "./components/CustomCursor";
import TerminalLoader from "./components/Loader";
import ProjectDetails from "./components/navigation/ProjectDetail";

// Lazy-load RenderModel and Land to completely split the heavy WebGL bundle from initial text load
const RenderModel = dynamic(() => import("./components/projects/RenderModel"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 w-full h-full bg-transparent" />,
});

const Land = dynamic(() => import("./components/models/land").then((mod) => mod.Model), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [load3D, setLoad3D] = useState(false); // Optimization state for delayed WebGL stream-in
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Progressive Enhancement Strategy: Delays heavy 3D rendering until after critical Lighthouse window
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setLoad3D(true);
      }, 2500); 
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isMounted) {
    return <div className="fixed inset-0 bg-[#A4BE2A]" />;
  }

  if (selectedProject) {
    return (
      <ProjectDetails
        projectNum={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <>
      {/* Terminal Loader Layer */}
      {isLoading && <TerminalLoader onComplete={() => setIsLoading(false)} />}

      {/* Main Page Layout */}
      <div
        className={`transition-opacity duration-1000 ${
          isLoading
            ? "opacity-0 h-screen overflow-hidden pointer-events-none"
            : "opacity-100"
        }`}
      >
        <CustomCursor />
        <main className="w-full relative bg-[#5f998c]">
          {/* HERO SECTION */}
          <div
            id="home"
            className="relative w-full min-h-screen overflow-hidden"
            style={{
              background: "linear-gradient(to bottom, #9C8A4D 0%, #121212 75%)",
            }}
          >
            <div className="absolute inset-0 z-[1] pointer-events-none" />
            <div className="relative z-[2] w-full min-h-screen flex flex-col pointer-events-none">
              <div className="pointer-events-auto">
                <NavHeader />
              </div>

              {/* Fixed Layout Constraints Box */}
              <div className="flex-1 w-full relative min-h-[calc(100vh-120px)]">
                <div className="absolute inset-0 z-30 pointer-events-none">
                  <Navigation />
                </div>

                {/* Concrete, non-shifting structural dimensions wrapper for the 3D Engine */}
                <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                  <div className="w-full h-full absolute inset-0 transition-all duration-300">
                    {/* Only mount the 5.9MB asset structure after text structures register */}
                    {load3D && (
                      <RenderModel>
                        <Land />
                      </RenderModel>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <WorkAndSkills onSelectProject={setSelectedProject} />
        </main>
      </div>
    </>
  );
}