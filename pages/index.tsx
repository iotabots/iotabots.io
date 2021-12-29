import fs from 'fs'
import matter from 'gray-matter'
import React from 'react'
import { Box, Container, ContentBox } from '@iotabots/components'
import Fade from 'react-reveal/Zoom'
import BaseLayout from '../layout/BaseLayout'
import Hero from '../components/Hero'
import ProjectsSection from '../components/Sections/ProjectsSection'
import BotsSection from '../components/Sections/BotsSection'

export const Home = ({ projects }): JSX.Element => (
  <BaseLayout>
    <Box>
      <Hero />

      <Box py={8} bgcolor='background.default'>
        <span id='what' className='anchor' style={{ marginTop: '-100px' }} />
        <Container>
          <Fade bottom>
            <ContentBox
              image='http://assets.iotabots.io/9.png'
              // eslint-disable-next-line max-len
              text='An IOTABOT is a NFT in the form of a profile picture (PFP) that gives you access to the IOTABOTVERSE. At this time they are NFTs (ERC721 Tokens) on the public IOTA Smart Contract EVM Testnet.'
              headline='WHAT IS AN IOTABOT?!'
            />
          </Fade>
          <Fade bottom>
            <ContentBox
              image='http://assets.iotabots.io/1000.png'
              // eslint-disable-next-line max-len
              text='The IOTABOTVERSE consists of many NFT projects. Discover the metaverse and play, trade and earn with IOTABOTS and others.'
              headline='WHAT IS the IOTABOTVERSE?!'
            />
          </Fade>
        </Container>
      </Box>
      {/* BotsSection */}
      <BotsSection />

      {/* ProjectsSection */}
      <ProjectsSection projects={projects} />
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

export default Home
