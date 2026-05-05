"use client";
import React, { useEffect, useState } from "react";

// Function to create one firefly with random properties
const createFireFly = () => ({
  id: Math.random().toString(36).substr(2, 9), // better random ID
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`, // 5s to 10s
  moveX: `${Math.random() * 200 - 100}px`, // move between -100px and +100px
  moveY: `${Math.random() * 200 - 100}px`,
});

const FireFliesBackground = () => {
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFirefly = createFireFly();
      setFireflies((currentFireflies) => [
        ...currentFireflies.slice(-14), // keep max 15 fireflies
        newFirefly,
      ]);
    };

    const interval = setInterval(addFireflyPeriodically, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {fireflies.map((firefly) => (
        <React.Fragment key={firefly.id}>
          <style>{`
    @keyframes move-${firefly.id} {
      0% {
        transform: translate(0, 0) scale(1);
        opacity: 0.8;
      }
      100% {
        transform: translate(${firefly.moveX}, ${firefly.moveY}) scale(1.2);
        opacity: 0.3;
      }
    }
  `}</style>
          <div
            className="absolute rounded-full w-[10px] h-[10px] bg-firefly-radial"
            style={{
              top: firefly.top,
              left: firefly.left,
              animation: `move-${firefly.id} ${firefly.animationDuration} infinite alternate ease-in-out`,
              backgroundColor: "rgb(var(--accent))",
              filter: "blur(2px)", // optional for softer glow
            }}
          ></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FireFliesBackground;
