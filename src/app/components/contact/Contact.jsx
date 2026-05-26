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
.sec { padding: 96px 0; }
.wrap { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
@media (max-width: 768px) { .wrap { padding: 0 24px; } }

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
.label::before { content: ''; width: 16px; height: 2px; background: ${C.neonGreen}; }

.dh { font-weight: 800; line-height: 1.1; letter-spacing: -0.03em; color: ${C.pureWhite}; }
.hl { color: ${C.neonGreen}; }

/* ── CONTACT GRID ── */
.c-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 12px; margin-top: 44px; }
.c-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  padding: 18px 22px;
  background: ${C.cardDark};
  border-radius: 12px;
  border: 1px solid ${C.borderLine};
  color: ${C.pureWhite};
  font-size: 13px;
  font-weight: 600;
  transition: all 0.22s ease;
}
.c-link:hover { background: ${C.neonGreen}; color: ${C.bg}; border-color: ${C.neonGreen}; transform: translateY(-2px); }
.c-link svg { width: 16px; height: 16px; color: ${C.neonGreen}; flex-shrink: 0; transition: color 0.2s; }
.c-link:hover svg { color: ${C.bg}; }

/* ── CTA FOOTER CARD ── */
.cta { background: #A4BE2A; padding: 112px 48px; text-align: center; border-top: 1px solid ${C.borderLine}; }
.cta-h { font-size: clamp(40px, 8vw, 72px); font-weight: 900; color: ${C.pureWhite}; line-height: 1.1; margin-bottom: 14px; letter-spacing: -0.03em; }
.cta-sub { font-size: 16px; color: ${C.pureWhite}; margin-bottom: 38px; }
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 40px;
  background: ${C.cardDark};
  color: ${C.pureWhite};
  font-size: 14px;
  font-weight: 700;
  border-radius: 100px;
  text-decoration: none;
  transition: all 0.25s ease;
  letter-spacing: 0.04em;
}
.cta-btn:hover { background: ${C.cardDark}; color: ${C.pureWhite}; transform: translateY(-3px); }
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

export default function Contact() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      {/* CONTACT SECTION */}
      <motion.section
        id="contact"
        className="sec"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div className="wrap" variants={groupReveal}>
          <motion.div variants={itemReveal}>
            <div className="label">Contact</div>
            <h2 className="dh" style={{ fontSize: "clamp(36px, 6vw, 56px)" }}>
              Start a New
              <br />
              <span className="hl">Collaboration</span>
            </h2>
          </motion.div>

          <motion.p
            style={{
              fontSize: 15,
              color: C.grayText,
              marginTop: 20,
              fontWeight: 400,
              maxWidth: 440,
              lineHeight: 1.8,
            }}
            variants={itemReveal}
          >
            Have an idea, project blueprint, or full system model you want to
            develop? Drop a message to start working together.
          </motion.p>

          <motion.div className="c-grid" variants={groupReveal}>
            {[
              {
                href: "mailto:jerinrubaiyakhan11@gmail.com",
                label: "jerinrubaiyakhan11@gmail.com",
                icon: (
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
              },
              {
                href: "https://github.com/jerinrubaiya33",
                label: "github.com/jerinrubaiya33",
                icon: (
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                ),
              },
              {
                href: "https://www.linkedin.com/in/jerin-rubaiya/",
                label: "linkedin.com/in/jerin-rubaiya",
                icon: (
                  <>
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </>
                ),
              },
            ].map((l, i) => (
              <motion.a key={i} href={l.href} className="c-link" variants={itemReveal}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {l.icon}
                </svg>
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.div
        className="cta"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className="cta-h">
          Have a project 
          <br />
          <p className="ml-[200px] text-[#269add]">in mind?</p>
        </p>
        <p className="cta-sub ml-[200px]">{"Let's build reliable, fluid web systems."}</p>
        <a href="mailto:jerinrubaiyakhan11@gmail.com" className="cta-btn ml-[200px]">
          Start a Conversation →
        </a>

        {/* <p className="cta-h">
          Have a project <br />
          <p className="text-[#269add]">in mind?</p>
        </p>
        <p className="cta-sub mt-7">Let's build reliable, fluid web systems.</p>
        <a href="mailto:jerinrubaiyakhan11@gmail.com" className="cta-btn ">
          Start a Conversation →
        </a> */}
      </motion.div>
    </>
  );
}