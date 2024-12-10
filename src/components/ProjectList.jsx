import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from "../styles/ProjectList.module.scss";

import React, { useState } from 'react';

/**
 * ProjectList Component
 * 
 * Renders a list of <ProjectCard>'s. On large displays, includes a button to change 
 * whether the projects are displayed in Horizontal (list) or Grid view.
 * 
 * Props:
 * - projects
 * 
 * State:
 * - isList: A boolean indicating whether the project cards are displayed in horizontal 
 *           or Grid view (default true - horizontal)
 * 
 * Example Usage:
 * <ProjectList projects={projects} />
 */

function ProjectList({ projects }) {
  // Toggle buttons set either Horizontal (aka "List" - default) or Grid view
  const [isList, setIsList] = useState(true);

  // Append styles based on List vs Grid view
  const projectListStyles = `${styles.projectListContainer} ${
    isList ? styles["projectListContainer--isList"] : ""
  }`;

  return (
    <div className={styles.projectList__outerContainer}>
      <div className={projectListStyles}>
        <div className={styles.projectListContainer__controls}>
          <button
            onClick={() => setIsList(true)}
            className={styles.projectListContainer__controls__listButton}
            aria-pressed={isList}
            tabindex="0"
          >
            List
          </button>
          <button
            onClick={() => setIsList(false)}
            className={styles.projectListContainer__controls__gridButton}
            aria-pressed={!isList}
            tabindex="0"
          >
            Grid
          </button>
        </div>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            isList={isList}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
