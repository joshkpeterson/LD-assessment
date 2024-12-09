import React from 'react'
import ProjectCard from './ProjectCard'
import styles from '../styles/ProjectList.module.scss'


function ProjectList({ projects }) {
  return (
    <div className={styles.projectListContainer}>
    { 
      projects.map(project => 
        <ProjectCard project={project} />
      )
    }
    </div>
  )
}

export default ProjectList