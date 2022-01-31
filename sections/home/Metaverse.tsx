/* eslint-disable max-len */
import React from 'react'
import { Box } from '@mui/material'
import { Container, Grid, Section, SectionHeader, Typography } from '@iotabots/components'

const data = {
  title: 'Metaverse',
  subtitle: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik.',
  data: [
    {
      headline: 'Spacebots',
      text: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik.',
      image: '/assets/metaverse/gameboy.png',
    },
    {
      headline: 'Trading Cards',
      text: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik.',
      image: '/assets/metaverse/tradingcards.png',
    },
    {
      headline: 'IOTABOTS',
      text: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik.',
      image: '/assets/metaverse/iotabots.png',
    }
  ]
}

const Metaverse: React.FC = () => (
  <Section>
    <SectionHeader title={data.title} subtitle={data.subtitle} />
    <Container>
      <Grid container spacing={8}>
        {data.data.flatMap((item, index) => (
          <Grid
            key={item.headline}
            item
            xs={12}
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems='center'
            direction={index % 2 === 0 ? 'row' : 'row-reverse'}
          >
            <Grid item xs={12} sm={8} md={6} >
              <Typography variant='h2'
                sx={{
                  fontSize: { xs: '32px', md: '48px' },
                }}>
                {item.headline}
              </Typography>
              <Typography variant='subtitle2' color='rgba(255,255,255,0.66)'>
                {item.text}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={6}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Box
                component='img'
                src={item.image}
                sx={{ maxWidth: '100%', maxHeight: { xs: '200px', sm: '400px' } }}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Section>
)

export default Metaverse
