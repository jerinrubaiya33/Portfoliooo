"use client";
import React from "react";
import { motion } from "framer-motion";

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
.about-sec { padding: 96px 0; background: ${C.bg}; color: ${C.pureWhite}; font-family: 'Plus Jakarta Sans', sans-serif; }
.about-wrap { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
@media (max-width: 768px) { .about-wrap { padding: 0 24px; } }

.about-label {
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
.about-label::before {
  content: '';
  width: 16px;
  height: 2px;
  background: ${C.neonGreen};
}

.about-dh {
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${C.pureWhite};
}

.bento {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 900px) { .bento { grid-template-columns: 1fr; } }

.b-card {
  background: ${C.pureWhite};
  color: ${C.bg};
  border-radius: 24px;
  padding: 40px;
  position: relative;
  overflow: hidden;
}
.b-card.hero-card::before {
  content: "";
  position: absolute;
  top: -20px;
  left: -20px;
  width: 140px;
  height: 140px;
  border: 2px dashed ${C.orangeAccent};
  border-radius: 50%;
  opacity: 0.8;
}
.b-card.hero-card::after {
  content: "";
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 180px;
  height: 180px;
  border: 2px dashed ${C.orangeAccent};
  border-radius: 50%;
  opacity: 0.8;
}

.b-card.orange { background: ${C.orangeAccent}; color: ${C.pureWhite}; }
.b-card.neon { background: ${C.neonGreen}; color: ${C.bg}; }

.b-card-title {
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1.2;
}

.bio-text {
  font-size: 16px;
  color: #333333;
  line-height: 1.8;
  font-weight: 500;
  margin-bottom: 28px;
  position: relative;
  z-index: 2;
}

.pills { display: flex; flex-wrap: wrap; gap: 8px; position: relative; z-index: 2; }
.pill {
  padding: 8px 18px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid #E5E7EB;
  background: #F3F4F6;
  color: ${C.bg};
  transition: all 0.2s ease;
}
.pill.h { background: ${C.bg}; color: ${C.pureWhite}; border-color: ${C.bg}; }
.pill.c { background: ${C.orangeAccent}; color: ${C.pureWhite}; border-color: ${C.orangeAccent}; }

.i-card {
  background: ${C.cardDark};
  border-radius: 16px;
  padding: 36px;
  border: 1px solid ${C.borderLine};
}

.stat-group {
  display: flex;
  justify-content: space-between;
}
.stat-item { text-align: left; }
.stat-n { font-size: 52px; font-weight: 800; line-height: 1; }
.stat-l {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${C.grayText};
  margin-top: 8px;
  font-weight: 600;
}
`;

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

export default function About() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <motion.section
        id="about"
        className="about-sec"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div className="about-wrap" variants={groupReveal}>
          <motion.div style={{ marginBottom: 44 }} variants={itemReveal}>
            <div className="about-label">Who I Am</div>
            <h2 className="about-dh" style={{ fontSize: "clamp(36px, 6vw, 56px)" }}>
              A Little About Me
            </h2>
          </motion.div>

          <motion.div className="bento" variants={groupReveal}>
            <motion.div className="b-card hero-card" variants={itemReveal}>
              <p className="bio-text">
                I’m someone who pays attention to both functionality and user experience, working with the MERN stack, Next.js, and Three.js to build fast, responsive, and visually engaging applications. I enjoy creating immersive 3D experiences and building secure backend systems, always aiming to create products that are simple and impactful. I’m always ready to learn new technologies that help me grow as a developer.
              </p>
              <div className="pills">
                {["React", "Next.js", "TypeScript"].map((s) => (
                  <span key={s} className="pill h">
                    {s}
                  </span>
                ))}
                {["Figma", "GSAP"].map((s) => (
                  <span key={s} className="pill c">
                    {s}
                  </span>
                ))}
                {["Three.js", "Tailwind"].map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20 }}
              variants={itemReveal}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {/* CARD 1: DEVELOPMENT */}
                <motion.div
                  className="b-card orange"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    height: "100%",
                    minHeight: "190px",
                    padding: "36px",
                  }}
                  variants={itemReveal}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: C.pureWhite,
                        opacity: 0.8,
                        fontWeight: 700,
                        marginBottom: "8px",
                      }}
                    >
                      Development
                    </div>
                    <div
                      className="b-card-title"
                      style={{
                        fontSize: "28px",
                        lineHeight: "1.15",
                        fontWeight: "800",
                        color: C.pureWhite,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      Full-Stack
                      <br />
                      Developer
                    </div>
                  </div>
                </motion.div>

                {/* CARD 2: CREATIVE SIDE */}
                <motion.div
                  className="b-card neon"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    height: "100%",
                    minHeight: "190px",
                    padding: "36px",
                  }}
                  variants={itemReveal}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: C.bg,
                        opacity: 0.75,
                        fontWeight: 700,
                        marginBottom: "8px",
                      }}
                    >
                      Creative Side
                    </div>
                    <div
                      className="b-card-title"
                      style={{
                        fontSize: "28px",
                        lineHeight: "1.15",
                        fontWeight: "800",
                        color: C.bg,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      3D Visuals
                      <br />
                      & Smooth UI
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* STATS TRACKER */}
              <motion.div
                className="i-card"
                style={{
                  padding: "56px 32px 36px",
                  background: C.cardDark,
                  border: `1px solid ${C.borderLine}`,
                }}
                variants={itemReveal}
              >
                <div
                  className="stat-group"
                  style={{
                    marginBottom: 0,
                    borderBottom: "none",
                    paddingBottom: 0,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "16px",
                    textAlign: "center",
                  }}
                >
                  {/* EXPRESS */}
                  <div className="stat-item" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
                    <div className="stat-n" style={{ color: C.neonGreen, fontSize: "32px", fontWeight: "800", letterSpacing: "-0.02em" }}>Express</div>
                    <div className="stat-l" style={{ marginTop: "10px", fontSize: "10px", letterSpacing: "0.08em" }}>Backend Logic</div>
                  </div>

                  {/* REACT */}
                  <div className="stat-item" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
                    <div className="stat-n" style={{ color: C.pureWhite, fontSize: "32px", fontWeight: "800", letterSpacing: "-0.02em" }}>React</div>
                    <div className="stat-l" style={{ marginTop: "10px", fontSize: "10px", letterSpacing: "0.08em" }}>Interactive UI</div>
                  </div>

                  {/* MONGO */}
                  <div className="stat-item" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
                    <div className="stat-n" style={{ color: C.orangeAccent, fontSize: "32px", fontWeight: "800", letterSpacing: "-0.02em" }}>MongoDB</div>
                    <div className="stat-l" style={{ marginTop: "10px", fontSize: "10px", letterSpacing: "0.08em" }}>Database Design</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
