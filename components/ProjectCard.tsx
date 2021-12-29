import Link from 'next/link'
import * as React from 'react'
import { Chip, Typography } from '@iotabots/components'
import { ProjectMeta } from '../interfaces/project'
import styles from '../styles/Card.module.scss'

interface IProps {
  project: ProjectMeta
}
interface StatusProps {
  status: string
}
const Status = ({ status }): any => {
  if (status === 'done') {
    return <Chip label='Done' />
  }
  if (status === 'in_progress') {
    return <Chip label='In Progress' />
  }
}

const ProjectCard: React.FC<IProps> = ({ project }) => (
  <Link href={`/projects/${project.slug}`}>
    <div className={styles.card}>
      <img src={project.thumbnail} alt={project.description} />

      <div className={styles.info}>
        <Status status={project.status} />
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
