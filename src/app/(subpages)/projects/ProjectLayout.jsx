"use client";
import React, { useMemo } from "react";
import styles from './ProjectLayout.module.css';

const buttonColors = [
  "#6a4c93", "#00d1ff", "#f44336", "#ff0068", "#ff9800", "#b2ff00", "#ffc100"
];

const ProjectLayout = ({ name, description, date, demoLink, index }) => {
  const color = buttonColors[index % buttonColors.length];
  
  const formattedDate = useMemo(() => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }, [date]);

  return (
    <a
      href={demoLink}
      target="_blank"
      rel="noopener noreferrer"
      data-label={name}
      className={styles.projectItem}
      style={{ '--button-color': color }}
    >
      <div className={styles.content}>
        <div className={styles.left}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.right}>
          <span>{formattedDate}</span>
        </div>
      </div>
    </a>
  );
};

export default React.memo(ProjectLayout);