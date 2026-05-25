// //page.js
// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import Form from "@/app/components/contact/Form";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
// };

// const staggerContainer = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.15 }
//   }
// };

// export default function Contact() {
//   return (
//     // Replaced flex items-center justify-center with a structured vertical layout to prevent vertical cropping and ensure 100% background coverage
//     <div className="relative min-h-screen w-full bg-[#f3efe6] text-[#1a1a1a] font-mono overflow-y-auto px-4 py-16 sm:px-8 flex flex-col items-center justify-start">

//       {/* subtle CRT scanlines */}
//       <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

//       {/* dark terminal overlay grid */}
//       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

//       {/* THEME-MATCHED GO BACK BUTTON */}
//       <div className="absolute top-4 left-4 z-50">
//         <Link 
//           href="/" 
//           className="inline-flex items-center gap-1.5 bg-[#f3efe6] text-[#1a1a1a] border-2 border-[#1a1a1a] py-1.5 px-3 text-xs font-bold transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
//         >
//           <span>&larr;</span> [cd ..]
//         </Link>
//       </div>

//       <motion.article
//         variants={staggerContainer}
//         initial="hidden"
//         animate="show"
//         className="relative z-10 w-full max-w-4xl py-10 px-6 sm:px-10 border-2 border-[#1a1a1a] bg-[#f3efe6] shadow-[6px_6px_0px_#1a1a1a] mt-8"
//       >

//         {/* HEADER (terminal + system style) */}
//         <motion.div variants={fadeInUp} className="mb-8">

//           <p className="text-xs text-[#7f7c75] mb-2">
//             guest@machine:~$ connect --contact
//           </p>

//           <h1 className="text-3xl sm:text-5xl font-bold tracking-tight flex items-center gap-2">
//             Establish Connection
//             <span className="text-[#e31e24] animate-pulse">▊</span>
//           </h1>

//           <div className="mt-3 text-sm text-[#4a4a4a] leading-relaxed">
//             // secure channel initialized<br />
//             // awaiting message input...
//           </div>

//         </motion.div>

//         {/* INFO BLOCK (editorial terminal hybrid) */}
//         <motion.div
//           variants={fadeInUp}
//           className="mb-10 border-2 border-[#1a1a1a] p-5 bg-white/40"
//         >
//           <p className="text-sm text-[#4a4a4a] leading-relaxed">
//             I’ve built projects using React, Next.js, JavaScript (ES6+),
//             with experience in responsive UI, REST APIs, Git workflows and
//             backend fundamentals using Node.js.
//           </p>

//           <p className="mt-3 text-xs text-[#7f7c75]">
//             status: frontend.engineer.active
//           </p>
//         </motion.div>

//         {/* FORM BLOCK (command panel style) */}
//         <motion.div
//           variants={fadeInUp}
//           className="border-2 border-[#e31e24] bg-[#fffdf8] p-6 shadow-[4px_4px_0px_#e31e24]"
//         >
//           <div className="mb-4 text-xs font-bold text-[#e31e24]">
//             [ INPUT CHANNEL ]
//           </div>

//           <Form />
//         </motion.div>

//         {/* FOOTER SYSTEM STATUS */}
//         <motion.div
//           variants={fadeInUp}
//           className="mt-8 text-xs flex justify-between text-[#7f7c75]"
//         >
//           <span>connection: ready</span>
//           <span className="text-[#1a1a1a]">█ active</span>
//         </motion.div>

//       </motion.article>
//     </div>
//   );
// }