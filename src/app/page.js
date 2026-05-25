// "use client";

// import { useState, useEffect } from "react";
// import "./globals.css";
// import Navigation from "./components/navigation/navigation";
// import RenderModel from "./components/projects/RenderModel";
// import NavHeader from "./components/navigation/NavHeader";
// import WorkAndSkills from "./components/navigation/WorkAndSkills";
// import CodeHoverEffect from "./components/CodeHoverEffect";
// import CustomCursor from "./components/CustomCursor";
// import TerminalLoader from "./components/Loader";
// import { Model as Land } from "./components/models/land";

// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isMounted, setIsMounted] = useState(false);

//   // Set mounted state to true when client side hydration completes
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // If the browser hasn't initialized React on the client side, show nothing or just the loader background
//   if (!isMounted) {
//     return <div className="fixed inset-0 bg-[#A4BE2A]" />;
//   }

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
//         {/* Single global cursor — white on dark hero */}
//         <CustomCursor color="rgba(220,220,220,0.6)" />

//         <main className="w-full relative overflow-y-auto bg-[#1c332e]">
//           {/* HERO SECTION */}
//           <div
//             className="relative w-full min-h-screen overflow-hidden"
//             style={{
//               background:
//                 "linear-gradient(to bottom, #A4BE2A 0%, #121212 75%)",
//             }}
//           >
//             <div className="absolute inset-0  z-[1] pointer-events-none" />
//             <CodeHoverEffect />

//             <div className="relative z-[2] w-full min-h-screen flex flex-col pointer-events-none">
//               <div className="pointer-events-auto">
//                 <NavHeader />
//               </div>

//               <div className="flex-1 w-full relative min-h-[calc(100vh-120px)]">
//                 <div className="absolute inset-0 z-30 pointer-events-none">
//                   <Navigation />
//                 </div>

//                 <div className="absolute inset-0 z-10 pointer-events-auto">
//                   <div className="w-full h-full transition-all duration-300">
//                     {!isLoading && (
//                       <RenderModel >
//                         < Land  />
//                       </RenderModel>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <WorkAndSkills />
//         </main>
//       </div>
//     </>
//   );
// }












"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import Navigation from "./components/navigation/navigation";
import RenderModel from "./components/projects/RenderModel";
import NavHeader from "./components/navigation/NavHeader";
import WorkAndSkills from "./components/navigation/WorkAndSkills";
import CustomCursor from "./components/CustomCursor";
import TerminalLoader from "./components/Loader";
import { Model as Land } from "./components/models/land";
import ProjectDetails from "./components/navigation/ProjectDetail";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="fixed inset-0 bg-[#A4BE2A]" />;
  }

  // ════════════════════════════════════════════════════════════
  // ⚡️ STAGE 1: ABSOLUTE ISOLATION TAKEOVER
  // ════════════════════════════════════════════════════════════
  // If a project is active, we return immediately. This stops the rest 
  // of the homepage layout below from ever execution or layout mounting.
  if (selectedProject) {
    return (
      <ProjectDetails
        projectNum={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  // ════════════════════════════════════════════════════════════
  // ── STAGE 2: BASE LANDING / HERO LAYOUT ──
  // ════════════════════════════════════════════════════════════
  return (
    <>
      {/* 1. Terminal Loader Layer */}
      {isLoading && <TerminalLoader onComplete={() => setIsLoading(false)} />}

      {/* 2. Main Page Layout (Only active and visible once loaded) */}
      <div
        className={`transition-opacity duration-1000 ${isLoading
            ? "opacity-0 h-screen overflow-hidden pointer-events-none"
            : "opacity-100"
          }`}
      >
        <CustomCursor />
        <main className="w-full relative bg-[#1c332e]">
          {/* HERO SECTION */}
          <div
            id="home"
            className="relative w-full min-h-screen overflow-hidden"
            style={{
              background:
                "linear-gradient(to bottom, #A4BE2A 0%, #121212 75%)",
            }}
          >
            <div className="absolute inset-0 z-[1] pointer-events-none" />
            <div className="relative z-[2] w-full min-h-screen flex flex-col pointer-events-none">
              <div className="pointer-events-auto">
                <NavHeader />
              </div>

              <div className="flex-1 w-full relative min-h-[calc(100vh-120px)]">
                <div className="absolute inset-0 z-30 pointer-events-none">
                  <Navigation />
                </div>

                <div className="absolute inset-0 z-10 pointer-events-none">
                  <div className="w-full h-full transition-all duration-300">
                    {!isLoading && (
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
