"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Sound = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set to true after component mounts to prevent SSR issues
    setIsClient(true);
  }, []);

  const handleClick = () => {
    const audioElement = document.getElementById("audio-player");
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  };

  if (!isClient) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Audio element */}
      <audio id="audio-player" loop>
        <source src="/audio/birds39-forest-20772.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Home button */}
      <HomeBtn handleClick={handleClick} />
    </div>
  );
};

const HomeBtn = ({ handleClick }) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={handleClick}>
        <p className="button__text">{/* optional spinning text */}</p>
        <div className="button__circle">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon"
          >
            <path d="M12 3v10.55A4 4 0 1014 17V7h4V3h-6z" />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 34px;  /* Reduced distance from the top */
  right: 16px;  /* Reduced distance from the right */
  z-index: 1000;

  .button {
    cursor: pointer;
    border: none;
    background: #000;
    color: #fff;
    width: 38px;  /* Reduced button size further */
    height: 35px;  /* Reduced button size further */
    border-radius: 50%;
    position: relative;
    display: grid;
    place-content: center;
    transition: background 300ms, transform 200ms;
    font-weight: 600;
    will-change: transform;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);  /* Reduced shadow for smaller size */

    @media (max-width: 640px) {
      width: 20px;  /* Smaller size for mobile */
      height: 25px;  /* Smaller size for mobile */
    }

    &:hover {
      background: #202020;
      transform: scale(1.05);
    }
  }

  .button__text {
    position: absolute;
    inset: 0;
    animation: text-rotation 6s linear infinite;
    font-size: 8px;  /* Reduced font size */
    will-change: transform;

    @media (max-width: 640px) {
      font-size: 6px;  /* Smaller font size on mobile */
    }

    > span {
      position: absolute;
      transform: rotate(calc(24deg * var(--index)));
      inset: 5px;  /* Adjusted inset for smaller button */
      will-change: transform;

      @media (max-width: 640px) {
        inset: 2px;  /* Smaller inset on mobile */
      }
    }
  }

  .button__circle {
    position: relative;
    width: 34px;  /* Reduced circle size further */
    height: 34px;  /* Reduced circle size further */
    overflow: hidden;
    background: #fff;
    color: #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 640px) {
      width: 22px;  /* Smaller circle size on mobile */
      height: 22px;  /* Smaller circle size on mobile */
    }

    .button__icon {
      width: 18px;  /* Increased icon size to make it bigger */
      height: 18px;  /* Ensuring the height is consistent with the width */

      @media (max-width: 640px) {
        width: 14px;  /* Slightly smaller icon for mobile */
        height: 14px;  /* Ensuring mobile consistency */
      }
    }
  }
`;

export default Sound;
