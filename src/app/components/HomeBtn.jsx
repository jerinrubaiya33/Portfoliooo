"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HomeBtn = ({ className }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    window.location.href = "/";
  };

  if (!isClient) return null;

  return (
    <StyledWrapper className={className}>
      <button className="button" onClick={handleClick}>
        <p className="button__text">
          <span style={{ "--index": 0 }}>G</span>
          <span style={{ "--index": 1 }}>O</span>
          <span style={{ "--index": 3 }}>B</span>
          <span style={{ "--index": 4 }}>A</span>
          <span style={{ "--index": 5 }}>C</span>
          <span style={{ "--index": 6 }}>K</span>
          <span style={{ "--index": 8 }}>H</span>
          <span style={{ "--index": 9 }}>O</span>
          <span style={{ "--index": 10 }}>M</span>
          <span style={{ "--index": 11 }}>E</span>
        </p>
        <div className="button__circle">
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon"
            width={14}
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
          <svg
            viewBox="0 0 14 15"
            fill="none"
            width={14}
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon button__icon--copy"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 100;

  .button {
    cursor: pointer;
    border: none;
    background: #000;
    color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: relative;
    display: grid;
    place-content: center;
    transition: background 300ms, transform 200ms;
    font-weight: 600;
    will-change: transform;

    @media (max-width: 640px) {
      width: 70px;
      height: 70px;
    }

    &:hover {
      background: #202020;
      transform: scale(1.05);
    }
  }

  .button__text {
  position: absolute;
  inset: 0;
  animation: text-rotation 18s linear infinite;
  font-size: 12px;
  will-change: transform;

  @media (max-width: 640px) {
    font-size: 10px;
  }

  > span {
    position: absolute;
    transform: rotate(calc(24deg * var(--index)));
    inset: 7px;

    @media (max-width: 640px) {
      inset: 4px;
    }
  }
}

  .button__circle {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: #fff;
    color: #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 640px) {
      width: 28px;
      height: 28px;
    }

    .button__icon {
      width: 14px;

      @media (max-width: 640px) {
        width: 12px;
      }
    }
  }

  .button__icon--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover .button__icon {
    color: #202020;
  }

  .button:hover .button__icon:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }

  .button:hover .button__icon--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }

  @keyframes text-rotation {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default HomeBtn;
