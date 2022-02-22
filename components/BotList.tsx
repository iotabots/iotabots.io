/* eslint-disable max-len */
import * as React from 'react'
import { useRouter } from 'next/router'
import { BotCard, Box, Grid, Typography } from '@iotabots/components'
import InfiniteScroll from 'react-infinite-scroll-component'

const BotList: React.FC = () => {
  const [items, setItems] = React.useState(
    Array.from({ length: 42 }, (v, k) => k + 1)
  )

  const { push } = useRouter()

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
        container
        spacing={{ xs: 2 }}
      >
        {items.flatMap((item) => (
          <Grid item key={item} xs={6} sm={4} md={3}>
            <BotCard
              image={
                <Box
                  onClick={() => push(`/bots/${item}`)}
                  sx={{
                    backgroundImage: `url(http://assets.iotabots.io/compressed/${item}.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: { xs: '45vw', sm: '30vw', md: '23vw', lg: '280px' },
                    cursor: 'pointer',
                  }}
                />
              }
              maxWidth='100%'
              headline=''
              text=''
              rounded
            />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  )
}

export default BotList
