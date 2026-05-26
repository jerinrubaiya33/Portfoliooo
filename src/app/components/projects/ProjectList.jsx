import React from "react";
import ProjectLayout from "@/app/(subpages)/projects/ProjectLayout";

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectLayout key={project.name || index} index={index} {...project} />
      ))}
    </>
  );
};
export default ProjectList;