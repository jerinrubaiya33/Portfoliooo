"use client";
import { BtnList } from "@/app/data";
import React, { useMemo, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const buttonColors = [
  "#00bcd4", "#6a4c93", "#f44336", "#e91e63", "#b2ff00", "#ff9800", "#b28143",
];

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  transform: translateY(-50%);
  top: 50%;
  right: 0;
  padding: 20px;
  z-index: 100;
`;

const TopWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  &:nth-child(1) {
    align-items: flex-start;
  }

  &:nth-child(2) {
    align-items: flex-end;
  }
`;

const baseButtonStyles = `
  position: relative;
  text-transform: uppercase;
  font-family: 'Supermercado', sans-serif;
  font-weight: 900;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  color: #ffffff;
  border: 2px solid var(--color);
  background-color: #000;
  z-index: 10;
  transition: transform 0.2s ease, border-color 0.2s ease;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color);
    transition: transform 0.3s ease;
    transform: translateX(-100%);
    z-index: 1;
  }

  &:hover::before {
    transform: translateX(0);
  }

  &:hover {
    color: #ffffff;
    border-color: #ffffff;
    transform: scale(1.05);
  }

  span {
    position: relative;
    z-index: 2;
  }
`;

const MotionLink = styled(motion.a)`
  ${baseButtonStyles}
  --color: ${(props) => props.$color};
`;

function useScreenSize() {
  const [screenSize, setScreenSize] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setScreenSize(window.innerWidth);
    const debouncedResize = debounce(handleResize, 100);

    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  return screenSize;
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const Navigation = () => {
  const screenSize = useScreenSize();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getResponsiveStyles = useCallback(() => {
    if (screenSize <= 550) {
      return {
        smallScreen: true,
        button: {
          padding: "0.7em 2em",
          fontSize: "12px",
          letterSpacing: "3px",
          margin: "5px",
          top: "50px",
        },
      };
    } else if (screenSize <= 770) {
      return {
        smallScreen: false,
        button: {
          padding: "0.65em 2.5em",
          fontSize: "13.5px",
          letterSpacing: "4px",
          margin: "2px 0",
        },
      };
    } else if (screenSize <= 860) {
      return {
        smallScreen: false,
        button: {
          padding: "0.75em 3.5em",
          fontSize: "15px",
          letterSpacing: "6px",
          margin: "2px 0",
        },
      };
    } else {
      return {
        smallScreen: false,
        button: {
          padding: "1em 4.5em",
          fontSize: "17px",
          letterSpacing: "8px",
          margin: "2px 0",
        },
      };
    }
  }, [screenSize]);

  const { smallScreen, button: buttonStyles } = useMemo(() => {
    return getResponsiveStyles();
  }, [getResponsiveStyles]);

  const leftButtons = smallScreen ? BtnList.slice(0, 3) : BtnList;
  const rightButtons = smallScreen ? BtnList.slice(3, 6) : [];

  const renderButton = useCallback(
    (btn, index) => {
      const color = buttonColors[index % buttonColors.length];
      const commonProps = {
        $color: color,
        style: buttonStyles,
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5, delay: index * 0.1 },
      };

      return (
        <MotionLink
          key={index}
          href={btn.link}
          target={btn.newTab ? "_blank" : "_self"}
          rel={btn.newTab ? "noopener noreferrer" : undefined}
          {...commonProps}
        >
          <span>{btn.label}</span>
        </MotionLink>
      );
    },
    [buttonStyles]
  );

  if (!mounted) return null;

  return smallScreen ? (
    <TopWrapper>
      <Column>{leftButtons.map((btn, i) => renderButton(btn, i))}</Column>
      <Column>
        {rightButtons.map((btn, i) =>
          renderButton(btn, i + leftButtons.length)
        )}
      </Column>
    </TopWrapper>
  ) : (
    <StyledWrapper>
      {BtnList.map((btn, index) => renderButton(btn, index))}
    </StyledWrapper>
  );
};

export default Navigation;