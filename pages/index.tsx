import fs from 'fs'
import matter from 'gray-matter'
import React from 'react'
import BaseLayout from '../layout/BaseLayout'
import Hero from '../components/Sections/HeroSection'
import ProjectsSection from '../components/Sections/ProjectsSection'
import BotsSection from '../components/Sections/BotsSection'
import WelcomeSection from '../components/Sections/WelcomeSection'
import RoadmapSection from '../components/Sections/RoadmapSection'

export const Home = ({ projects }): JSX.Element => (
  <BaseLayout>
    <Hero />
    <WelcomeSection />
    <BotsSection />
    <ProjectsSection projects={projects} />
    <RoadmapSection />
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
