import Link from 'next/link'
import * as React from 'react'
import { ProjectMeta } from '../interfaces/project'
import styles from '../styles/Card.module.scss'

interface IProps {
  project: ProjectMeta
}

const Card: React.FC<IProps> = ({ project }) => (
  <Link href={`/projects/${project.slug}`}>
    <div className={styles.card}>
      <img src={project.thumbnail} alt={project.description} />

      <div className={styles.info}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  </Link>
)

export default Card
