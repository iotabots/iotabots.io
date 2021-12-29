import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@iotabots/components'
import { useRouter } from 'next/router'
import Fade from 'react-reveal/Zoom'
import ProjectCard from '../ProjectCard'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ProjectsSection = ({ projects }) => {
  const router = useRouter()

  const goToProjects = (): void => {
    router.push('/projects')
  }
  return (
    <Box py={8} bgcolor='background.default'>
      <Fade bottom>
        <Container maxWidth='md'>
          <Typography variant='h3' align='center' sx={{ pb: 6 }}>
            More Projects
          </Typography>
          <Typography variant='body1' align='center' sx={{ pb: 6 }}>
            There are serveal projects around IOTABOTS - Discover the Metaverse!
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
            {projects?.slice(1, 3).map((project) => (
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
          <Box display='flex' alignItems='center' justifyContent='center'>
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
          </Box>
        </Container>
      </Fade>
    </Box>
  )
}

export default ProjectsSection
