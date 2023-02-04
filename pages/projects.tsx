import * as React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import {
  BaseLayout,
  Container,
  Grid,
  Section,
  SectionHeader
} from '@ccdao/components'
import ProjectCard from '../components/ProjectCard'
import { ProjectMeta } from '../interfaces/project'

interface IProps {
  projects: ProjectMeta[]
}

const Projects: React.FC<IProps> = ({ projects }) => (
  <BaseLayout>
    <Section>
      <SectionHeader title='Projects'
        subtitle='The IOTABOTS Team and the Community building amazing projects.
          Discover all projects in the IOTABOTS Metaverse.' />
      <Container>
        <Grid
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
          container
          spacing={6}
        >
          {projects.map((project) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
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
