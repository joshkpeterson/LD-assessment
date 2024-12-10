import React from 'react'
import styles from "../styles/ProjectCard.module.scss"

function ProjectCard({ project: { title, description, img_url } }) {
  return (
    <div className={styles.projectCardContainer}>
      <img className={styles.projectCardContainer__image} src={img_url} alt="" />
      {title}
      {description}
    </div>
  )
}

export default ProjectCard