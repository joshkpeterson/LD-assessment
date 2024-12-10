import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import styles from '../styles/ProjectList.module.scss'


function ProjectList({ projects }) {

  const [isGrid, setIsGrid] = useState(false)

  const projectListStyles = `${styles.projectListContainer} ${isGrid ? 
    styles['projectListContainer--isList'] : ''}`

  return (
    <div className={styles.projectList__outerContainer}>
      <div className={projectListStyles}>
        <div class={styles.projectListContainer__controls}> 
          <button onClick={() => setIsGrid(false)} 
            class={styles.projectListContainer__controls__listButton}>
            List
          </button>
          <button onClick={() => setIsGrid(true)} 
            class={styles.projectListContainer__controls__gridButton}>
            Grid
          </button>
        </div>
        {
          projects.map(project => 
            <ProjectCard key={project.id} project={project} isList={!isGrid}/>
          )
        }
      </div>
    </div>
  )
}

export default ProjectList