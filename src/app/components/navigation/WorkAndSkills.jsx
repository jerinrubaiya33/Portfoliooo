// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// // ── COLOR PALETTE (From the Screenshot) ──
// const C = {
//   bg: "#121212",        // Dark Charcoal Background
//   cardDark: "#1E1E1E",    // Slightly lighter charcoal for cards
//   pureWhite: "#FFFFFF",   // Crisp white for main cards and headers
//   neonGreen: "#B5FF3B",   // High-voltage lime/neon green
//   orangeAccent: "#E3622B",// Energetic burnt orange
//   grayText: "#9CA3AF",    // Subdued gray for secondary text
//   borderLine: "#2E2E2E",  // Subtle dark divider lines
// };

// const stagger = (i, base = 0.08) => ({
//   initial: { opacity: 0, y: 24 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1], delay: i * base },
// });

// const fadeIn = (delay = 0) => ({
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1], delay },
// });

// const STYLES = `
// @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');

// *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// .port {
//   background: ${C.bg};
//   color: ${C.pureWhite};
//   font-family: 'Plus Jakarta Sans', sans-serif;
//   overflow-x: hidden;
// }

// /* ── layout ── */
// .wrap { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
// @media (max-width: 768px) { .wrap { padding: 0 24px; } }
// .sec { padding: 96px 0; }

// /* ── divider ── */
// .div-line {
//   width: 100%;
//   height: 1px;
//   background: ${C.borderLine};
// }

// /* ── section tag/label ── */
// .label {
//   display: inline-flex;
//   align-items: center;
//   gap: 10px;
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 11px;
//   letter-spacing: 0.16em;
//   text-transform: uppercase;
//   color: ${C.neonGreen};
//   margin-bottom: 18px;
// }
// .label::before {
//   content: '';
//   width: 16px;
//   height: 2px;
//   background: ${C.neonGreen};
// }

// /* ── display headings ── */
// .dh {
//   font-weight: 800;
//   line-height: 1.1;
//   letter-spacing: -0.03em;
//   color: ${C.pureWhite};
// }

// /* ── highlight ── */
// .hl {
//   color: ${C.neonGreen};
// }

// /* ════════════════════════════════
//    WORK — table
// ════════════════════════════════ */
// .proj-head {
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-end;
//   flex-wrap: wrap;
//   gap: 24px;
//   margin-bottom: 56px;
// }
// .proj-desc {
//   max-width: 320px;
//   font-size: 14px;
//   color: ${C.grayText};
//   line-height: 1.75;
//   font-weight: 400;
// }

// .proj-table { width: 100%; border-collapse: collapse; }

// .proj-table thead tr {
//   border-bottom: 1px solid ${C.borderLine};
// }
// .proj-table thead th {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 11px;
//   letter-spacing: 0.14em;
//   text-transform: uppercase;
//   color: ${C.grayText};
//   padding: 0 0 16px;
//   font-weight: 500;
//   text-align: left;
// }
// .proj-table thead th:last-child { text-align: right; }

// .proj-row {
//   border-bottom: 1px solid ${C.borderLine};
//   cursor: pointer;
//   transition: background 0.2s ease;
// }
// .proj-row td { padding: 24px 0; transition: color 0.2s; }
// .proj-row:hover { background: rgba(255, 255, 255, 0.02); }
// .proj-row:hover .t-title { color: ${C.neonGreen}; }
// .proj-row:hover .t-arrow { transform: translate(4px, -4px); color: ${C.neonGreen}; }

// .t-num {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 12px;
//   color: ${C.grayText};
//   width: 52px;
// }
// .t-title {
//   font-size: 22px;
//   font-weight: 700;
//   color: ${C.pureWhite};
//   transition: color 0.2s;
// }
// .t-tags {
//   font-size: 13px;
//   color: ${C.grayText};
//   font-weight: 400;
//   padding: 0 32px;
// }
// .t-year {
//   font-size: 12px;
//   color: ${C.grayText};
//   font-family: 'JetBrains Mono', monospace;
// }
// .t-arrow {
//   font-size: 18px;
//   color: ${C.pureWhite};
//   text-align: right;
//   display: block;
//   transition: transform 0.2s ease, color 0.2s ease;
// }
// .feat .t-title { color: ${C.orangeAccent}; }

// @media (max-width: 640px) {
//   .t-tags, .t-year { display: none; }
// }

// /* ════════════════════════════════
//    EXPERTISE
// ════════════════════════════════ */
// .exp-grid {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
// }
// @media (max-width: 900px) { .exp-grid { grid-template-columns: 1fr; } }

// .exp-card {
//   background: ${C.cardDark};
//   padding: 40px 36px;
//   border-radius: 16px;
//   position: relative;
//   overflow: hidden;
//   border: 1px solid ${C.borderLine};
//   transition: border-color 0.25s, transform 0.25s;
// }
// .exp-card:hover {
//   border-color: ${C.neonGreen};
//   transform: translateY(-4px);
// }

// .exp-n {
//   font-size: 64px;
//   font-weight: 800;
//   color: rgba(255, 255, 255, 0.05);
//   line-height: 1;
//   margin-bottom: 20px;
//   transition: color 0.25s;
//   user-select: none;
// }
// .exp-card:hover .exp-n { color: ${C.neonGreen}22; }

// .exp-title {
//   font-size: 22px;
//   font-weight: 700;
//   color: ${C.pureWhite};
//   margin-bottom: 5px;
// }
// .exp-sub {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 10px;
//   letter-spacing: 0.1em;
//   color: ${C.neonGreen};
//   text-transform: uppercase;
//   margin-bottom: 18px;
// }
// .exp-body {
//   font-size: 14px;
//   color: ${C.grayText};
//   line-height: 1.7;
// }

// /* ════════════════════════════════
//    ABOUT bento (Matched closely to Framer screenshot layouts)
// ════════════════════════════════ */
// .bento {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 20px;
// }
// @media (max-width: 900px) { .bento { grid-template-columns: 1fr; } }

// .b-card {
//   background: ${C.pureWhite};
//   color: ${C.bg};
//   border-radius: 24px;
//   padding: 40px;
//   position: relative;
//   overflow: hidden;
// }
// /* Left card background decorative dashed paths */
// .b-card.hero-card::before {
//   content: "";
//   position: absolute;
//   top: -20px;
//   left: -20px;
//   width: 140px;
//   height: 140px;
//   border: 2px dashed ${C.orangeAccent};
//   border-radius: 50%;
//   opacity: 0.8;
// }
// .b-card.hero-card::after {
//   content: "";
//   position: absolute;
//   bottom: -30px;
//   right: -30px;
//   width: 180px;
//   height: 180px;
//   border: 2px dashed ${C.orangeAccent};
//   border-radius: 50%;
//   opacity: 0.8;
// }

// .b-card.orange {
//   background: ${C.orangeAccent};
//   color: ${C.pureWhite};
// }
// .b-card.neon {
//   background: ${C.neonGreen};
//   color: ${C.bg};
// }

// .stat-group {
//   display: flex;
//   justify-content: space-between;
//   border-bottom: 1px solid ${C.borderLine};
//   padding-bottom: 32px;
//   margin-bottom: 32px;
// }
// .stat-item {
//   text-align: left;
// }

// .stat-n {
//   font-size: 52px;
//   font-weight: 800;
//   color: ${C.pureWhite};
//   line-height: 1;
// }
// .stat-l {
//   font-size: 11px;
//   text-transform: uppercase;
//   letter-spacing: 0.1em;
//   color: ${C.grayText};
//   margin-top: 8px;
//   font-weight: 600;
// }

// .bio-text {
//   font-size: 16px;
//   color: #333333;
//   line-height: 1.8;
//   font-weight: 500;
//   margin-bottom: 28px;
//   position: relative;
//   z-index: 2;
// }

// /* ── pills ── */
// .pills { display: flex; flex-wrap: wrap; gap: 8px; position: relative; z-index: 2; }
// .pill {
//   padding: 8px 18px;
//   border-radius: 100px;
//   font-size: 13px;
//   font-weight: 600;
//   border: 1px solid #E5E7EB;
//   background: #F3F4F6;
//   color: ${C.bg};
//   transition: all 0.2s ease;
// }
// .pill.h { background: ${C.bg}; color: ${C.pureWhite}; border-color: ${C.bg}; }
// .pill.c { background: ${C.orangeAccent}; color: ${C.pureWhite}; border-color: ${C.orangeAccent}; }

// /* ── card visual text ── */
// .b-card-title {
//   font-size: 28px;
//   font-weight: 800;
//   text-transform: uppercase;
//   line-height: 1.2;
// }
// .b-card-footer {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: auto;
//   padding-top: 40px;
// }
// .b-card-icon {
//   font-size: 24px;
// }
// .b-card-arrow {
//   width: 44px;
//   height: 44px;
//   border-radius: 50%;
//   border: 1.5px solid currentColor;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 18px;
// }

// /* ════════════════════════════════
//    MARQUEE
// ════════════════════════════════ */
// .mq-wrap {
//   overflow: hidden;
//   white-space: nowrap;
//   border-top: 1px solid ${C.borderLine};
//   border-bottom: 1px solid ${C.borderLine};
//   padding: 20px 0;
//   background: ${C.cardDark};
// }
// @keyframes mq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
// .mq-inner { display: inline-block; animation: mq 24s linear infinite; }
// .mq-inner span {
//   display: inline-flex;
//   align-items: center;
//   gap: 12px;
//   margin-right: 48px;
//   font-size: 14px;
//   font-weight: 600;
//   color: ${C.pureWhite};
//   letter-spacing: 0.05em;
// }
// .mq-inner span::before { content: '✦'; font-size: 8px; color: ${C.neonGreen}; }

// /* ════════════════════════════════
//    SKILLS row lists
// ════════════════════════════════ */
// .skill-rows { margin-top: 48px; }

// .skill-row {
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 0 48px;
//   padding: 28px 0;
//   border-bottom: 1px solid ${C.borderLine};
// }
// .skill-row:first-child { border-top: 1px solid ${C.borderLine}; }

// .skill-item {
//   display: inline-flex;
//   align-items: center;
//   gap: 10px;
//   font-size: 15px;
//   font-weight: 500;
//   color: ${C.pureWhite};
// }
// .skill-check {
//   color: ${C.neonGreen};
//   font-size: 14px;
// }

// .skills-big-title {
//   font-weight: 900;
//   font-size: clamp(52px, 10vw, 96px);
//   letter-spacing: -0.04em;
//   text-align: center;
//   color: ${C.pureWhite};
//   line-height: 1;
//   text-transform: uppercase;
// }

// /* ════════════════════════════════
//    EDUCATION / CREDENTIALS
// ════════════════════════════════ */
// .two { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
// @media (max-width: 768px) { .two { grid-template-columns: 1fr; } }

// .i-card {
//   background: ${C.cardDark};
//   border-radius: 16px;
//   padding: 36px;
//   border: 1px solid ${C.borderLine};
// }
// .i-cat {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 11px;
//   letter-spacing: 0.14em;
//   text-transform: uppercase;
//   color: ${C.neonGreen};
//   margin-bottom: 24px;
// }
// .i-item { margin-bottom: 24px; }
// .i-item:last-child { margin-bottom: 0; }
// .i-item h4 { font-size: 16px; font-weight: 700; color: ${C.pureWhite}; margin-bottom: 6px; }
// .i-item p { font-size: 13px; color: ${C.grayText}; line-height: 1.7; }

// /* ════════════════════════════════
//    CONTACT
// ════════════════════════════════ */
// .c-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
//   gap: 12px;
//   margin-top: 44px;
// }
// .c-link {
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   text-decoration: none;
//   padding: 18px 22px;
//   background: ${C.cardDark};
//   border-radius: 12px;
//   border: 1px solid ${C.borderLine};
//   color: ${C.pureWhite};
//   font-size: 13px;
//   font-weight: 600;
//   transition: all 0.22s ease;
// }
// .c-link:hover {
//   background: ${C.neonGreen};
//   color: ${C.bg};
//   border-color: ${C.neonGreen};
//   transform: translateY(-2px);
// }
// .c-link svg { width: 16px; height: 16px; color: ${C.neonGreen}; flex-shrink: 0; transition: color 0.2s; }
// .c-link:hover svg { color: ${C.bg}; }

// /* ════════════════════════════════
//    CTA
// ════════════════════════════════ */
// .cta {
//   background: #0A0A0A;
//   padding: 112px 48px;
//   text-align: center;
//   border-top: 1px solid ${C.borderLine};
// }
// .cta-h {
//   font-size: clamp(40px, 8vw, 72px);
//   font-weight: 900;
//   color: ${C.pureWhite};
//   line-height: 1.1;
//   margin-bottom: 14px;
//   letter-spacing: -0.03em;
// }
// .cta-h em { font-style: normal; color: ${C.neonGreen}; }
// .cta-sub { font-size: 16px; color: ${C.grayText}; margin-bottom: 38px; }
// .cta-btn {
//   display: inline-flex;
//   align-items: center;
//   gap: 10px;
//   padding: 16px 40px;
//   background: ${C.orangeAccent};
//   color: ${C.pureWhite};
//   font-size: 14px;
//   font-weight: 700;
//   border-radius: 100px;
//   text-decoration: none;
//   transition: all 0.25s ease;
//   letter-spacing: 0.04em;
// }
// .cta-btn:hover {
//   background: ${C.neonGreen};
//   color: ${C.bg};
//   transform: translateY(-3px);
// }
// `;

// const projects = [
//   { num: "001", title: "Bloom — UI Kit",          tags: "React · Figma · Storybook",    year: "2025", feat: false },
//   { num: "002", title: "Nova — Analytics Suite",  tags: "Next.js · Prisma · Chart.js",  year: "2025", feat: true  },
//   { num: "003", title: "Petal — 3D Experience",   tags: "Three.js · GSAP · WebGL",      year: "2024", feat: false },
//   { num: "004", title: "Lumen — Design System",   tags: "React · Storybook · CSS",      year: "2024", feat: false },
//   { num: "005", title: "Aura — Portfolio Theme",  tags: "Next.js · Framer Motion",      year: "2024", feat: false },
// ];

// const expertise = [
//   {
//     n: "01",
//     title: "Frontend Dev",
//     sub: "React · Next.js · TypeScript",
//     body: "Pixel-perfect, performant interfaces with fluid motion. Turning intricate design mockups into blazing-fast, robust React applications.",
//   },
//   {
//     n: "02",
//     title: "UI / UX Design",
//     sub: "Figma · Design Systems",
//     body: "From wireframe iterations to comprehensive systems. I design intuitive visual paths where every pixel holds strategic purpose.",
//   },
//   {
//     n: "03",
//     title: "Creative Dev",
//     sub: "GSAP · Three.js · WebGL",
//     body: "3D interactions and scroll-driven experiences. Pushing WebGL to bring highly interactive digital products into focus.",
//   },
// ];

// const skillRows = [
//   ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js"],
//   ["React", "Next.js", "Vue", "Tailwind CSS"],
//   ["Figma", "GSAP", "Three.js", "Git & GitHub", "AWS"],
//   ["Framer Motion", "Prisma", "Storybook", "Blender"],
// ];
// const allSkills = skillRows.flat();
// const mqItems = [...allSkills, ...allSkills];

// export default function WorkAndSkills() {
//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: STYLES }} />
//       <div className="port">

//         {/* ══ WORK SECTION ══ */}
//         <section className="sec">
//           <div className="wrap">
//             <motion.div className="proj-head" {...fadeIn(0)}>
//               <div>
//                 <div className="label">Selected Projects</div>
//                 <h2 className="dh" style={{ fontSize: "clamp(48px, 9vw, 80px)" }}>
//                   Featured<br />
//                   <span className="hl">Creations</span>
//                 </h2>
//               </div>
//               <p className="proj-desc">
//                 An expert-level compilation of functional web structures, design patterns, and responsive client projects.
//               </p>
//             </motion.div>

//             <motion.table className="proj-table" {...fadeIn(0.1)}>
//               <thead>
//                 <tr>
//                   <th style={{ width: 52 }}>#</th>
//                   <th>Project</th>
//                   <th className="t-tags" style={{ paddingLeft: 32 }}>Stack</th>
//                   <th className="t-year">Year</th>
//                   <th style={{ textAlign: "right" }}>↗</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {projects.map((p, i) => (
//                   <motion.tr key={p.num} className={`proj-row${p.feat ? " feat" : ""}`} {...stagger(i, 0.07)}>
//                     <td className="t-num">{p.num}</td>
//                     <td className="t-title">{p.title}</td>
//                     <td className="t-tags">{p.tags}</td>
//                     <td className="t-year">{p.year}</td>
//                     <td><span className="t-arrow">↗</span></td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </motion.table>
//           </div>
//         </section>

//         <div className="div-line" />

//         {/* ══ EXPERTISE SECTION ══ */}
//         {/* <section className="sec">
//           <div className="wrap">
//             <motion.div {...fadeIn(0)} style={{ marginBottom: 48 }}>
//               <div className="label">Services</div>
//               <h2 className="dh" style={{ fontSize: "clamp(40px, 7vw, 64px)" }}>My Expertise</h2>
//             </motion.div>

//             <div className="exp-grid">
//               {expertise.map((e, i) => (
//                 <motion.div key={i} className="exp-card" {...stagger(i, 0.1)}>
//                   <div className="exp-n">{e.n}</div>
//                   <div className="exp-title">{e.title}</div>
//                   <div className="exp-sub">{e.sub}</div>
//                   <p className="exp-body">{e.body}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section> */}

//         <div className="div-line" />

//         {/* ══ ABOUT (BENTO DESIGN) ══ */}
//         <section className="sec">
//           <div className="wrap">
//             <motion.div {...fadeIn(0)} style={{ marginBottom: 44 }}>
//               <div className="label">Intro</div>
//               <h2 className="dh" style={{ fontSize: "clamp(36px, 6vw, 56px)" }}>
//                 The Architect<br />Behind the Code
//               </h2>
//             </motion.div>

//             {/* Bento Grid updated to map to style in the screenshot */}
//             <div className="bento">
//               {/* Left Main White Information Box */}
//               <motion.div className="b-card hero-card" {...fadeIn(0.1)}>
//                 <p className="bio-text">
//                   I'm a Developer and Designer focused on launching functional, interactive, and high-performance user spaces. Designing with sharp grid structures, interactive interfaces, and robust system codebases.
//                 </p>
//                 <div className="pills">
//                   {["React", "Next.js", "TypeScript"].map(s => <span key={s} className="pill h">{s}</span>)}
//                   {["Figma", "GSAP"].map(s => <span key={s} className="pill c">{s}</span>)}
//                   {["Three.js", "Tailwind"].map(s => <span key={s} className="pill">{s}</span>)}
//                 </div>
//               </motion.div>

//               {/* Right Side Stacked Colorful Cards (Matches screenshot grid style) */}
//               <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20 }}>
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
//                   <motion.div className="b-card orange" {...fadeIn(0.15)} style={{ display: "flex", flexDirection: "column", minHeight: "180px" }}>
//                     <div className="b-card-icon">⚡</div>
//                     <div className="b-card-footer">
//                       <div className="b-card-title">Dynamic<br />Motion</div>
//                       <div className="b-card-arrow">↗</div>
//                     </div>
//                   </motion.div>

//                   <motion.div className="b-card neon" {...fadeIn(0.2)} style={{ display: "flex", flexDirection: "column", minHeight: "180px" }}>
//                     <div className="b-card-icon">🎛️</div>
//                     <div className="b-card-footer">
//                       <div className="b-card-title" style={{ fontSize: "20px" }}>Framer<br />React</div>
//                       <div className="b-card-arrow">↗</div>
//                     </div>
//                   </motion.div>
//                 </div>

//                 <motion.div className="i-card" {...fadeIn(0.25)} style={{ padding: "24px 32px" }}>
//                   <div className="stat-group" style={{ marginBottom: "0", borderBottom: "none", paddingBottom: "0" }}>
//                     <div className="stat-item">
//                       <div className="stat-n" style={{ color: C.neonGreen }}>+12</div>
//                       <div className="stat-l">Years of Exp</div>
//                     </div>
//                     <div className="stat-item">
//                       <div className="stat-n" style={{ color: C.pureWhite }}>+46</div>
//                       <div className="stat-l">Completed</div>
//                     </div>
//                     <div className="stat-item">
//                       <div className="stat-n" style={{ color: C.orangeAccent }}>+20</div>
//                       <div className="stat-l">Global Clients</div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ══ MARQUEE ══ */}
//         {/* <div className="mq-wrap">
//           <div className="mq-inner">
//             {mqItems.map((s, i) => <span key={i}>{s}</span>)}
//           </div>
//         </div> */}

//         <div className="div-line" />

//         {/* ══ FULL SKILLS ══ */}
//         <section className="sec">
//           <div className="wrap">
//             <motion.div {...fadeIn(0)} style={{ textAlign: "center", marginBottom: 0 }}>
//               <div className="label" style={{ justifyContent: "center" }}>Capabilities</div>
//               <h2 className="skills-big-title">SKILLS</h2>
//             </motion.div>

//             <div className="skill-rows">
//               {skillRows.map((row, ri) => (
//                 <motion.div
//                   key={ri}
//                   className="skill-row"
//                   initial={{ opacity: 0, y: 16 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: ri * 0.1 }}
//                 >
//                   {row.map((skill) => (
//                     <span key={skill} className="skill-item">
//                       <span className="skill-check">✓</span>
//                       {skill}
//                     </span>
//                   ))}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <div className="div-line" />

//         {/* ══ EDUCATION & CREDENTIALS ══ */}
//         <section className="sec">
//           <div className="wrap">
//             <motion.div {...fadeIn(0)} style={{ marginBottom: 44 }}>
//               <div className="label">Milestones</div>
//               <h2 className="dh" style={{ fontSize: "clamp(36px, 6vw, 56px)" }}>
//                 Background &<br />Credentials
//               </h2>
//             </motion.div>

//             <div className="two">
//               <motion.div className="i-card" {...fadeIn(0.1)}>
//                 <div className="i-cat">Education</div>
//                 <div className="i-item">
//                   <h4>BSc in Computer Science</h4>
//                   <p>In Progress · Core System Structures</p>
//                 </div>
//                 <div className="i-item">
//                   <h4>Interactive Creative Engineering</h4>
//                   <p>Interactive interfaces, web graphics, scalable layout structures, and UI system architecture.</p>
//                 </div>
//               </motion.div>

//               <motion.div className="i-card" {...fadeIn(0.15)}>
//                 <div className="i-cat">Experience / Marks</div>
//                 <div className="i-item">
//                   <h4>MERN & Next.js Stack Developer</h4>
//                   <p>Enterprise layout and full-stack API integration</p>
//                 </div>
//                 <div className="i-item">
//                   <h4>UX Specialist</h4>
//                   <p>High-fidelity interaction models & graphic system structures</p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         <div className="div-line" />

//         {/* ══ CONTACT SECTION ══ */}
//         <section className="sec">
//           <div className="wrap">
//             <motion.div {...fadeIn(0)}>
//               <div className="label">Contact</div>
//               <h2 className="dh" style={{ fontSize: "clamp(36px, 6vw, 56px)" }}>
//                 Start a New<br />
//                 <span className="hl">Collaboration</span>
//               </h2>
//             </motion.div>

//             <motion.p {...fadeIn(0.1)} style={{ fontSize: 15, color: C.grayText, marginTop: 20, fontWeight: 400, maxWidth: 440, lineHeight: 1.8 }}>
//               Have an idea, project blueprint, or full system model you want to develop? Drop a message to start working together.
//             </motion.p>

//             <motion.div className="c-grid" {...fadeIn(0.15)}>
//               {[
//                 { href: "mailto:hello@yourmail.com", label: "hello@yourmail.com", icon: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
//                 { href: "#", label: "github.com/yourusername", icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /> },
//                 { href: "#", label: "linkedin.com/in/yourname", icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></> },
//                 { href: "#", label: "dribbble.com/yourname", icon: <><circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></> },
//               ].map((l, i) => (
//                 <a key={i} href={l.href} className="c-link">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{l.icon}</svg>
//                   {l.label}
//                 </a>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* ══ FINAL CTA ══ */}
//         <motion.div className="cta" {...fadeIn(0)}>
//           <p className="cta-h">Have a project<br /><em>in mind?</em></p>
//           <p className="cta-sub">Let's build reliable, fluid web systems.</p>
//           <a href="mailto:hello@yourmail.com" className="cta-btn">Start a Conversation →</a>
//         </motion.div>

//       </div>
//     </>
//   );
// }





































































"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Project from "./project";
import Contact from "../contact/Contact";
import About from "../about/About";
import Skills from "./Skills";

// ── COLOR PALETTE ──
const C = {
  bg: "#121212",
  cardDark: "#1E1E1E",
  pureWhite: "#FFFFFF",
  neonGreen: "#269add",
  orangeAccent: "#A4BE2A",
  grayText: "#9CA3AF",
  borderLine: "#2E2E2E",
};

const STYLES = `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ── SCROLLBAR CONFIG ── */
html, body {
  background: ${C.bg};
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none;
}

.port {
  background: ${C.bg};
  color: ${C.pureWhite};
  font-family: 'Plus Jakarta Sans', sans-serif;
  width: 100%;
  position: relative;
  overflow: visible; 
}

.wrap { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
@media (max-width: 768px) { .wrap { padding: 0 24px; } }
.sec { padding: 96px 0; }

.div-line { width: 100%; height: 1px; background: ${C.borderLine}; }

.labelG {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${C.orangeAccent};
  margin-bottom: 18px;
}
.labelG::before { content: ''; width: 16px; height: 2px; background: ${C.orangeAccent}; }

.dh { font-weight: 800; line-height: 1.1; letter-spacing: -0.03em; color: ${C.pureWhite}; }

/* ── EDU / CREDENTIALS ── */
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
@media (max-width: 768px) { .two { grid-template-columns: 1fr; } }

.i-card, .i2-card {
  background: ${C.cardDark};
  border-radius: 16px;
  padding: 36px;
  border: 1px solid ${C.borderLine};
}
  
.edu-card { display: flex; flex-direction: column; justify-content: flex-start; align-self: end; padding-top: 24px; }
.i-cat {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${C.orangeAccent};
  margin-bottom: 24px;
}
.i-item { margin-bottom: 24px; }
.i-item:last-child { margin-bottom: 0; }
.i-item h4 { font-size: 16px; font-weight: 700; color: ${C.pureWhite}; margin-bottom: 6px; }
.i-item p { font-size: 13px; color: ${C.grayText}; line-height: 1.7; }

.cert-card { position: relative; overflow: visible; }
.cert-list { display: flex; flex-direction: column; gap: 18px; }
.cert-link {
  width: fit-content;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.45;
  color: ${C.pureWhite};
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.28);
  text-underline-offset: 7px;
  transition: color 0.2s ease, text-decoration-color 0.2s ease;
  cursor: pointer;
}
.cert-link:hover { color: ${C.orangeAccent}; text-decoration-color: ${C.orangeAccent}; }

.cert-preview-window {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 150px;
  aspect-ratio: 16 / 10;
  border-radius: 3px;
  overflow: hidden;
  pointer-events: none;
  z-index: 12;
  opacity: 0;
  transform: scale(0.88);
  transition: opacity 0.25s ease, transform 0.25s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45), 0 0 0 1px ${C.borderLine};
  background: ${C.bg};
}
.cert-preview-window.active { opacity: 1; transform: scale(1); }
.cert-preview-img-wrap { position: relative; width: 100%; height: 100%; }
.cert-preview-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.cert-preview-img.visible { opacity: 1; }
@media (hover: none) { .cert-preview-window { display: none !important; } }

.port.loading { opacity: 0; transform: translateY(10px); }
.port.loaded { opacity: 1; transform: translateY(0); transition: opacity 0.3s ease-out, transform 0.3s ease-out; }
`;

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const groupReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const itemReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const certifications = [
  {
    title: "Master React, Redux and Next.js: The Practical Course",
    image: "/background/React_Redux_Next.png",
    href: "https://www.udemy.com/certificate/UC-41f271c8-55fc-433e-bce3-66eec79a66a0/",
  },
  {
    title: "UIUX with Figma and Adobe XD",
    image: "/background/Figma_Adobe.png",
    href: "https://www.udemy.com/certificate/UC-ff0a8bc8-4350-48bd-8b64-6685beff9de2/",
  },
  {
    title: "Build 20 JavaScript Projects in 20 Day with HTML, CSS & JS",
    image: "/background/HTML_CSS_JS.png",
    href: "https://www.udemy.com/certificate/UC-d163a9a4-baf4-4b6e-b31a-99ee471fa2c7/",
  },
];

export default function WorkAndSkills({ onSelectProject }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCertificateTitle, setActiveCertificateTitle] = useState(null);
  const [isCertificateHovered, setIsCertificateHovered] = useState(false);
  const certCardRef = useRef(null);
  const certPreviewRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleCertificateMouseMove = (e) => {
    if (!certCardRef.current || !certPreviewRef.current) return;
    const rect = certCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    certPreviewRef.current.style.left = `${Math.min(x + 24, rect.width - 190)}px`;
    certPreviewRef.current.style.top = `${Math.max(y - 150, 12)}px`;
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className={`port ${isLoaded ? "loaded" : "loading"}`}>

        {/* WORK SECTION */}
        <Project onSelectProject={onSelectProject} />
         <div className="div-line" />
        <Skills />
        <div className="div-line" />
        < About />
        <div className="div-line" />
        
        {/* EDU & CREDENTIALS */}
        <motion.section
          className="sec"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div className="wrap " variants={groupReveal}>
            <motion.div style={{ marginBottom: 44 }} variants={itemReveal}>
              <div className="labelG">My Journey</div>
              <h2 className="dh" style={{ fontSize: "clamp(61px, 6vw, 56px)" }}>
                A Bit of Story &<br />
                {"What I've Learned"}
              </h2>
            </motion.div>

            <motion.div className="two" variants={groupReveal}>
              <motion.div
                className="i-card cert-card"
                variants={itemReveal}
                ref={certCardRef}
                onMouseMove={handleCertificateMouseMove}
                onMouseLeave={() => setIsCertificateHovered(false)}
              >
                <motion.div
                  className={`cert-preview-window ${isCertificateHovered ? "active" : ""}`}
                  ref={certPreviewRef}
                  animate={{
                    opacity: isCertificateHovered ? 1 : 0,
                    scale: isCertificateHovered ? 1 : 0.92,
                    rotate: isCertificateHovered ? 0 : -2,
                  }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="cert-preview-img-wrap">
                    {certifications.map((cert) => (
                      <img
                        key={cert.title}
                        src={cert.image}
                        alt={`${cert.title} preview`}
                        className={`cert-preview-img ${activeCertificateTitle === cert.title ? "visible" : ""}`}
                      />
                    ))}
                  </div>
                </motion.div>

                <div className="i-cat">Certifications</div>
                <div className="i-item">
                  <div className="cert-list">
                    {certifications.map((cert) => (
                      <a
                        key={cert.title}
                        className="cert-link"
                        href={cert.href}
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => {
                          setActiveCertificateTitle(cert.title);
                          setIsCertificateHovered(true);
                        }}
                      >
                        {cert.title}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div className="i2-card edu-card" variants={itemReveal}>
                <div className="i-cat">Education</div>
                <div className="i-item">
                  <h4>BSc in Computer Science and Engineering</h4>
                  <p style={{ fontSize: '13px', opacity: 0.85, marginBottom: '2px' }}>
                    Shaikh Burhanuddin Post Graduate College
                  </p>
                  <p>Aug 2025 — Present · Expected Graduation: 2029</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        <div className="div-line" />

        {/* CONTACT SECTION */}
        <Contact />
      </div>
    </>
  );
}