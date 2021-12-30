import * as React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@iotabots/components'
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
      hasMore={items.length <= 1000}
      loader={<p>Loading...</p>}
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
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 3, md: 2 }}
      >
        {items.map((item) => (
          // eslint-disable-next-line react/jsx-max-props-per-line
          <Grid item key={item}>
            <Link href={`/bots/${item}`}>
              <Card
                sx={{
                  padding: '2px',
                  cursor: 'pointer',
                }}
              >
                <CardMedia
                  sx={{
                    height: '100px',
                    width: '100px',
                  }}
                  image={`http://assets.iotabots.io/compressed/${item}.png`}
                />
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  )
}

export default BotList
