import fs from 'fs'
import matter from 'gray-matter'
import * as React from 'react'
import { Box, Container, Grid, Typography } from '@iotabots/components'
import ProjectCard from '../components/ProjectCard'
import { ProjectMeta } from '../interfaces/project'
import BaseLayout from '../layout/BaseLayout'

interface IProps {
  projects: ProjectMeta[]
}

const Projects: React.FC<IProps> = ({ projects }) => (
  <BaseLayout>
    <Box py={6} display='flex' alignItems='center'>
      <Container maxWidth='md'>
        <Typography gutterBottom variant='h1'>
          Projects
        </Typography>
        <Typography variant='body1'>
          The IOTABOTS Team and the Community building amazing projects.
          Discover all projects in the IOTABOTS Metaverse.
        </Typography>

        <Grid
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          {projects.map((project) => (
            <Grid
              item
              key={project.slug}
              style={{
                maxWidth: '50%',
                minWidth: '360px',
              }}
            >
              <ProjectCard key={project.slug} project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </BaseLayout>
)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getStaticProps() {
  const files = fs.readdirSync('projects')

  const projects = files.map((file) => {
    const data = fs.readFileSync(`projects/${file}`).toString()

    return {
      ...matter(data).data,
      slug: file.split('.')[0],
    }
  })

  return {
    props: {
      projects,
    },
  }
}

export default Projects
