// "use client";

// import { BtnList } from "@/app/data";
// import React from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import { FaFileAlt, FaEnvelope } from "react-icons/fa";

// /*
//    COLOR PALETTE
//  */

// const C = {
//   bg: "#121212",
//   pureWhite: "#FFFFFF",
//   pureBlack: "#000000",
//   darkText: "#333333",
//   neonGreen: "#A4BE2A",   
//   orangeAccent: "#269add",
//   grayText: "#9CA3AF",
//   borderLine: "#2E2E2E",
//   cardBorderLine: "#E0E0E0",
// };

// /*
//    ICONS
//  */

// const GithubSvg = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 30 30"
//     width="16"
//     height="16"
//     fill="currentColor"
//   >
//     <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
//   </svg>
// );

// const LinkedinSvg = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="15"
//     height="15"
//     viewBox="0 0 50 50"
//     fill="currentColor"
//   >
//     <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z" />
//   </svg>
// );

// /*
//    MAIN CONTAINER
//  */

// const NavContainer = styled.div`
//   position: absolute;
//   inset: 0;
//   z-index: 30;
//   pointer-events: none;
//   font-family: "Plus Jakarta Sans", sans-serif;
// `;

// /*
//    HERO CARD
//  */

// const HeroContent = styled.div`
//   position: absolute;
//   left: 48px;
//   top: 50%;
//   transform: translateY(-50%);
//   pointer-events: none;

//   max-width: 580px;

//   background: rgba(255, 255, 255, 0.94);
//   backdrop-filter: blur(10px);

//   padding: 42px;
//   border-radius: 20px;

//   border: 1px solid rgba(255, 255, 255, 0.7);

//   box-shadow:
//     0 10px 30px rgba(0, 0, 0, 0.16),
//     0 1px 0 rgba(255, 255, 255, 0.8) inset;

//   overflow: hidden;

//   @media (max-width: 768px) {
//     position: relative;
//     transform: none;
//     margin: 110px 16px 32px;
//     left: 0;
//     max-width: none;
//     padding: 28px 20px;
//     border-radius: 18px;
//   }
// `;

// /*
//    TOP LEFT CURVE
// */

// const TopCurve = styled.svg`
//   position: absolute;
//   top: -20px;
//   left: -80px;

//   width: 180px;
//   height: 180px;

//   pointer-events: none;
//   opacity: 0.9;
//   z-index: 0;

//   path {
//     stroke: ${C.neonGreen};
//     stroke-width: 2.2;
//     fill: none;
//     stroke-dasharray: 5 8;
//     stroke-linecap: round;
//   }

//   circle {
//     fill: ${C.neonGreen};
//   }
// `;

// /*
//    BOTTOM RIGHT CURVE
//  */

// const BottomCurve = styled.svg`
//   position: absolute;
//   right: -60px;
//   bottom: -60px;

//   width: 220px;
//   height: 220px;

//   pointer-events: none;
//   opacity: 0.9;

//   path {
//     stroke: ${C.neonGreen};
//     stroke-width: 2.2;
//     fill: none;
//     stroke-dasharray: 5 8;
//     stroke-linecap: round;
//   }

//   circle {
//     fill: ${C.neonGreen};
//   }
// `;

// /*
//    TEXT
//  */

// const Tagline = styled.div`
//   font-family: "JetBrains Mono", monospace;
//   font-size: 13px;
//   font-weight: 700;
//   letter-spacing: 0.18em;

//   color: ${C.orangeAccent};
//   text-transform: uppercase;

//   margin-bottom: 18px;

//   display: flex;
//   align-items: center;
//   gap: 12px;

//   position: relative;
//   z-index: 2;

//   &::before {
//     content: "";
//     width: 20px;
//     height: 1.5px;
//     background: ${C.orangeAccent};
//   }
// `;

// const Brand = styled.h1`
//   font-size: clamp(42px, 5vw, 72px);
//   line-height: 0.95;
//   letter-spacing: -0.06em;
//   font-weight: 700;

//   color: ${C.pureBlack};

//   position: relative;
//   z-index: 2;
// `;

// const Divider = styled.div`
//   width: 100%;
//   max-width: 380px;
//   height: 1px;

//   background: ${C.cardBorderLine};

//   margin: 28px 0;

//   position: relative;
//   z-index: 2;
// `;

// const RoleText = styled.p`
//   font-size: 17px;
//   line-height: 1.75;
//   color: ${C.darkText};

//   margin-bottom: 36px;

//   position: relative;
//   z-index: 2;

//   span {
//     color: ${C.pureBlack};
//     font-weight: 700;
//   }
// `;

// /*
//     CORNER SCENARIO HINT (Outside of White Card)
//  */

// const BottomRightHint = styled.div`
//   position: absolute;
//   right: 48px;
//   bottom: 36px;
//   pointer-events: none;

//   font-family: "JetBrains Mono", monospace;
//   font-size: 12px;
//   font-weight: 600;
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
//   color: ${C.orangeAccent};

//   display: flex;
//   align-items: center;
//   gap: 8px;
//   padding: 10px 16px;
//   background: rgba(4, 15, 18, 0.45);
//   backdrop-filter: blur(8px);
//   border: 1px solid rgba(38, 154, 221, 0.2);
//   border-radius: 10px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

//   span {
//     font-size: 15px;
//   }

//   @media (max-width: 768px) {
//     right: 16px;
//     bottom: 16px;
//     font-size: 11px;
//     padding: 8px 12px;
//   }

//   @media (max-width: 640px) {
//     display: none;
//   }
// `;

// /*
//    BUTTONS
//  */

// const ButtonRow = styled.div`
//   display: flex;
//   gap: 10px;
//   flex-wrap: nowrap;
//   align-items: center;

//   position: relative;
//   z-index: 2;
//   pointer-events: auto;

//   @media (max-width: 768px) {
//     flex-wrap: wrap;
//     gap: 8px;
//   }
// `;

// const ActionButton = styled(motion.a)`
//   padding: 13px 24px;

//   font-size: 11px;
//   font-weight: 700;
//   letter-spacing: 0.06em;

//   text-transform: uppercase;
//   text-decoration: none;

//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;

//   white-space: nowrap;

//   border-radius: 3px;
//   cursor: pointer;

//   transition: all 0.25s ease;

//   @media (max-width: 768px) {
//     flex: 1 1 calc(50% - 4px);
//     min-width: 0;
//     padding: 12px 16px;
//   }

//   @media (max-width: 480px) {
//     flex-basis: 100%;
//   }

//   &.primary {
//     background: ${C.neonGreen};
//     color: ${C.pureBlack};
//     border: 1px solid ${C.neonGreen};

//     &:hover {
//       background: ${C.orangeAccent};
//       border-color: ${C.orangeAccent};
//       color: ${C.bg};

//       box-shadow: 0 8px 24px rgba(181, 255, 59, 0.25);
//     }
//   }

//   &.secondary {
//     background: transparent;
//     border: 1px solid rgba(0, 0, 0, 0.18);

//     color: ${C.pureBlack};

//     &:hover {
//       background: ${C.orangeAccent};
//       border-color: ${C.orangeAccent};
//       color: ${C.bg};

//       box-shadow: 0 8px 24px rgba(181, 255, 59, 0.2);
//     }
//   }
// `;

// /*
//    STATUS
//  */

// const StatusIndicator = styled.div`
//   margin-top: 34px;

//   font-size: 13px;
//   font-weight: 700;

//   letter-spacing: 0.08em;
//   text-transform: uppercase;

//   color: ${C.orangeAccent};

//   position: relative;
//   z-index: 2;

//   @media (max-width: 768px) {
//     margin-top: 24px;
//     font-size: 12px;
//   }
// `;

// /*
//    SOCIAL FOOTER
//  */

// const socialIcons = {
//   Github: GithubSvg,
//   LinkedIn: LinkedinSvg,
//   Resume: FaFileAlt,
// };

// const socialColors = {
//   Github: C.pureWhite,
//   LinkedIn: C.neonGreen,
//   Resume: C.orangeAccent,
// };

// const SocialBar = styled.div`
//   position: absolute;
//   left: 48px;
//   bottom: 36px;

//   display: flex;
//   gap: 24px;

//   pointer-events: auto;

//   @media (max-width: 768px) {
//     position: relative;
//     left: 0;
//     bottom: 0;
//     flex-wrap: wrap;
//     gap: 16px;
//     padding: 0 16px 32px;
//   }
// `;

// const SocialLink = styled(motion.a)`
//   font-size: 13px;
//   font-weight: 600;

//   color: ${C.grayText};

//   display: flex;
//   align-items: center;
//   gap: 8px;

//   text-decoration: none;

//   transition: color 0.2s ease;

//   &:hover {
//     color: ${(p) => p.$hoverColor};
//   }
// `;

// /*
//    COMPONENT
//  */

// const Navigation = () => {
//   const social = BtnList.filter((b) =>
//     ["Github", "LinkedIn", "Resume"].includes(b.label)
//   );

//   return (
//     <NavContainer>
//       <HeroContent>
//         {/* TOP LEFT CURVE */}
//         <TopCurve viewBox="0 0 180 180">
//           {/* Half Circle */}
//           <path d="M150 90 A60 60 0 1 0 30 90" />

//           {/* Arrow */}
//           <path d="M38 78 L30 90 L44 92" />

//           {/* Dot */}
//           <circle cx="150" cy="90" r="4" />
//         </TopCurve>

//         <Tagline>Full-Stack Developer</Tagline>

//         <Brand>Rubaiya Khan</Brand>

//         <Divider />

//         {/* <RoleText>
//           Building robust, modular{" "}
//           <span>Full-Stack Web Systems</span> and engineered
//           high-fidelity UI animations.
//         </RoleText> */}

//         <RoleText>
//           I build scalable{" "}
//           <span>Full-Stack Web Applications</span> with clean architecture and create smooth, interactive UI experiences.
//         </RoleText>

//         <ButtonRow>
//           <ActionButton
//             className="primary"
//             href="https://github.com/jerinrubaiya33"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileTap={{ scale: 0.97 }}
//           >
//             <GithubSvg />
//             GitHub
//           </ActionButton>

//           <ActionButton
//             className="secondary"
//             href="https://www.linkedin.com/in/jerin-rubaiya"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileTap={{ scale: 0.97 }}
//           >
//             <LinkedinSvg />
//             LinkedIn
//           </ActionButton>

//           <ActionButton
//             className="secondary"
//             href="/Resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileTap={{ scale: 0.97 }}
//           >
//             <FaFileAlt />
//             Resume
//           </ActionButton>

//           <ActionButton
//             className="secondary"
//             href="mailto:jerinrubaiya33@gmail.com"
//             whileTap={{ scale: 0.97 }}
//             title="Send an Email"
//           >
//             <FaEnvelope />
//             Mail
//           </ActionButton>
//         </ButtonRow>

//         <StatusIndicator>
//           Available for work
//         </StatusIndicator>

//         {/* BOTTOM RIGHT CURVE */}
//         <BottomCurve viewBox="0 0 210 210">
//           <path d="M28 70 C 70 165, 145 165, 182 118" />

//           <path d="M170 107 L182 118 L168 122" />

//           <circle cx="28" cy="70" r="4" />
//         </BottomCurve>
//       </HeroContent>

//       {/* DETACHED RUNTIME ENVIRONMENTAL INTERACTION LABELS */}
//       <BottomRightHint>
//         <span>↓</span> Drag to pan the scene
//       </BottomRightHint>

//       {/* SOCIAL FOOTER */}
//       <SocialBar>
//         {social.map((btn, i) => {
//           const Icon = socialIcons[btn.label];

//           return (
//             <SocialLink
//               key={i}
//               href={btn.link}
//               $hoverColor={socialColors[btn.label]}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -2 }}
//             >
//               {Icon && <Icon />}
//               {btn.label}
//             </SocialLink>
//           );
//         })}
//       </SocialBar>
//     </NavContainer>
//   );
// };

// export default Navigation;













"use client";

import { BtnList } from "@/app/data";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaFileAlt, FaEnvelope } from "react-icons/fa";

/*
   COLOR PALETTE
 */

const C = {
  bg: "#121212",
  pureWhite: "#FFFFFF",
  pureBlack: "#000000",
  darkText: "#333333",
  neonGreen: "#A4BE2A",   
  orangeAccent: "#269add",
  grayText: "#9CA3AF",
  borderLine: "#2E2E2E",
  cardBorderLine: "#E0E0E0",
};

/*
   ICONS
 */

const GithubSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="16"
    height="16"
    fill="currentColor"
  >
    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
  </svg>
);

const LinkedinSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 50 50"
    fill="currentColor"
  >
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z" />
  </svg>
);

/*
   MAIN CONTAINER
 */

const NavContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 30;
  pointer-events: none;
  font-family: "Plus Jakarta Sans", sans-serif;

  @media (max-width: 768px) {
    position: relative;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 0;
  }
`;

/*
   HERO CARD
 */

const HeroContent = styled.div`
  position: absolute;
  left: 48px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  max-width: 580px;

  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(10px);

  padding: 42px;
  border-radius: 20px;

  border: 1px solid rgba(255, 255, 255, 0.7);

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.16),
    0 1px 0 rgba(255, 255, 255, 0.8) inset;

  overflow: hidden;

  @media (max-width: 768px) {
    position: relative;
    transform: none;
    /* Pushed significantly further down towards the bottom on mobile viewports */
    margin: 260px auto 40px; 
    top: 0;
    left: 0;
    width: calc(100% - 32px);
    max-width: 500px;
    padding: 32px 24px;
    border-radius: 18px;
  }
`;

/*
   TOP LEFT CURVE
*/

const TopCurve = styled.svg`
  position: absolute;
  top: -20px;
  left: -80px;

  width: 180px;
  height: 180px;

  pointer-events: none;
  opacity: 0.9;
  z-index: 0;

  path {
    stroke: ${C.neonGreen};
    stroke-width: 2.2;
    fill: none;
    stroke-dasharray: 5 8;
    stroke-linecap: round;
  }

  circle {
    fill: ${C.neonGreen};
  }

  @media (max-width: 480px) {
    width: 130px;
    height: 130px;
    top: -15px;
    left: -55px;
  }
`;

/*
   BOTTOM RIGHT CURVE
 */

const BottomCurve = styled.svg`
  position: absolute;
  right: -60px;
  bottom: -60px;

  width: 220px;
  height: 220px;

  pointer-events: none;
  opacity: 0.9;

  path {
    stroke: ${C.neonGreen};
    stroke-width: 2.2;
    fill: none;
    stroke-dasharray: 5 8;
    stroke-linecap: round;
  }

  circle {
    fill: ${C.neonGreen};
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
    right: -40px;
    bottom: -40px;
  }
`;

/*
   TEXT
 */

const Tagline = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.18em;

  color: ${C.orangeAccent};
  text-transform: uppercase;

  margin-bottom: 18px;

  display: flex;
  align-items: center;
  gap: 12px;

  position: relative;
  z-index: 2;

  &::before {
    content: "";
    width: 20px;
    height: 1.5px;
    background: ${C.orangeAccent};
  }

  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 14px;
    &::before {
      width: 14px;
    }
  }
`;

const Brand = styled.h1`
  font-size: clamp(42px, 5vw, 72px);
  line-height: 0.95;
  letter-spacing: -0.06em;
  font-weight: 700;

  color: ${C.pureBlack};

  position: relative;
  z-index: 2;

  @media (max-width: 480px) {
    font-size: 38px;
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 380px;
  height: 1px;

  background: ${C.cardBorderLine};

  margin: 28px 0;

  position: relative;
  z-index: 2;

  @media (max-width: 480px) {
    margin: 20px 0;
  }
`;

const RoleText = styled.p`
  font-size: 17px;
  line-height: 1.75;
  color: ${C.darkText};

  margin-bottom: 36px;

  position: relative;
  z-index: 2;

  span {
    color: ${C.pureBlack};
    font-weight: 700;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 28px;
  }
`;

/*
    CORNER SCENARIO HINT (Outside of White Card)
 */

const BottomRightHint = styled.div`
  position: absolute;
  right: 48px;
  bottom: 36px;
  pointer-events: none;

  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${C.orangeAccent};

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: rgba(4, 15, 18, 0.45);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(38, 154, 221, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  span {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    right: 16px;
    bottom: 16px;
    font-size: 11px;
    padding: 8px 12px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

/*
   BUTTONS
 */

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  align-items: center;

  position: relative;
  z-index: 2;
  pointer-events: auto;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const ActionButton = styled(motion.a)`
  padding: 13px 24px;

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;

  text-transform: uppercase;
  text-decoration: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  white-space: nowrap;

  border-radius: 3px;
  cursor: pointer;

  transition: all 0.25s ease;

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 10px;
    font-size: 10.5px;
  }

  &.primary {
    background: ${C.neonGreen};
    color: ${C.pureBlack};
    border: 1px solid ${C.neonGreen};

    &:hover {
      background: ${C.orangeAccent};
      border-color: ${C.orangeAccent};
      color: ${C.bg};

      box-shadow: 0 8px 24px rgba(181, 255, 59, 0.25);
    }
  }

  &.secondary {
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.18);

    color: ${C.pureBlack};

    &:hover {
      background: ${C.orangeAccent};
      border-color: ${C.orangeAccent};
      color: ${C.bg};

      box-shadow: 0 8px 24px rgba(181, 255, 59, 0.2);
    }
  }
`;

/*
   STATUS
 */

const StatusIndicator = styled.div`
  margin-top: 34px;

  font-size: 13px;
  font-weight: 700;

  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: ${C.orangeAccent};

  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    margin-top: 24px;
    font-size: 11px;
    text-align: center;
  }
`;

/*
   SOCIAL FOOTER
 */

const socialIcons = {
  Github: GithubSvg,
  LinkedIn: LinkedinSvg,
  Resume: FaFileAlt,
};

const socialColors = {
  Github: C.pureWhite,
  LinkedIn: C.neonGreen,
  Resume: C.orangeAccent,
};

const SocialBar = styled.div`
  position: absolute;
  left: 48px;
  bottom: 36px;

  display: flex;
  gap: 24px;

  pointer-events: auto;

  @media (max-width: 768px) {
    position: relative;
    left: 0;
    bottom: 0;
    justify-content: center;
    gap: 28px;
    padding: 12px 16px 24px;
    margin-top: auto;
  }
`;

const SocialLink = styled(motion.a)`
  font-size: 13px;
  font-weight: 600;

  color: ${C.grayText};

  display: flex;
  align-items: center;
  gap: 8px;

  text-decoration: none;

  transition: color 0.2s ease;

  &:hover {
    color: ${(p) => p.$hoverColor};
  }
`;

/*
   COMPONENT
 */

const Navigation = () => {
  const social = BtnList.filter((b) =>
    ["Github", "LinkedIn", "Resume"].includes(b.label)
  );

  return (
    <NavContainer>
      <HeroContent>
        {/* TOP LEFT CURVE */}
        <TopCurve viewBox="0 0 180 180">
          {/* Half Circle */}
          <path d="M150 90 A60 60 0 1 0 30 90" />

          {/* Arrow */}
          <path d="M38 78 L30 90 L44 92" />

          {/* Dot */}
          <circle cx="150" cy="90" r="4" />
        </TopCurve>

        <Tagline>Full-Stack Developer</Tagline>

        <Brand>Rubaiya Khan</Brand>

        <Divider />

        <RoleText>
          I build scalable{" "}
          <span>Full-Stack Web Applications</span> with clean architecture and create smooth, interactive UI experiences.
        </RoleText>

        <ButtonRow>
          <ActionButton
            className="primary"
            href="https://github.com/jerinrubaiya33"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
          >
            <GithubSvg />
            GitHub
          </ActionButton>

          <ActionButton
            className="secondary"
            href="https://www.linkedin.com/in/jerin-rubaiya"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
          >
            <LinkedinSvg />
            LinkedIn
          </ActionButton>

          <ActionButton
            className="secondary"
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
          >
            <FaFileAlt />
            Resume
          </ActionButton>

          <ActionButton
            className="secondary"
            href="mailto:jerinrubaiya33@gmail.com"
            whileTap={{ scale: 0.97 }}
            title="Send an Email"
          >
            <FaEnvelope />
            Mail
          </ActionButton>
        </ButtonRow>

        <StatusIndicator>
          Available for work
        </StatusIndicator>

        {/* BOTTOM RIGHT CURVE */}
        <BottomCurve viewBox="0 0 210 210">
          <path d="M28 70 C 70 165, 145 165, 182 118" />

          <path d="M170 107 L182 118 L168 122" />

          <circle cx="28" cy="70" r="4" />
        </BottomCurve>
      </HeroContent>

      {/* DETACHED RUNTIME ENVIRONMENTAL INTERACTION LABELS */}
      <BottomRightHint>
        <span>↓</span> Drag to pan the scene
      </BottomRightHint>

      {/* SOCIAL FOOTER */}
      <SocialBar>
        {social.map((btn, i) => {
          const Icon = socialIcons[btn.label];

          return (
            <SocialLink
              key={i}
              href={btn.link}
              $hoverColor={socialColors[btn.label]}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
            >
              {Icon && <Icon />}
              {btn.label}
            </SocialLink>
          );
        })}
      </SocialBar>
    </NavContainer>
  );
};

export default Navigation;