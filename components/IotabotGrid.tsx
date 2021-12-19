import React from 'react'
import { Card, CardContent, Grid, Typography } from '@iotabots/components'
import { CardMedia } from '@mui/material'

const IotabotGrid: React.FC = () => {
  const cards = [0, 1, 2, 3, 4, 5]
  return (
    <Grid container spacing={6}>
      {cards.map((card, index) => (
        <Grid item
          key={card}
          xs={12}
          sm={6}
          md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
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
              <Typography gutterBottom variant='h6'>
                {`IOTABOT #${index + 1}`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default IotabotGrid
