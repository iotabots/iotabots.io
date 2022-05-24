import * as React from 'react'
import { useRouter } from 'next/router'
import { Button, Chip, Typography } from '@iotabots/components'
import { Card, CardContent, CardMedia } from '@mui/material'
import { ProjectMeta } from '../interfaces/project'

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

const ProjectCard: React.FC<IProps> = ({ project }) => {
  const { push } = useRouter()

  const onClick = (e): void => {
    e.preventDefault()
    push(`/projects/${project.slug}`)
  }

  return (
    <Card sx={{ bgcolor: 'rgba(0,0,0,0.5)' }}>
      <CardMedia sx={{ height: 340 }} image={project.thumbnail} />
      <CardContent>
        <Status status={project.status} />
        <Typography mt={3} mb={1} variant='h4'>
          {project.title}
        </Typography>
        <Typography variant='body1' color='rgba(255,255,255,0.8)' paragraph>
          {project.description}
        </Typography>
        <Button
          sx={{ marginTop: '8px', width: '80%' }}
          onClick={onClick}
          fullWidth
        >
          Learn more
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
