import styles from '../styles/project.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      {project.image && <img src={project.image} alt={project.title} />}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className={styles.links}>
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>}
        {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">Repo</a>}
      </div>
    </div>
  );
}