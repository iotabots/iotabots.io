import Link from 'next/link'
import * as React from 'react'
import { Box, Container, Typography } from '@iotabots/components'
import { ProjectMeta } from '../interfaces/project'
import styles from '../styles/Card.module.scss'

interface IProps {
  project: ProjectMeta
}

const ProjectCard: React.FC<IProps> = ({ project }) => (
  <Link href={`/projects/${project.slug}`}>
    <div className={styles.card}>
      <img src={project.thumbnail} alt={project.description} />

      <div className={styles.info}>
        <Typography variant='h5' paragraph>
          {project.title}
        </Typography>
        <Typography variant='body1' paragraph>
          {project.description}
        </Typography>
      </div>
    </div>
  </Link>
)

export default ProjectCard
