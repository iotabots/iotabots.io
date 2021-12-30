import React from 'react'
import { Card, CardContent, Grid, Typography } from '@iotabots/components'
import { CardMedia } from '@mui/material'
import Link from 'next/link'

const IotabotGrid: React.FC = () => {
  const cards = [
    1, 572, 3, 981, 883, 723, 929, 967, 482, 811, 541, 829, 721, 611, 711, 801,
    911, 422, 955, 855, 754, 888, 999, 1000,
  ]
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
      {cards.map((card) => (
        <Grid item key={card}>
          <Link href={`/bots/${card}`}>
            <Card
              sx={{
                height: '100px',
                width: '100px',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
            >
              <CardMedia
                component='img'
                image={`https://assets.iotabots.io/compressed/${card}.png`}
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
                  {`#${card}`}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default IotabotGrid
