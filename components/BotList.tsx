import * as React from 'react'
import { BotCard, Box, Grid, Typography } from '@iotabots/components'
import Image from 'next/image'
import InfiniteScroll from 'react-infinite-scroll-component'
import Link from 'next/link'

const BotList: React.FC = () => {
  const [items, setItems] = React.useState(
    Array.from({ length: 42 }, (v, k) => k + 1)
  )

  const fetchMoreData = (): void => {
    setItems(
      items.concat(Array.from({ length: 24 }, (v, k) => k + 1 + items.length))
    )
  }

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={items.length <= 1050}
      loader={
        <Box my={6}>
          <Typography textAlign='center' variant='body1'>
            Loading...
          </Typography>
        </Box>
      }
    >
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
        {items.map((item) => (
          <Grid item key={item}>
            <Box sx={{ cursor: 'pointer' }}>
              <BotCard
                image={
                  <Link href={`/bots/${item}`}>
                    <Image
                      src={`http://assets.iotabots.io/compressed/${item}.png`}
                      alt='IOTABOT'
                      layout='intrinsic'
                      width={100}
                      height={100}
                    />
                  </Link>
                }
                headline=''
                text=''
                maxWidth='100px'
                rounded
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  )
}

export default BotList
