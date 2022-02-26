import { Box, Card, CardContent, Grid, Typography } from '@iotabots/components'
import CardMedia from '@mui/material/CardMedia'
import Link from 'next/link'
import * as React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const FakeIotabots = ({ bots }) => (
  <Box sx={{ marginBottom: '10px' }}>
    <Typography gutterBottom variant='h4'>
      IOTABOTS
    </Typography>
    {/* eslint-disable-next-line no-nested-ternary */}
    {/* {errorRetrievingBots && (
      <Typography gutterBottom variant='h6'>
        There was an error retrieving your IOTABOTS
      </Typography>
    )} */}
    {bots?.length === 0 ? (
      <Typography gutterBottom variant='h6'>
        You don&apos;t own any IotaBots yet :(
      </Typography>
    ) : (
      <Grid container spacing={6}>
        {bots.flatMap((bot) => (
          <Grid item key={bot} xs={2} sm={3} md={4}>
            <Link href={`/bots/${bot}`}>
              <Card
                sx={{
                  minWidth: '100%',
                  cursor: 'pointer',
                  bgcolor: 'rgba(0,0,0,0.5)',
                }}
              >
                <CardMedia
                  height='100%'
                  width='100%'
                  component='img'
                  image={`https://assets.iotabots.io/compressed/${bot}.png`}
                  alt='IOTABOT'
                />
                <CardContent sx={{ p: 4, pb: '12px !important' }}>
                  <Typography variant='h4' mb={0}>
                    {`#${bot}`}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    )}
  </Box>
)

export default FakeIotabots
