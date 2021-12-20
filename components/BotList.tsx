import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InfiniteScroll from 'react-infinite-scroll-component'

const BotList: React.FC = () => {
  let items = Array.from({ length: 20 }, (v, k) => k + 1)

  const fetchMoreData = (): void => {
    items = items.concat(
      Array.from({ length: 20 }, (v, k) => k + 1 + items.length)
    )
  }

  return (
    <InfiniteScroll
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
      }}
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={!(items.length >= 1000)}
      loader={<h4>Loading...</h4>}
    >
      {items.map((item, index) => (
        // eslint-disable-next-line react/jsx-max-props-per-line
        <Grid item key={item} xs={12} sm={6} md={4}>
          <Card
          // sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              height='100%'
              component='img'
              image={`http://assets.iotabots.io/compressed/${index + 1}.png`}
              alt='IOTABOT'
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant='h6' component='h3'>
                {`IOTABOT #${index + 1}`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </InfiniteScroll>
  )
}

export default BotList
