"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CustomCursor from "../CustomCursor";

// ── COLOR PALETTE (matches Project.jsx) ──
const C = {
  bg: "#121212",
  pureWhite: "#FFFFFF",
  neonGreen: "#269add",
  orangeAccent: "#A4BE2A",
  grayText: "#9CA3AF",
  borderLine: "#2E2E2E",
};

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: ${C.bg};
    color: ${C.pureWhite};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    min-height: 100vh;
  }

  .wrap { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
  @media (max-width: 768px) { .wrap { padding: 0 24px; } }

  /* ── BACK BUTTON ── */
  .back-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${C.grayText};
    background: none;
    border: none;
    cursor: pointer;
    padding: 48px 0 0;
    transition: color 0.2s;
  }
  .back-btn:hover { color: ${C.neonGreen}; }
  .back-btn .arrow { transition: transform 0.2s; }
  .back-btn:hover .arrow { transform: translateX(-4px); }

  /* ── HERO HEADER ── */
  .detail-hero {
    padding: 48px 0 64px;
    border-bottom: 1px solid ${C.borderLine};
  }
  .detail-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }
  .detail-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: ${C.grayText};
  }
  .detail-badge {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${C.orangeAccent};
    border: 1px solid ${C.orangeAccent}44;
    padding: 3px 10px;
    border-radius: 2px;
  }
  .detail-title {
    font-size: clamp(42px, 8vw, 70px);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: ${C.pureWhite};
    margin-bottom: 32px;
  }
  .detail-title .hl { color: ${C.neonGreen}; }

  .detail-info-row {
    display: flex;
    gap: 48px;
    flex-wrap: wrap;
  }
  .detail-info-item {}
  .detail-info-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${C.grayText};
    margin-bottom: 6px;
  }
  .detail-info-value {
    font-size: 14px;
    color: ${C.pureWhite};
    font-weight: 500;
  }

  /* ── MAIN LAYOUT ── */
  .detail-body {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 64px;
    padding: 64px 0;
    align-items: start;
  }
  @media (max-width: 960px) {
    .detail-body { grid-template-columns: 1fr; gap: 48px; }
  }

  /* ── SCREENSHOT GALLERY ── */
  .gallery {}
  .gallery-main {
    position: relative;
    width: 100%;
    aspect-ratio: 16/10;
    background: #1a1a1a;
    border: 1px solid ${C.borderLine};
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 16px;
  }
  .gallery-main img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 0.3s ease;
  }
  .gallery-main-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: ${C.grayText};
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.1em;
  }
  .gallery-main-placeholder .icon {
    font-size: 32px;
    opacity: 0.3;
  }

  /* Browser chrome bar on screenshot */
  .browser-bar {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 32px;
    background: #1e1e1e;
    border-bottom: 1px solid ${C.borderLine};
    display: flex;
    align-items: center;
    padding: 0 14px;
    gap: 7px;
    z-index: 2;
  }
  .browser-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .browser-img-wrap {
    position: absolute;
    top: 32px; left: 0; right: 0; bottom: 0;
    overflow: hidden;
  }
  .browser-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  /* Thumbnail strip */
  .gallery-thumbs {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }
  .gallery-thumb {
    width: 80px;
    height: 52px;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid transparent;
    transition: border-color 0.2s, opacity 0.2s;
    opacity: 0.5;
    background: #1a1a1a;
  }
  .gallery-thumb:hover { opacity: 0.8; }
  .gallery-thumb.active { border-color: ${C.neonGreen}; opacity: 1; }
  .gallery-thumb img { width: 100%; height: 100%; object-fit: cover; }
  .gallery-thumb-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    opacity: 0.3;
  }

  /* ── SIDEBAR ── */
  .detail-sidebar {}

  .sidebar-section {
    margin-bottom: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid ${C.borderLine};
  }
  .sidebar-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .sidebar-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${C.neonGreen};
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .sidebar-label::before {
    content: '';
    width: 12px;
    height: 1px;
    background: ${C.neonGreen};
  }

  /* Description */
  .sidebar-desc {
    font-size: 16px;
    line-height: 1.6;
    color: ${C.grayText};
  }

  /* Stack tags */
  .stack-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .stack-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    color: ${C.pureWhite};
    background: rgba(255,255,255,0.05);
    border: 1px solid ${C.borderLine};
    padding: 5px 12px;
    border-radius: 2px;
    transition: border-color 0.2s, color 0.2s;
  }
  .stack-tag:hover {
    border-color: ${C.neonGreen}55;
    color: ${C.neonGreen};
  }

  /* CTA Buttons Under Image */
  .cta-btns {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-top: 24px;
  }
  .cta-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease;
    border: none;
  }
  .cta-btn-primary {
    background: ${C.orangeAccent};
    color: ${C.bg};
  }
  .cta-btn-primary:hover {
    background: #3ab5f5;
    transform: translateY(-1px);
  }
  .cta-btn-secondary {
    background: transparent;
    color: ${C.pureWhite};
    border: 1px solid ${C.borderLine};
  }
  .cta-btn-secondary:hover {
    border-color: ${C.pureWhite}44;
    background: rgba(255,255,255,0.04);
    transform: translateY(-1px);
  }
  .cta-btn-icon { font-size: 16px; }

  @media (max-width: 600px) {
    .cta-btns { flex-direction: column; gap: 12px; }
    .detail-hero { padding: 32px 0 48px; }
    .detail-body { padding: 40px 0; gap: 36px; }
    .gallery-thumbs { gap: 8px; }
    .gallery-thumb { width: 68px; height: 46px; }
    .detail-nav { padding: 32px 0; }
  }

  /* ── FEATURES LIST ── */
  .features-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .features-list li {
    font-size: 15px;
    color: ${C.grayText};
    display: flex;
    gap: 10px;
    align-items: flex-start;
    line-height: 1.6;
  }
  .features-list li::before {
    content: '→';
    color: ${C.neonGreen};
    flex-shrink: 0;
    margin-top: 1px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
  }

  /* ── NAVIGATION FOOTER ── */
  .detail-nav {
    border-top: 1px solid ${C.borderLine};
    padding: 48px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
  }
  .nav-project-link {
    display: flex;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    background: none;
    border: none;
    text-align: left;
    padding: 0;
  }
  .nav-project-link.right { text-align: right; align-items: flex-end; }
  .nav-dir {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${C.grayText};
  }
  .nav-title {
    font-size: 18px;
    font-weight: 700;
    color: ${C.pureWhite};
    transition: color 0.2s;
  }
  .nav-project-link:hover .nav-title { color: ${C.neonGreen}; }

  /* ── PAGE TRANSITIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up {
    animation: fadeUp 0.5s ease both;
  }
  .fade-up-1 { animation-delay: 0.05s; }
  .fade-up-2 { animation-delay: 0.12s; }
  .fade-up-3 { animation-delay: 0.2s; }
  .fade-up-4 { animation-delay: 0.28s; }

  /* ── FEATURED DOT ── */
  .feat-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${C.orangeAccent};
    margin-right: 6px;
    vertical-align: middle;
  }
`;

// ── PROJECT DATA ──
const projects = [
  {
    num: "001",
    title: "EduNest",
    subtitle: "LMS Platform",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    year: "2026",
    feat: false,
    image: "/background/EduNest.png?v=001",
    screenshots: [
      "/background/EduNest.png?v=001",
    ],
    description:
      "EduNest is an easy-to-use learning platform that helps students and teachers connect in one place. Teachers can create courses and share video lessons, while students can learn at their own pace, track their progress, and take quizzes in real time — all in a clean and simple interface.",
    features: [
      "Role-based auth for students, instructors",
      "Real-time progress tracking and completion certificates",
      "Integrated quiz engine with auto-grading",
      "Responsive across all device sizes",
    ],
    liveUrl: "https://edu-nest-frontend.vercel.app/",
    githubUrl: "https://github.com/jerinrubaiya33/EduNest",
  },
  {
    num: "002",
    title: "Zephyra",
    subtitle: "E-Commerce Platform",
    tags: ["React", "Express.js", "Cloudinary", "MongoDB"],
    year: "2026",
    feat: true,
    image: "/background/Zephyra.png?v=002",
    screenshots: [
      "/background/Zephyra.png?v=002",
    ],
    description:
      "Zephyra is online shopping website made to give users a smooth and easy shopping experience. People can quickly find products, view clear images, save items in their cart, and place orders without hassle — all in a simple and clean design.",
    features: [
      "Easy product browsing with smart search and filters",
      "Cloudinary CDN for adaptive image delivery",
      "Cart that saves your items automatically",
      "Secure checkout with order tracking dashboard",
      "Safe checkout with order tracking",
    ],
    liveUrl: "https://github.com/jerinrubaiya33/Zephyra",
    githubUrl: "https://zephyra-frontend.vercel.app/",
  },
  {
    num: "003",
    title: "Muslima",
    subtitle: "Android App",
    tags: ["Flutter", "Dart", "Android SDK", "REST API"],
    year: "2025",
    feat: false,
    image: "/background/Muslima.png?v=003",
    screenshots: [
      "/background/Muslima.png?v=003",
    ],
    description:
      "Muslima is an offline Islamic reading app where users can access and read Islamic books anytime without needing WiFi or mobile data. It’s built with simple design using Flutter.",
    features: [
      "Works smoothly even offline or with weak internet",
    ],
    liveUrl: "https://github.com/jerinrubaiya33/Android_App",
    githubUrl: "https://github.com/jerinrubaiya33/Android_App",
  },
  {
    num: "004",
    title: "Stick Game",
    subtitle: "Browser Game",
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    feat: false,
    image: "/background/Stick.png?v=004",
    screenshots: [
      "/background/Stick.png?v=004",
    ],
    description:
      "A physics-based browser game where you grow a stick to cross between platforms. You need good timing and control — if the stick is too short or too long, you fall. It’s built using plain JavaScript, with no frameworks or extra libraries.",
    features: [
      "Smooth canvas-based animation loop",
      "Randomly generated gaps between platforms",
      "Score system that rewards perfect streaks",
      "Particle effects on perfect landings",
      "Works with both touch (mobile) and click (desktop) controls",
    ],
    liveUrl: "https://jerinrubaiya33.github.io/Stick-Game/stick.html",
    githubUrl: "https://github.com/jerinrubaiya33/Stick-Game",
  },
  {
    num: "005",
    title: "Balloon Pop_Up",
    subtitle: "Browser Game",
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    feat: false,
    image: "/background/Balloon.png?v=005",
    screenshots: [
      "/background/Balloon.png?v=005",
    ],
    description:
      "An addictive tap/click arcade game featuring colorful balloons rising at varying speeds and sizes. Pop as many as possible before the timer runs out — dynamic difficulty scaling keeps every round fresh.",
    features: [
      "Randomized balloon physics & float speed",
      "The game gets harder the longer you play",
      "High score persistence via localStorage",
      "CSS keyframe animations — zero external deps",
      "Works well on both phones and computers",
    ],
    liveUrl: "https://jerinrubaiya33.github.io/Balloon-PopUp/Balloon.html",
    githubUrl: "https://github.com/jerinrubaiya33/Balloon-PopUp",
  },
];

const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 },
  },
  exit: {
    opacity: 0,
    y: 18,
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function ScreenshotPlaceholder({ label }) {
  return (
    <div className="gallery-main-placeholder">
      <span className="icon">🖼</span>
      <span>{label || "Screenshot"}</span>
    </div>
  );
}

export default function ProjectDetail({ projectNum, onBack }) {
  const [currentNum, setCurrentNum] = useState(projectNum || "001");
  const [activeThumb, setActiveThumb] = useState(0);
  const [imgError, setImgError] = useState({});
  const contentKey = `${currentNum}-${projectNum || "local"}`;

  const project = projects.find((p) => p.num === currentNum) || projects[0];
  const currentIndex = projects.findIndex((p) => p.num === project.num);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useEffect(() => {
    setActiveThumb(0);
    setImgError({});
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [currentNum]);

  useEffect(() => {
    setCurrentNum(projectNum || "001");
  }, [projectNum]);

  const handleImgError = (key) => {
    setImgError((prev) => ({ ...prev, [key]: true }));
  };

  const mainScreenshot = project.screenshots[activeThumb];
  const mainImgFailed = imgError[`main-${activeThumb}`];

  return (
    <>
      <CustomCursor spotlightMultiplier={0.2} />
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div style={{ background: C.bg, minHeight: "100vh" }}>
        <div className="wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={contentKey}
              variants={pageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button
                className="back-btn"
                variants={blockVariants}
                whileHover={{ x: -4 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                onClick={() => onBack ? onBack() : setCurrentNum("001")}
              >
                <span className="arrow">←</span>
                All Projects
              </motion.button>

              <motion.div className="detail-hero" variants={blockVariants}>
                <div className="detail-meta">
                  <span className="detail-num">{project.num}</span>
                  {project.feat && <span className="detail-badge">Featured</span>}
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: C.grayText,
                    letterSpacing: "0.12em",
                  }}>{project.year}</span>
                </div>

                <h1 className="detail-title">
                  {project.title}
                  <br />
                  <span className="hl">— {project.subtitle}</span>
                </h1>

                <div className="detail-info-row">
                  <div className="detail-info-item">
                    <div className="detail-info-label">Stack</div>
                    <div className="detail-info-value">{project.tags.join(" · ")}</div>
                  </div>
                  <div className="detail-info-item">
                    <div className="detail-info-label">Year</div>
                    <div className="detail-info-value">{project.year}</div>
                  </div>
                  <div className="detail-info-item">
                    <div className="detail-info-label">Type</div>
                    <div className="detail-info-value">{project.subtitle}</div>
                  </div>
                </div>
              </motion.div>

              <div className="detail-body">
                {/* LEFT CONTENT COLUMN: Gallery & CTA Actions */}
                <motion.div className="gallery" variants={blockVariants}>
                  <motion.div
                    className="gallery-main"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="browser-bar">
                      <div className="browser-dot" style={{ background: "#269add" }} />
                      <div className="browser-dot" style={{ background: "#A4BE2A" }} />
                      <div className="browser-dot" style={{ background: "#A4BE2A" }} />
                    </div>
                    <div className="browser-img-wrap">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${project.num}-${activeThumb}`}
                          initial={{ opacity: 0, scale: 1.03 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.985 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          style={{ width: "100%", height: "100%" }}
                        >
                          {mainImgFailed ? (
                            <ScreenshotPlaceholder label={`${project.title} Preview`} />
                          ) : (
                            <img
                              src={mainScreenshot}
                              alt={`${project.title} screenshot`}
                              onError={() => handleImgError(`main-${activeThumb}`)}
                            />
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {project.screenshots.length > 1 && (
                    <motion.div className="gallery-thumbs" variants={blockVariants}>
                      {project.screenshots.map((src, i) => (
                        <motion.div
                          key={i}
                          className={`gallery-thumb ${activeThumb === i ? "active" : ""}`}
                          onClick={() => setActiveThumb(i)}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {imgError[`thumb-${i}`] ? (
                            <div className="gallery-thumb-placeholder">🖼</div>
                          ) : (
                            <img
                              src={src}
                              alt={`Screenshot ${i + 1}`}
                              onError={() => handleImgError(`thumb-${i}`)}
                            />
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* Buttons directly below Image/Thumbnails */}
                  <motion.div className="cta-btns" variants={blockVariants}>
                    <motion.a
                      href={project.liveUrl}
                      className="cta-btn cta-btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span>Live Preview</span>
                      <span className="cta-btn-icon">↗</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="cta-btn cta-btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span>View on GitHub</span>
                      <span className="cta-btn-icon" style={{ fontSize: 18 }}>⌥</span>
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* RIGHT SIDEBAR COLUMN: Information details */}
                <motion.div className="detail-sidebar" variants={blockVariants}>
                  <motion.div className="sidebar-section" variants={blockVariants}>
                    <div className="sidebar-label">About</div>
                    <p className="sidebar-desc">{project.description}</p>
                  </motion.div>

                  <motion.div className="sidebar-section" variants={blockVariants}>
                    <div className="sidebar-label">Tech Stack</div>
                    <div className="stack-tags">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="stack-tag"
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div className="sidebar-section" variants={blockVariants}>
                    <div className="sidebar-label">Key Features</div>
                    <ul className="features-list">
                      {project.features.map((f, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.45, delay: 0.15 + i * 0.06 }}
                        >
                          {f}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div className="detail-nav" variants={blockVariants}>
                {prevProject ? (
                  <motion.button
                    className="nav-project-link"
                    onClick={() => setCurrentNum(prevProject.num)}
                    whileHover={{ x: -4 }}
                  >
                    <span className="nav-dir">← Previous</span>
                    <span className="nav-title">{prevProject.title}</span>
                  </motion.button>
                ) : <div />}

                {nextProject ? (
                  <motion.button
                    className="nav-project-link right"
                    onClick={() => setCurrentNum(nextProject.num)}
                    whileHover={{ x: 4 }}
                  >
                    <span className="nav-dir">Next →</span>
                    <span className="nav-title">{nextProject.title}</span>
                  </motion.button>
                ) : <div />}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
































// "use client";

// import React, { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import CustomCursor from "../CustomCursor";

// // ── ELITE EDITORIAL DESIGN SYSTEM WITH BLUE ACCENTS ──
// const C = {
//   bg: "#0B0B0C",           // Deep Obsidian 
//   surface: "#111112",      // Subtle Platinum Surface
//   textPrimary: "#F4F4F6",  // Crisp Off-White
//   textSecondary: "#A1A1AA",// Muted Cool Gray
//   textMuted: "#52525B",    // Deep Platinum Gray
//   accentBlue: "#269add",   // Premium Brand Blue
//   border: "rgba(255, 255, 255, 0.05)",
//   borderActive: "rgba(255, 255, 255, 0.15)",
// };

// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

//   *, *::before, *::after { 
//     box-sizing: border-box; 
//     margin: 0; 
//     padding: 0; 
//   }

//   body {
//     background: ${C.bg};
//     color: ${C.textPrimary};
//     font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//     min-height: 100vh;
//     letter-spacing: -0.01em;
//     -webkit-font-smoothing: antialiased;
//   }

//   .portfolio-wrapper { 
//     max-width: 1300px; 
//     margin: 0 auto; 
//     padding: 0 56px; 
//   }
//   @media (max-width: 768px) { .portfolio-wrapper { padding: 0 24px; } }

//   /* ── MINIMAL TOP NAVIGATION ── */
//   .editorial-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 40px 0;
//     border-bottom: 1px solid ${C.border};
//   }

//   .action-back-btn {
//     display: inline-flex;
//     align-items: center;
//     gap: 8px;
//     font-size: 13px;
//     font-weight: 500;
//     color: ${C.textSecondary};
//     background: none;
//     border: none;
//     cursor: pointer;
//     transition: color 0.25s ease;
//   }
//   .action-back-btn:hover { color: ${C.textPrimary}; }
//   .action-back-btn svg { transition: transform 0.25s ease; }
//   .action-back-btn:hover svg { transform: translateX(-4px); }

//   .header-ticker {
//     font-size: 12px;
//     font-weight: 400;
//     color: ${C.textMuted};
//     letter-spacing: 0.06em;
//     text-transform: uppercase;
//   }

//   /* ── EDITORIAL MASTHEAD ── */
//   .masthead-section {
//     padding: 80px 0 56px;
//   }
  
//   .masthead-eyebrow {
//     font-size: 13px;
//     font-weight: 500;
//     color: ${C.textSecondary};
//     letter-spacing: 0.04em;
//     margin-bottom: 16px;
//     display: block;
//   }

//   .masthead-title-row {
//     display: grid;
//     grid-template-columns: 1.2fr 0.8fr;
//     gap: 48px;
//     align-items: end;
//   }
//   @media (max-width: 960px) {
//     .masthead-title-row { grid-template-columns: 1fr; gap: 24px; }
//   }

//   .main-headline {
//     font-size: clamp(36px, 5.5vw, 64px);
//     font-weight: 600;
//     line-height: 1.1;
//     letter-spacing: -0.03em;
//     color: ${C.textPrimary}; /* Main project title in premium blue */
//   }

//   .headline-summary {
//     font-size: 15px;
//     line-height: 1.6;
//     color: ${C.textSecondary};
//     padding-bottom: 8px;
//   }

//   /* ── THREE-COLUMN SPECIFICATION GRID ── */
//   .metadata-bar {
//     display: grid;
//     grid-template-columns: 1.5fr 0.8fr 1.2fr;
//     gap: 24px;
//     border-top: 1px solid ${C.border};
//     border-bottom: 1px solid ${C.border};
//     padding: 28px 0;
//     margin-top: 56px;
//   }
//   @media (max-width: 768px) {
//     .metadata-bar { grid-template-columns: 1fr; gap: 24px; }
//   }
  
//   .meta-block {
//     display: flex;
//     flex-direction: column;
//     gap: 6px;
//   }
//   .meta-label {
//     font-size: 11px;
//     font-weight: 500;
//     text-transform: uppercase;
//     letter-spacing: 0.08em;
//     color: ${C.textMuted};
//   }
//   .meta-value {
//     font-size: 14px;
//     font-weight: 400;
//     color: ${C.textSecondary};
//   }

//   /* ── SCREENSHOT GALLERY & DESCRIPTION CONTENT ── */
//   .showcase-split {
//     display: grid;
//     grid-template-columns: 1.1fr 0.9fr;
//     gap: 72px;
//     padding: 64px 0 120px;
//     align-items: start;
//   }
//   @media (max-width: 1024px) {
//     .showcase-split { grid-template-columns: 1fr; gap: 56px; }
//   }

//   /* Studio Workspace Frame */
//   .canvas-frame {
//     background: ${C.surface};
//     border: 1px solid ${C.border};
//     border-radius: 6px;
//     overflow: hidden;
//   }
//   .canvas-top-bar {
//     height: 36px;
//     border-bottom: 1px solid ${C.border};
//     display: flex;
//     align-items: center;
//     padding: 0 16px;
//   }
//   .canvas-indicator-line {
//     width: 24px;
//     height: 2px;
//     background: ${C.borderActive};
//     border-radius: 1px;
//   }
//   .image-viewport-wrap {
//     position: relative;
//     width: 100%;
//     aspect-ratio: 16/10;
//     background: #141415;
//     overflow: hidden;
//   }
//   .image-viewport-wrap img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     object-position: top;
//   }

//   /* Action Triggers */
//   .button-group-row {
//     display: flex;
//     gap: 12px;
//     margin-top: 20px;
//   }
//   .editorial-btn {
//     flex: 1;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 8px;
//     padding: 14px 24px;
//     border-radius: 4px;
//     font-size: 13px;
//     font-weight: 500;
//     text-decoration: none;
//     cursor: pointer;
//     transition: all 0.2s ease;
//   }
//   .btn-solid {
//     background: ${C.accentBlue}; /* Live preview background matching blue accent */
//     color: #FFFFFF;
//     border: 1px solid ${C.accentBlue};
//   }
//   .btn-solid:hover {
//     background: transparent;
//     color: ${C.accentBlue};
//   }
//   .btn-outline {
//     background: transparent;
//     color: ${C.textSecondary};
//     border: 1px solid ${C.border};
//   }
//   .btn-outline:hover {
//     border-color: ${C.textSecondary};
//     color: ${C.textPrimary};
//   }

//   /* Right-Side Editorial Details */
//   .details-flow {
//     display: flex;
//     flex-direction: column;
//     gap: 48px;
//   }
  
//   .details-segment {}
  
//   .segment-title {
//     font-size: 11px;
//     font-weight: 600;
//     text-transform: uppercase;
//     letter-spacing: 0.1em;
//     color: ${C.textPrimary};
//     margin-bottom: 16px;
//     border-left: 2px solid ${C.accentBlue}; /* Blue vertical anchor indicator accent */
//     padding-left: 10px;
//     line-height: 1;
//   }

//   .segment-body-paragraph {
//     font-size: 15px;
//     line-height: 1.7;
//     color: ${C.textSecondary};
//   }

//   .tags-inline-container {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 6px;
//   }
//   .tag-pill-node {
//     font-size: 12px;
//     font-weight: 400;
//     color: ${C.textSecondary};
//     background: ${C.surface};
//     border: 1px solid ${C.border};
//     padding: 6px 12px;
//     border-radius: 4px;
//   }

//   .feature-minimal-stack {
//     list-style: none;
//     display: flex;
//     flex-direction: column;
//     gap: 14px;
//   }
//   .feature-minimal-stack li {
//     font-size: 14px;
//     color: ${C.textSecondary};
//     line-height: 1.5;
//     display: flex;
//     gap: 12px;
//   }
//   .feature-minimal-stack li::before {
//     content: "—";
//     color: ${C.textMuted};
//     font-weight: 300;
//   }

//   /* ── ARCHITECTURAL FOOTER NAVIGATION ── */
//   .footer-pagination-boundary {
//     border-top: 1px solid ${C.border};
//     padding: 48px 0 80px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .pagination-trigger-link {
//     display: flex;
//     flex-direction: column;
//     gap: 4px;
//     cursor: pointer;
//     background: none;
//     border: none;
//     text-align: left;
//     transition: opacity 0.2s ease;
//   }
//   .pagination-trigger-link:hover { opacity: 0.7; }
//   .pagination-trigger-link.orient-right { text-align: right; }

//   .pagination-sub-label {
//     font-size: 11px;
//     font-weight: 400;
//     color: ${C.textMuted};
//     text-transform: uppercase;
//     letter-spacing: 0.05em;
//   }
//   .pagination-main-title {
//     font-size: 16px;
//     font-weight: 500;
//     color: ${C.textPrimary};
//   }
// `;

// const projects = [
//   {
//     num: "01",
//     title: "EduNest",
//     subtitle: "LMS Platform",
//     tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
//     year: "2026",
//     image: "/background/EduNest.png?v=001",
//     screenshots: ["/background/EduNest.png?v=001"],
//     description:
//       "EduNest is an easy-to-use learning platform that helps students and teachers connect in one place. Teachers can create courses and share video lessons, while students can learn at their own pace, track their progress, and take quizzes in real time — all in a clean and simple interface.",
//     features: [
//       "Role-based auth for students and instructors",
//       "Real-time progress tracking and completion certificates",
//       "Integrated quiz engine with auto-grading",
//       "Responsive across all device sizes",
//     ],
//     liveUrl: "https://edu-nest-frontend.vercel.app/",
//     githubUrl: "https://github.com/jerinrubaiya33/EduNest",
//   },
//   {
//     num: "02",
//     title: "Zephyra",
//     subtitle: "E-Commerce Website",
//     tags: ["React", "Express.js", "Cloudinary", "MongoDB"],
//     year: "2026",
//     image: "/background/Zephyra.png?v=002",
//     screenshots: ["/background/Zephyra.png?v=002"],
//     description:
//       "Zephyra is a clean and simple online clothing store built to make shopping effortless. Customers can easily browse collections, filter items, manage their cart, and complete orders through a secure checkout process.",
//     features: [
//       "Fast product search and categorization filters",
//       "Image management and storage powered by Cloudinary",
//       "Persistent shopping cart that saves items for later",
//       "User dashboard to track orders and shipment status",
//     ],
//     liveUrl: "https://github.com/jerinrubaiya33/Zephyra",
//     githubUrl: "https://zephyra-frontend.vercel.app/",
//   },
//   {
//     num: "03",
//     title: "Muslima",
//     subtitle: "Android Application",
//     tags: ["Flutter", "Dart", "Android SDK", "REST API"],
//     year: "2025",
//     image: "/background/Muslima.png?v=003",
//     screenshots: ["/background/Muslima.png?v=003"],
//     description:
//       "A clean, distraction-free Android app designed for reading and daily spiritual tracking. Built with Flutter to run smoothly and adapt across different Android screen sizes, even with weak internet configurations.",
//     features: [
//       "Full offline functionality via smart local data caching",
//       "Beautifully formatted text layouts designed for night reading",
//     ],
//     liveUrl: "https://github.com/jerinrubaiya33/Android_App",
//     githubUrl: "https://github.com/jerinrubaiya33/Android_App",
//   },
//   {
//     num: "04",
//     title: "Stick Game",
//     subtitle: "Web Browser Game",
//     tags: ["HTML5", "CSS3", "JavaScript"],
//     year: "2025",
//     image: "/background/Stick.png?v=004",
//     screenshots: ["/background/Stick.png?v=004"],
//     description:
//       "A fully custom-coded, physics-based mini game built completely inside a standard HTML5 Canvas element. No extra frameworks or massive external engines were used to keep it running smoothly.",
//     features: [
//       "Smooth frame rates using standard requestAnimationFrame rendering",
//       "Dynamic obstacle sizing that updates fluidly as you play",
//       "Accurate pixel-collision detection for perfect win/lose logic",
//     ],
//     liveUrl: "https://jerinrubaiya33.github.io/Stick-Game/stick.html",
//     githubUrl: "https://github.com/jerinrubaiya33/Stick-Game",
//   },
//   {
//     num: "05",
//     title: "Balloon Pop_Up",
//     subtitle: "Arcade Browser Game",
//     tags: ["HTML5", "CSS3", "JavaScript"],
//     year: "2025",
//     image: "/background/Balloon.png?v=005",
//     screenshots: ["/background/Balloon.png?v=005"],
//     description:
//       "An interactive casual clicking game where balloons spawn faster as time goes on. Score tracking and continuous game sessions are managed instantly using standard web storage features.",
//     features: [
//       "Isolated rendering intervals managing every balloon individually",
//       "Increasing difficulty curve that ramps up balloon speed over time",
//       "High score tracking using local storage data persistence",
//     ],
//     liveUrl: "https://jerinrubaiya33.github.io/Balloon-PopUp/Balloon.html",
//     githubUrl: "https://github.com/jerinrubaiya33/Balloon-PopUp",
//   },
// ];

// export default function ProjectDetail({ projectNum, onBack }) {
//   const normalizeProjectNum = (value) => {
//     if (!value) return "01";

//     const numericValue = Number.parseInt(String(value), 10);

//     if (Number.isNaN(numericValue)) {
//       return "01";
//     }

//     return String(numericValue).padStart(2, "0");
//   };

//   const [currentNum, setCurrentNum] = useState(normalizeProjectNum(projectNum));

//   const project = projects.find((p) => p.num === currentNum) || projects[0];
//   const currentIndex = projects.findIndex((p) => p.num === project.num);
//   const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
//   const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [currentNum]);

//   useEffect(() => {
//     if (projectNum) {
//       const normalizedProjectNum = normalizeProjectNum(projectNum);
//       if (projects.some((p) => p.num === normalizedProjectNum)) {
//         setCurrentNum(normalizedProjectNum);
//       }
//     }
//   }, [projectNum]);

//   return (
//     <>
//       <CustomCursor spotlightMultiplier={0.1} />
//       <style dangerouslySetInnerHTML={{ __html: STYLES }} />

//       <div style={{ background: C.bg, minHeight: "100vh" }}>
//         <div className="portfolio-wrapper">
          
//           {/* HEADER NAV */}
//           <header className="editorial-header">
//             <button
//               className="action-back-btn"
//               onClick={() => (onBack ? onBack() : setCurrentNum("01"))}
//             >
//               <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M6.66667 12.6666L2 7.99996L6.66667 3.33329" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M2.5 8H14" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
//               </svg>
//               <span>All Projects</span>
//             </button>
//             <span className="header-ticker">
//               CASE STUDY // PROT.{project.num}
//             </span>
//           </header>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentNum}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//             >
//               {/* EDITORIAL HERO */}
//               <section className="masthead-section">
//                 <span className="masthead-eyebrow">Project No. {project.num}</span>
//                 <div className="masthead-title-row">
//                   <h1 className="main-headline">{project.title}</h1>
//                   <p className="headline-summary">{project.subtitle} focusing on simple user workflows, functional performance, and neat interface structures.</p>
//                 </div>

//                 <div className="metadata-bar">
//                   <div className="meta-block">
//                     <span className="meta-label">Stack</span>
//                     <span className="meta-value">{project.tags.join(" · ")}</span>
//                   </div>
//                   <div className="meta-block">
//                     <span className="meta-label">Year</span>
//                     <span className="meta-value">{project.year}</span>
//                   </div>
//                   <div className="meta-block">
//                     <span className="meta-label">Type</span>
//                     <span className="meta-value">{project.subtitle}</span>
//                   </div>
//                 </div>
//               </section>

//               {/* TWO COLUMN CONTENT STRUCTURE */}
//               <div className="showcase-split">
                
//                 {/* INTERACTIVE WORKSPACE VIEWPORT */}
//                 <div>
//                   <div className="canvas-frame">
//                     <div className="canvas-top-bar">
//                       <div className="canvas-indicator-line" />
//                     </div>
//                     <div className="image-viewport-wrap">
//                       <motion.img
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                         src={project.screenshots[0]}
//                         alt={`${project.title} platform overview`}
//                       />
//                     </div>
//                   </div>

//                   <div className="button-group-row">
//                     <a
//                       href={project.liveUrl}
//                       className="editorial-btn btn-solid"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <span>Live Preview</span>
//                       <span style={{ fontSize: 11 }}>↗</span>
//                     </a>
//                     <a
//                       href={project.githubUrl}
//                       className="editorial-btn btn-outline"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <span>View on GitHub</span>
//                     </a>
//                   </div>
//                 </div>

//                 {/* EDITORIAL SPECIFICATION PARAGRAPHS */}
//                 <div className="details-flow">
//                   <div className="details-segment">
//                     <div className="segment-title">About Project</div>
//                     <p className="segment-body-paragraph">{project.description}</p>
//                   </div>

//                   <div className="details-segment">
//                     <div className="segment-title">Tech Stack</div>
//                     <div className="tags-inline-container">
//                       {project.tags.map((tag) => (
//                         <span key={tag} className="tag-pill-node">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="details-segment">
//                     <div className="segment-title">Key Features</div>
//                     <ul className="feature-minimal-stack">
//                       {project.features.map((item, index) => (
//                         <li key={index}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//               </div>

//               {/* STRUCTURAL PAGINATION CONTROLS */}
//               <footer className="footer-pagination-boundary">
//                 {prevProject ? (
//                   <button className="pagination-trigger-link" onClick={() => setCurrentNum(prevProject.num)}>
//                     <span className="pagination-sub-label">Previous Project</span>
//                     <span className="pagination-main-title">{prevProject.title}</span>
//                   </button>
//                 ) : <div />}

//                 {nextProject ? (
//                   <button className="pagination-trigger-link orient-right" onClick={() => setCurrentNum(nextProject.num)}>
//                     <span className="pagination-sub-label">Next Project</span>
//                     <span className="pagination-main-title">{nextProject.title}</span>
//                   </button>
//                 ) : <div />}
//               </footer>

//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </>
//   );
// }
