import React from 'react'
import ProjectCard from './ProjectCard'
import styles from '../styles/ProjectList.module.scss'


function ProjectList({ projects }) {
  const isGrid = true;

  const projectListStyles = `${styles.projectListContainer} ${isGrid ? 
    styles['projectListContainer--isList'] : ''}`

  return (
    <div className={styles.projectList__outerContainer}>
      <div className={projectListStyles}>
        <div class={styles.projectListContainer__controls}> 
          <button class={styles.projectListContainer__controls__listButton}>List</button>
          <button class={styles.projectListContainer__controls__gridButton}>Grid</button>
        </div>
        { 
          projects.map(project => 
            <ProjectCard key={project.id} project={project} />
          )
        }
      </div>
    </div>
  )
}

export default ProjectList