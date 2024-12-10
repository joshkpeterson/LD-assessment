import React from 'react'
import styles from '../styles/ProjectCard.module.scss'

function ProjectCard({ project: { title, description, img_url, img_caption, location, tags } }) {
  const daysLeft = 5;
  const daysLeftLabel = `${daysLeft} days left`;  
  const progress = 50;
  const progressBarWidthStyle = { width: `${progress}%` };  

  return (
    <div className={styles.projectCardContainer}>
      <img className={styles.projectCardContainer__image} src={img_url} alt="" />
      <p className={styles.projectCardContainer__img_caption}>{img_caption}</p>
      <p className={styles.projectCardContainer__location}>{location}</p>
      <ul className={styles.projectCardContainer__tags}>
        { tags.map(({ tagName }) => <li key={tagName}>{tagName}</li>)}
      </ul>
      <p className={styles.projectCardContainer__title}>{title}</p>
      <p className={styles.projectCardContainer__description}>{description}</p>
      <div className={styles.projectCardContainer__progressBar}>
        <div style={progressBarWidthStyle}></div>
      </div> 
      <p className={styles.projectCardContainer__daysLeftLabel}>{daysLeftLabel}</p>

    </div>
  )
}

export default ProjectCard