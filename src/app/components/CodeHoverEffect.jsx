  // { text: "mask-image: radial-gradient(...)",        color: "#333333" },
  // { text: "export default function Home()",          color: "#333333" },
  // { text: "pointer-events-none overflow-hidden",     color: "#333333" },
  // { text: "-translate-y-40 transition-all",          color: "#333333" },
  // { text: "mix-blend-mode: overlay",                 color: "#333333" },
  // { text: "background-size: 140px 140px",            color: "#333333" },
  // { text: "<NavHeader />",                           color: "#333333" },





import { useEffect, useRef, useCallback } from "react";

// Assuming CODE_SNIPPETS is imported or defined here
const CODE_SNIPPETS = [
 { text: '@#$%^&*"', color: "#333333" },
];

export default function CodeHoverEffect() {
  const containerRef = useRef(null);
  const spotRef = useRef(null);
  const lastTimeRef = useRef(0);

  const spawnParticle = useCallback((x, y) => {
    const container = containerRef.current;
    if (!container) return;
    const s = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
    const el = document.createElement("span");
    el.textContent = s.text;
    el.style.cssText = `
      position: absolute;
      left: ${x + (Math.random() - 0.5) * 200}px;
      top: ${y - 10}px;
      transform: translateX(-50%);
      font-family: 'Courier New', monospace;
      font-size: 14px;
      color: ${s.color};
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      animation: riseCode 2.4s ease-out forwards;
      z-index: 5;
    `;
    container.appendChild(el);
    setTimeout(() => el.remove(), 2500);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const spot = spotRef.current;
    if (!container || !spot) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();

      const heroTopDoc    = rect.top + window.scrollY;
      const heroBottomDoc = heroTopDoc + container.offsetHeight;
      const cursorDocY    = e.clientY + window.scrollY;

      const insideHero =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        cursorDocY >= heroTopDoc &&
        cursorDocY <= heroBottomDoc;

      if (!insideHero) {
        spot.style.opacity = "0";
        return;
      }

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spot.style.left = `${x}px`;
      spot.style.top  = `${y}px`;
      spot.style.opacity = "1";

      const now = Date.now();
      if (now - lastTimeRef.current < 160) return;
      lastTimeRef.current = now;
      spawnParticle(x, y);
    };

    const handleMouseLeave = () => { spot.style.opacity = "0"; };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [spawnParticle]);

  return (
    <>
      <style>{`
        @keyframes riseCode {
          0%   { opacity: 0; transform: translateX(-50%) translateY(10px); }
          15%  { opacity: 1; }
          70%  { opacity: 0.85; }
          100% { opacity: 0; transform: translateX(-50%) translateY(-80px); }
        }
      `}</style>

      <div
        ref={containerRef}
        className="absolute inset-0 z-[1] overflow-hidden pointer-events-none"
      >
        <div
          ref={spotRef}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 ease-out"
          style={{
            width: 150, // Slightly wider for a softer fade
            height: 150,
            borderRadius: "50%",
            // Multi-stop gradient for an organic, non-harsh fade out
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 40%, rgba(255, 255, 255, 0.005) 70%, transparent 100%)",
            // Blends perfectly with underlying grid & background colors
            mixBlendMode: "screen", 
            // Slight hardware acceleration blur to soften edge rendering
            filter: "blur(8px)", 
          }}
        />
      </div>
    </>
  );
}