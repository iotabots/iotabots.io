import React from 'react'
import { Card, CardContent, Grid, Typography } from '@iotabots/components'
import { CardMedia } from '@mui/material'

const IotabotGrid: React.FC = () => {
  const cards = Array.from({ length: 24 }, (v, k) => k + 1)
  return (
    <Grid
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'center',
      }}
      container
      spacing={{ xs: 1, md: 1 }}
      columns={{ xs: 4, sm: 3, md: 2 }}
    >
      {' '}
      {cards.map((card, index) => (
        <Grid item key={card}>
          <Card
            sx={{
              height: '100px',
              width: '100px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              component='img'
              image={`https://assets.iotabots.io/compressed/${index + 1}.png`}
              alt='IOTABOT'
            />
            <CardContent
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                p: 2.4,
              }}
            >
              <Typography gutterBottom variant='body1'>
                {`#${index + 1}`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default IotabotGrid
