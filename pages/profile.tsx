/* eslint-disable max-len */
import * as React from 'react'
import { Box, Container, Grid, Typography } from '@iotabots/components'
import BaseLayout from '../layout/BaseLayout'
import FakeIotabots from '../components/FakeIotabots'
import Connector from '../components/Connector/Connector'
import Section from '../components/Section'

const Profile: React.FC = (props) => (
  <BaseLayout>
    <Section>
      <Container maxWidth='md'>
        <Typography variant='h1'>Profile</Typography>
        <Typography fontSize={20} mb={6} color='rgba(255,255,255,0.75)'>
          Here at your profile we will show all your NFTs from different collections.
        </Typography>
        <Grid container spacing={2}>
          <Grid p='40px' item xs={12} md={4}>
            <Connector />
          </Grid>
          <Grid p='40px' item xs={12} md={8}>
            <FakeIotabots addresses={props} />
          </Grid>
        </Grid>
      </Container>
    </Section>
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
  for (let index = 0; index < array.length - 1; index += 1) {
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
