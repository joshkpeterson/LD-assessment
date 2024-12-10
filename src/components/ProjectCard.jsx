import styles from "../styles/ProjectCard.module.scss";

/**
 * ProjectCard Component
 * 
 * Renders a project card which would be clickable in a real app.
 * Projects are displayed as Horizontal/List (large displays only) or Grid.
 * 
 * Props:
 * - isList: boolean setting whether Horizontal/List or Grid.
 * - project: object containing attributes for the card.
 * 
 * State: (none)
 * 
 * Example Usage:
 * <ProjectCard
 *   key={project.id}
 *   project={project}
 *   isList={isList}
 * />
 */
function ProjectCard({
  isList,
  project: {
    title,
    description,
    img_url,
    img_caption,
    img_alt,
    location,
    tags,
  },
}) {
  // TODO: daysLeft can be easily calculated from the json data
  const daysLeft = 5;
  const daysLeftLabel = `${daysLeft} days left`;
  const progress = 50;
  const progressBarWidthStyle = { width: `${progress}%` };

  // isList set by buttons in parent
  const projectCardStyles = `${styles.projectCardContainer} ${
    isList ? styles["projectCardContainer--isList"] : ""
  }`;

  return (
    <a className={projectCardStyles} tabindex="0" role="listitem">
      <div>
        <img
          className={styles.projectCardContainer__image}
          src={img_url}
          alt={img_alt}
        />
        <p className={styles.projectCardContainer__img_caption}>
          {img_caption}
        </p>
      </div>
      <div>
        <p className={styles.projectCardContainer__location}>{location}</p>
        <ul className={styles.projectCardContainer__tags}>
          {tags.map(({ tagName }) => (
            <li key={tagName}>{tagName}</li>
          ))}
        </ul>
        <h3 className={styles.projectCardContainer__title}>{title}</h3>
        <p className={styles.projectCardContainer__description}>
          {description}
        </p>
        <div className={styles.projectCardContainer__progressBar}>
          <div style={progressBarWidthStyle}></div>
        </div>
        <p className={styles.projectCardContainer__daysLeftLabel}>
          {daysLeftLabel}
        </p>
      </div>
    </a>
  );
}

export default ProjectCard;
