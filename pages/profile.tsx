import * as React from 'react'
import { Box, Container, Grid, Typography } from '@iotabots/components'
import BaseLayout from '../layout/BaseLayout'
import FakeIotabots from '../components/FakeIotabots'
import Connector from '../components/Connector/Connector'

const Profile: React.FC = (props) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  <BaseLayout>
    <Container maxWidth='md'>
      <Box sx={{ my: 4 }}>
        <Typography m='50px 0' variant='h1' gutterBottom>
          Profile
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid p='40px' item xs={12} md={4}>
          <Connector />
        </Grid>

        <Grid p='40px' item xs={12} md={8}>
          <Typography variant='h3' gutterBottom>
            Your NFTs
          </Typography>
          <FakeIotabots addresses={props} />
        </Grid>
      </Grid>
      {/* IOTABOTS NFTs */}
    </Container>
  </BaseLayout>
)
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getStaticProps() {
  const URL =
    'https://raw.githubusercontent.com/iotabots/save-the-bots/main/all.txt'

  const res = await fetch(URL)
  const data = await res.text()

  const airdropAddresses: Array<any> = []

  if (!data) {
    return {
      notFound: true,
    }
  }

  const array = data.split('\n')
  // for (var i = 0; i < array.length; i++) {
  for (let index = 0; index < 1001; index += 1) {
    const botData = array[index].split(':')
    const obj = {
      id: botData[0],
      address: botData[1],
    }
    airdropAddresses.push(obj)
  }

  return {
    props: { addresses: airdropAddresses },
  }
}

export default Profile
