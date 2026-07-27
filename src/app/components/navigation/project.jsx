"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ProjectDetail from "./ProjectDetail";
// import ProjectDetail from "./ProjectDetail"; 

// ── COLOR PALETTE ──
const C = {
  bg: "#121212",
  pureWhite: "#FFFFFF",
  neonGreen: "#269add",
  orangeAccent: "#A4BE2A",
  grayText: "#9CA3AF",
  borderLine: "#2E2E2E",
};

const STYLES = `
.wrap { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
@media (max-width: 768px) { .wrap { padding: 0 24px; } }
.sec { padding: 96px 0; }

.label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${C.neonGreen};
  margin-bottom: 18px;
}
.label::before {
  content: '';
  width: 16px;
  height: 2px;
  background: ${C.neonGreen};
}

.dh {
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${C.pureWhite};
}

.hl { color: ${C.neonGreen}; }

.proj-container { position: relative; }

.proj-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 56px;
}
.proj-desc {
  max-width: 320px;
  font-size: 14px;
  color: ${C.grayText};
  line-height: 1.75;
  font-weight: 400;
}

.proj-table { width: 100%; border-collapse: collapse; position: relative; z-index: 2; }

.proj-table thead tr { border-bottom: 1px solid ${C.borderLine}; }
.proj-table thead th {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${C.grayText};
  padding: 0 0 16px;
  font-weight: 500;
  text-align: left;
}
.proj-table thead th:last-child { text-align: right; }

.proj-row {
  border-bottom: 1px solid ${C.borderLine};
  cursor: pointer;
  transition: background 0.2s ease;
}
.proj-row td { padding: 24px 0; transition: color 0.2s; }
.proj-row:hover { background: rgba(255, 255, 255, 0.02); }
.proj-row:hover .t-title { color: ${C.neonGreen}; }
.proj-row:hover .t-arrow { transform: translate(4px, -4px); color: ${C.neonGreen}; }

.t-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: ${C.grayText};
  width: 52px;
}
.t-title {
  font-size: 22px;
  font-weight: 700;
  color: ${C.pureWhite};
  transition: color 0.2s;
}
.t-tags {
  font-size: 13px;
  color: ${C.grayText};
  font-weight: 400;
  padding: 0 32px;
}
.t-year {
  font-size: 12px;
  color: ${C.grayText};
  font-family: 'JetBrains Mono', monospace;
}
.t-arrow {
  font-size: 18px;
  color: ${C.pureWhite};
  text-align: right;
  display: block;
  transition: transform 0.2s ease, color 0.2s ease;
}
.feat .t-title { color: ${C.orangeAccent}; }

@media (max-width: 640px) {
  .t-tags, .t-year { display: none; }
}

.hover-preview-window {
  position: absolute;
  width: 200px;
  height: 120px;
  border-radius: 2px;
  overflow: hidden;
  pointer-events: none;
  z-index: 10;
  opacity: 0;
  transform: scale(0.85);
  transition: opacity 0.25s ease, transform 0.25s ease;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px ${C.borderLine};
  background: ${C.bg};
}
.hover-preview-window.active { opacity: 1; transform: scale(1); }

.preview-img-wrapper { position: relative; width: 100%; height: 100%; }

.preview-img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.preview-img.visible { opacity: 1; }

@media (hover: none) { .hover-preview-window { display: none !important; } }
`;

const projects = [
  { num: "001", title: "EduNest — LMS Platform",        tags: "Next.js · Node.js · MongoDB",    year: "2026", feat: false, image: "/background/EduNest.jpg?v=001" },
  { num: "002", title: "Zephyra — E-Commerce Platform",  tags: "React · Express.js · Cloudinary", year: "2026", feat: true,  image: "/background/Zephyra.png?v=002" },
  { num: "003", title: "Muslima — Android App",          tags: "Flutter · Dart · Android SDK",    year: "2025", feat: false, image: "/background/Muslima.png?v=003" },
  { num: "004", title: "Stick Game",                     tags: "HTML · CSS · JavaScript",         year: "2025", feat: false, image: "/background/Stick.png?v=004" },
  { num: "005", title: "Balloon Pop_Up Game",            tags: "HTML · CSS · JavaScript",         year: "2025", feat: false, image: "/background/Balloon.png?v=005" },
];

const headerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const tableVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Project({ onSelectProject }) {
  const [activeImage, setActiveImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [openProject, setOpenProject] = useState(null);
  const containerRef = useRef(null);
  const previewRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current || !previewRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    previewRef.current.style.left = `${x + 25}px`;
    previewRef.current.style.top  = `${y - 100}px`;
  };

  // ── RENDER DETAIL PAGE ──
  if (openProject) {
    return (
      <ProjectDetail
        projectNum={openProject}
        onBack={() => setOpenProject(null)}
      />
    );
  }

  // ── RENDER PROJECT LIST ──
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <motion.section
        id="projects"
        className="sec"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="wrap proj-container" ref={containerRef} onMouseMove={handleMouseMove}>

          {/* Floating hover preview */}
          <motion.div
            className={`hover-preview-window ${isHovered ? "active" : ""}`}
            ref={previewRef}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.92,
              rotate: isHovered ? 0 : -2,
            }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="preview-img-wrapper">
              {projects.map((p) => (
                <img
                  key={p.num}
                  src={p.image}
                  alt={`${p.title} Preview`}
                  className={`preview-img ${activeImage === p.image ? "visible" : ""}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div className="proj-head" variants={headerVariants}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="label"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                Selected Projects
              </motion.div>
              <h2 className="dh" style={{ fontSize: "clamp(48px, 9vw, 80px)" }}>
                Things<br />
                <span className="hl">{"I've Built"}</span>
              </h2>
            </motion.div>
            <motion.p
              className="proj-desc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              An expert-level compilation of functional web structures, design patterns, and responsive client projects.
            </motion.p>
          </motion.div>

          <motion.table className="proj-table" variants={tableVariants}>
            <thead>
              <tr>
                <th style={{ width: 52 }}>#</th>
                <th>Project</th>
                <th className="t-tags" style={{ paddingLeft: 32 }}>Stack</th>
                <th className="t-year">Year</th>
                <th style={{ textAlign: "right" }}>↗</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <motion.tr
                  key={p.num}
                  className={`proj-row${p.feat ? " feat" : ""}`}
                  variants={rowVariants}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  onClick={() => {
                    if (onSelectProject) {
                      onSelectProject(p.num);
                      return;
                    }

                    setOpenProject(p.num);
                  }}
                  onMouseEnter={() => { setActiveImage(p.image); setIsHovered(true); }}
                  onMouseLeave={() => { setIsHovered(false); }}
                >
                  <td className="t-num">{p.num}</td>
                  <td className="t-title">{p.title}</td>
                  <td className="t-tags">{p.tags}</td>
                  <td className="t-year">{p.year}</td>
                  <td><span className="t-arrow">↗</span></td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>

        </div>
      </motion.section>
    </>
  );
}