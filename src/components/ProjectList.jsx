import React from 'react'
import ProjectCard from './ProjectCard'
import styles from '../styles/ProjectList.module.scss'


function ProjectList({ projects }) {
  const isList = true;

  const projectListStyles = `${styles.projectListContainer} ${isList ? 
    styles['projectListContainer--isList'] : ''}`

  return (
    <div className={styles.projectList__OuterContainer}>

      <div className={projectListStyles}>
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