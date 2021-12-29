import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import {
  Box,
  Button,
  Container,
  ContentBox,
  Grid,
  Typography,
} from '@iotabots/components'
import Fade from 'react-reveal/Zoom'
import { useRouter } from 'next/router'
import BaseLayout from '../layout/BaseLayout'
import Hero from '../components/Hero'
import IotabotGrid from '../components/IotabotGrid'
import ProjectCard from '../components/ProjectCard'

export const Home = ({ projects }): JSX.Element => {
  const router = useRouter()

  const goToBots = (): void => {
    router.push('/bots')
  }
  const goToProjects = (): void => {
    router.push('/projects')
  }
  return (
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

        <Box py={8} bgcolor='background.light'>
          <Fade bottom>
            <Container maxWidth='md'>
              <Typography variant='h3' align='center' sx={{ pb: 6 }}>
                Profile Picture NFTs
              </Typography>
              <Typography variant='body1' align='center' sx={{ pb: 6 }}>
                Collect the IOTABOTS Profile Picture Non-fungible Tokens (PFP
                NFTs) and discover the Metaverse.
              </Typography>
              <IotabotGrid />
            </Container>
            <Box className='content'>
              <Box
                className='sub-content'
                sx={{
                  px: 2,
                  mt: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant='body1'
                  align='center'
                  color='#ffffff'
                  paragraph
                >
                  There are 10.000 unqiue IOTABOTS!
                </Typography>
                <Button
                  variant='contained'
                  onClick={goToBots}
                  size='large'
                  sx={{
                    color: 'primary.contrastText',
                    mt: { sm: 2 },
                    boxShadow: 2,
                  }}
                >
                  Discover All IOTABOTS
                </Button>
              </Box>
            </Box>
          </Fade>
        </Box>

        <Box py={8} bgcolor='background.default'>
          <Fade bottom>
            <Container maxWidth='md'>
              <Typography variant='h3' align='center' sx={{ pb: 6 }}>
                More Projects
              </Typography>
              <Typography variant='body1' align='center' sx={{ pb: 6 }}>
                There are serveal projects around IOTABOTS - Discover the
                Metaverse!
              </Typography>
            </Container>
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
              {projects.slice(1, 3).map((project) => (
                <Grid
                  item
                  key={project.slug}
                  style={{
                    maxWidth: '33%',
                    minWidth: '360px',
                  }}
                >
                  <ProjectCard key={project.slug} project={project} />
                </Grid>
              ))}
              <Button
                variant='contained'
                onClick={goToProjects}
                size='large'
                sx={{
                  color: 'primary.contrastText',
                  mt: { sm: 2 },
                  boxShadow: 2,
                }}
              >
                Discover All Proects
              </Button>
            </Grid>
          </Fade>
        </Box>
      </Box>
    </BaseLayout>
  )
}

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
