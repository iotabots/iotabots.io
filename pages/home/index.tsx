import fs from 'fs'
import matter from 'gray-matter'
import React from 'react'
import BaseLayout from '../../layout/BaseLayout'
import Hero from './Sections/Hero'
import Projects from './Sections/Projects'
import Bots from './Sections/Bots'
import Welcome from './Sections/Welcome'
import Roadmap from './Sections/Roadmap'

export const Home = ({ projects }): JSX.Element => (
  <BaseLayout>
    <Hero />
    <Welcome />
    <Bots />
    <Projects projects={projects} />
    <Roadmap />
  </BaseLayout>
)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getStaticProps() {
  // Load markdown files from '/projects' folder.
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

export default Home
