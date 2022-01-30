import fs from 'fs'
import matter from 'gray-matter'
import * as React from 'react'
import { Container, Grid, Typography } from '@iotabots/components'
import ProjectCard from '../components/ProjectCard'
import { ProjectMeta } from '../interfaces/project'
import BaseLayout from '../layout/BaseLayout'
import Section from '../components/Section'

interface IProps {
  projects: ProjectMeta[]
}

const Projects: React.FC<IProps> = ({ projects }) => (
  <BaseLayout>
    <Section>
      <Container>
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
          mt={6}
          container
          spacing={6}
        >
          {projects.map((project) => (
            <Grid
              item
              xs={4}
              key={project.slug}
            >
              <ProjectCard key={project.slug} project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
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
