import * as React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@iotabots/components'
import InfiniteScroll from 'react-infinite-scroll-component'

const BotList: React.FC = () => {
  const [items, setItems] = React.useState(
    Array.from({ length: 50 }, (v, k) => k + 1)
  )

  const fetchMoreData = (): void => {
    setItems(
      items.concat(Array.from({ length: 50 }, (v, k) => k + 1 + items.length))
    )
  }

  return (
    <InfiniteScroll
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'center',
      }}
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={items.length <= 1000}
      loader={<h4>Loading...</h4>}
    >
      {items.map((item, index) => (
        // eslint-disable-next-line react/jsx-max-props-per-line
        <Grid item key={item} xs={4} sm={3} md={2}>
          <Card
            sx={{
              minHeight: '100px',
              height: '100%',
              margin: '2px',
            }}
          >
            <CardMedia
              sx={{ height: '100%' }}
              image={`http://assets.iotabots.io/compressed/${item}.png`}
            />
            <CardContent sx={{ minHeight: '100px', flexGrow: 1 }}>
              <Typography gutterBottom variant='body1'>
                {`#${item}`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </InfiniteScroll>
  )
}

export default BotList
