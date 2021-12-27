import fs from 'fs'
import matter from 'gray-matter'
import * as React from 'react'
import styles from '../styles/Projects.module.scss'
import Card from '../components/Card'
import { ProjectMeta } from '../interfaces/project'

interface IProps {
  projects: ProjectMeta[]
}

const Projects: React.FC<IProps> = ({ projects }) => (
  <div className={styles.container}>
    {projects.map((project) => (
      <Card key={project.slug} project={project} />
    ))}
  </div>
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
