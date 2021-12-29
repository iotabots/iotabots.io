import fs from 'fs'
import matter from 'gray-matter'
import React from 'react'
import { Box } from '@iotabots/components'
import BaseLayout from '../layout/BaseLayout'
import Hero from '../components/Sections/HeroSection'
import ProjectsSection from '../components/Sections/ProjectsSection'
import BotsSection from '../components/Sections/BotsSection'
import WelcomeSection from '../components/Sections/WelcomeSection'

export const Home = ({ projects }): JSX.Element => (
  <BaseLayout>
    {/* HeroSection */}
    <Hero />

    {/* WelcomeSection */}
    <WelcomeSection />

    {/* BotsSection */}
    <BotsSection />

    {/* ProjectsSection */}
    <ProjectsSection projects={projects} />
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

export default Home
