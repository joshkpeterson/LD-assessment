import React from 'react'
import styles from "../styles/ProjectList.module.scss"


function ProjectList({ projects }) {
  const projectsList = projects.map(project => 
    <div>{ project.foo }</div>
  )

  return (
    <div className={styles.projectListContainer}>
      { projectsList }
    </div>
  )
}

export default ProjectList