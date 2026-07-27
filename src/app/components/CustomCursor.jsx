"use client";

import { useEffect, useState } from "react";

const TEXT_ZOOM_SELECTOR =
  "h1, h2, h3, h4, h5, h6, p, span, li, a, button, label, strong, em, small, blockquote, .zoom-target";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = document.getElementById("custom-hardware-cursor");
    const dot = document.getElementById("custom-hardware-dot");
    
    const handleMouseMove = (event) => {
      if (cursor && dot) {
        cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
        cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
        
        dot.style.setProperty("--cursor-x", `${event.clientX}px`);
        dot.style.setProperty("--cursor-y", `${event.clientY}px`);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const zoomTarget = target.closest(TEXT_ZOOM_SELECTOR);
      const interactiveEl = target.closest("a, button, [role='button'], .zoom-target");
      
      if (zoomTarget) {
        zoomTarget.classList.add("cursor-text-zoomed");
      }

      if (interactiveEl || zoomTarget) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (!target) return;
      
      const zoomTarget = target.closest(TEXT_ZOOM_SELECTOR);
      if (zoomTarget) {
        zoomTarget.classList.remove("cursor-text-zoomed");
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    // Bind listeners once globally on mount to protect TBT metrics
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          body, a, button, input, select, textarea, [role="button"] {
            cursor: none !important;
          }
        }
      `}} />

      <div
        id="custom-hardware-cursor"
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full transition-all duration-300 ease-out md:block"
        style={{
          width: isHovered ? "56px" : "32px",
          height: isHovered ? "56px" : "32px",
          borderColor: isHovered ? "rgba(212, 175, 55, 0.15)" : "rgba(212, 175, 55, 0.35)",
          borderWidth: "1px",
          borderStyle: "solid",
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.15)" : "rgba(212, 175, 55, 0.04)",
          transform: "translate3d(calc(var(--cursor-x, 0px) - 50%), calc(var(--cursor-y, 0px) - 50%), 0)",
          willChange: "transform, width, height",
          opacity: visible ? 1 : 0,
        }}
      />
      
      <div
        id="custom-hardware-dot"
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-2 w-2 rounded-full transition-all duration-200 ease-out md:block"
        style={{
          backgroundColor: "#D4AF37",
          transform: `translate3d(calc(var(--cursor-x, 0px) - 50%), calc(var(--cursor-y, 0px) - 50%), 0) ${isHovered ? "scale(0.4)" : "scale(1)"}`,
          willChange: "transform",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}