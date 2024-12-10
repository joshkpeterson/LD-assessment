import React from 'react'
import ProjectCard from './ProjectCard'
import styles from '../styles/ProjectList.module.scss'


function ProjectList({ projects }) {
  return (
    <div className={styles.outerContainer}>

    <div className={styles.projectListContainer}>
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