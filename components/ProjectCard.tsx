import Link from 'next/link'
import * as React from 'react'
import { Box, Button, Chip, Typography } from '@iotabots/components'
import { ProjectMeta } from '../interfaces/project'
import styles from '../styles/Card.module.scss'

interface IProps {
  project: ProjectMeta
}
interface StatusProps {
  status: string
}
const Status: React.FC<StatusProps> = ({ status }) => {
  if (status === 'in_progress') {
    return <Chip label='In Progress' color='warning' />
  }
  return <Chip label='Done' color='primary' />
}

const ProjectCard: React.FC<IProps> = ({ project }) => (
  <div className={styles.card}>
    <img src={project.thumbnail} alt={project.description} />
    <Box sx={{ paddingTop: '2px', paddingLeft: '20px' }}>
      <Status status={project.status} />
    </Box>
    <div className={styles.info}>
      <Typography variant='h5' paragraph>
        {project.title}
      </Typography>
      <Typography variant='body1' paragraph>
        {project.description}
      </Typography>
    </div>
    <Box display='flex' justifyContent='center'>
      <Button
        sx={{ marginTop: '8px', width: '80%' }}
        href={`/projects/${project.slug}`}
      >
        Learn more
      </Button>
    </Box>
  </div>
)

export default ProjectCard
