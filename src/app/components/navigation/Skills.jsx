"use client";
import React from "react";
import { motion } from "framer-motion";

// ── COLOR PALETTE ──
const C = {
  bg: "#121212",
  pureWhite: "#FFFFFF",
  neonGreen: "#269add", // blue  269add
  orangeAccent: "#A4BE2A",
  borderLine: "#2E2E2E",
};

const STYLES = `
.skills-sec { 
  padding: 96px 0; 
  background: ${C.bg}; 
  /* ── EXTRA THICK BLUE BORDER WITH NO RADIUS/MARGIN ── */
  // border: 90px solid ${C.orangeAccent};
  border-radius: 0px;
  margin: 0px;
}
.skills-wrap { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
@media (max-width: 768px) { .skills-wrap { padding: 0 24px; } }

.skills-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${C.neonGreen};
  margin-bottom: 18px;
  width: 100%;
}
.skills-label::before {
  content: '';
  width: 16px;
  height: 2px;
  background: ${C.neonGreen};
}

.skills-big-title {
  font-weight: 900;
  font-size: clamp(52px, 10vw, 96px);
  letter-spacing: -0.04em;
  text-align: center;
  color: ${C.pureWhite};
  line-height: 1;
  text-transform: uppercase;
}

.skill-rows { margin-top: 48px; }

.skill-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 48px;
  padding: 28px 0;
  border-bottom: 1px solid ${C.borderLine};
}
.skill-row:first-child { border-top: 1px solid ${C.borderLine}; }

.skill-item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 500;
  color: ${C.pureWhite};
}
.skill-check {
  color: ${C.neonGreen};
  font-size: 14px;
}

/* ── MOBILE RESPONSIVE OPTIMIZATIONS ── */
@media (max-width: 640px) {
  .skills-sec {
    padding: 64px 0;
  }

  .skill-rows {
    margin-top: 32px;
  }

  /* Transform rows into a clean, balanced 3-column grid structure */
  .skill-row {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px 12px;
    padding: 20px 0;
  }

  .skill-item {
    font-size: 11.5px; /* Scaled down slightly to fit 3 columns perfectly on narrow screens */
    gap: 6px; /* Tighten checkmark gap slightly for ultra-clean fit */
    justify-content: flex-start; 
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .skill-check {
    font-size: 11px;
  }
}
`;

const skillRows = [
  // Row 1: Front-End
  ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Three.js", "Tailwind CSS", "GSAP"],

  // Row 2: Back-End
  ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs", "JWT Authentication", "bcrypt"],

  // Row 3: Deployment, Automation
  ["GitHub", "Postman", "Cloudinary", "API Integration", "Responsive Web Design", "CI/CD Pipelines"]
];

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const groupReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <motion.section
        id="skills"
        className="skills-sec"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div className="skills-wrap" variants={groupReveal}>
          <motion.div style={{ textAlign: "center", marginBottom: 0 }} variants={itemReveal}>
            <div className="skills-label">Capabilities</div>
            <h2 className="skills-big-title">SKILLS</h2>
          </motion.div>

          <motion.div className="skill-rows" variants={groupReveal}>
            {skillRows.map((row, ri) => (
              <motion.div key={ri} className="skill-row" variants={itemReveal}>
                {row.map((skill) => (
                  <span key={skill} className="skill-item">
                    <span className="skill-check">✓</span>
                    {skill}
                  </span>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}