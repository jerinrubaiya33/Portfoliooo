"use client";
import { useEffect, useState, useRef } from "react";

export default function VideoTrackLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const pathRef = useRef(null);
  const [dotCoords, setDotCoords] = useState({ x: 40, y: 30 });
  const [angle, setAngle] = useState(0);

  // 1. Core loading state timer - Throttle calculation rate to give CPU execution gaps
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        // Organic, wider step increments to finish loading execution faster
        const step = Math.floor(Math.random() * 6) + 5;
        return Math.min(prev + step, 100);
      });
    }, 240);

    return () => clearInterval(interval);
  }, [isPlaying, onComplete]);

  // 2. Track playhead traveling along the custom SVG curve dynamically
  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      const targetLength = (progress / 100) * pathLength;
      const point = pathRef.current.getPointAtLength(targetLength);
      setDotCoords({ x: point.x, y: point.y });

      const lookAheadLength = Math.min(targetLength + 1, pathLength);
      const nextPoint = pathRef.current.getPointAtLength(lookAheadLength);
      const degreeAngle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
      setAngle(degreeAngle);
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-[#A4BE2A] flex flex-col justify-between p-6 md:p-12 z-[9999] select-none font-sans overflow-hidden">
      <div className="relative w-full max-w-2xl mx-auto h-64 flex items-center justify-center my-auto">
        <svg 
          viewBox="0 0 400 200" 
          className="w-full h-full overflow-visible"
        >
          <path
            ref={pathRef}
            d="M 40,30 C 120,190 280,190 360,30"
            fill="none"
            stroke="#269add"
            strokeWidth="3"
            strokeDasharray="8,6"
            className="opacity-90 drop-shadow-[0_0_8px_rgba(38,154,221,0.4)]"
          />

          <g transform={`translate(${dotCoords.x}, ${dotCoords.y})`}>
            <circle r="24" fill="#269add" className="opacity-15 animate-ping" />
            <g style={{ transform: `rotate(${angle}deg) translateY(-7px)` }} className="transition-transform duration-75">
              <g transform="translate(-16, -18)">
                <line x1="16" y1="2" x2="16" y2="21" stroke="#8D6E63" strokeWidth="2" strokeLinecap="round" />
                <path d="M 17 3 C 25 7 26 15 17 19 Z" fill="#D7CCC8" />
                <path d="M 15 5 C 9 9 11 16 15 19 Z" fill="#BCAAA4" />
                <path 
                  d="M 3 20 C 8 20 25 20 29 20 C 26 24 21 26 16 26 C 11 26 6 24 3 20 Z" 
                  fill="#8D6E63" 
                  className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
                />
                <path d="M 4 21 L 28 21" stroke="#D7CCC8" strokeWidth="1" />
              </g>
            </g>
          </g>
        </svg>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-center pointer-events-none mt-8">
          <h1 className="text-6xl md:text-8xl font-black text-black/15 tracking-tighter select-none font-sans">
            {progress}%
          </h1>
        </div>
      </div>
    </div>
  );
}