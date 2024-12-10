import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import styles from '../styles/ProjectList.module.scss'


function ProjectList({ projects }) {

  const [isList, setIsList] = useState(true)

  const projectListStyles = `${styles.projectListContainer} ${isList ? 
    styles['projectListContainer--isList'] : ''}`

  return (
    <div className={styles.projectList__outerContainer}>

      <div className={projectListStyles}>
        <div className={styles.projectListContainer__controls}> 
          <button onClick={() => setIsList(true)} 
            className={styles.projectListContainer__controls__listButton}>
            List
          </button>
          <button onClick={() => setIsList(false)} 
            className={styles.projectListContainer__controls__gridButton}>
            Grid
          </button>
        </div>
        {
          projects.map(project => 
            <ProjectCard key={project.id} project={project} isList={isList}/>
          )
        }
      </div>
    </div>
  )
}

export default ProjectList