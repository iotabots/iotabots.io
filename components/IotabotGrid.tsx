import React from 'react'
import { BotCard, Grid } from '@iotabots/components'
import Image from 'next/image'
import { Box } from '@mui/material'
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
      spacing={{ xs: 2 }}
      columns={{ xs: 4, sm: 3, md: 2 }}
    >
      {' '}
      {cards.map((card) => (
        <Grid item key={card}>
            <Box sx={{cursor: 'pointer'}}>
              <BotCard
                image={
                  <Link href={`/bots/${card}`}>
                    <Image
                      src={`https://assets.iotabots.io/compressed/${card}.png`}
                      alt='IOTABOT'
                      layout='intrinsic'
                      width={100}
                      height={100}
                    />
                  </Link>
                }
                headline=''
                text={`#${card}`}
                maxWidth='100px'
                rounded
              />
            </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default IotabotGrid
