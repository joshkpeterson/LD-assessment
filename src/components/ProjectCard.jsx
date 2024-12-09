import React from 'react'
import styles from "../styles/ProjectCard.module.scss"

function ProjectCard({ project: { title, description, img_url } }) {
  return (
    <div>
      {title}
      {description}
      <img src={img_url} alt="" />
    </div>
  )
}

export default ProjectCard