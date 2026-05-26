"use client";

import React from "react";
import { Home, Folder, User, Wrench, SquarePen } from "lucide-react";

const NavHeader = () => {
  const scrollToSection = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { label: "Home", sectionId: "home", icon: Home },
    { label: "Project", sectionId: "projects", icon: Folder },
    { label: "About", sectionId: "about", icon: User },
    { label: "Skills", sectionId: "skills", icon: Wrench },
    { label: "Contact", sectionId: "contact", icon: SquarePen },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-3 sm:top-4 sm:px-4 pointer-events-none">
      <nav className="pointer-events-auto flex w-full max-w-fit items-center justify-center gap-1 overflow-hidden px-2 py-2 rounded-2xl border border-white/10 bg-[#269add]/95 backdrop-blur-xl shadow-lg hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 touch-pan-y sm:gap-2 sm:px-4">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              title={item.label}
              type="button"
              onClick={() => scrollToSection(item.sectionId)}
              className="group relative shrink-0 p-2.5 rounded-xl text-white hover:text-[#f0f0f0] hover:bg-[#2d92cc] transition-all duration-200 sm:p-3"
            >
              <Icon
                size={20}
                strokeWidth={2}
                className="group-hover:drop-shadow-[0_0_8px_#39FF14]"
              />

              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-150 bg-zinc-800 text-white text-[11px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap shadow-md border border-white/5">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default NavHeader;
