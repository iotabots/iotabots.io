/* eslint-disable max-len */
import { Web3Provider } from '@ethersproject/providers'
import {
  BaseLayout,
  Button,
  ConnectButton,
  Container,
  Grid,
  Section,
  SectionHeader,
  Typography,
} from '@iotabots/components'
import { useWeb3React } from '@web3-react/core'
import * as React from 'react'
import { useRouter } from 'next/router'
import Connector from '../components/Connector'
import FakeIotabots from '../components/FakeIotabots'
import SoonaBots from '../components/SoonaBots'
import RunBots from '../components/RunBots'
import { DISCORD_CONNECT } from '../config'

const Profile: React.FC = (props: any) => {
  const [bots, setBots] = React.useState<Array<any>>([])
  const context = useWeb3React<Web3Provider>()
  const router = useRouter()
  const { account, active } = context
  const { addresses } = props

  React.useEffect(() => {
    if (!active || !addresses?.length) {
      setBots([])
      return
    }

    // Filter bot-ids for the active address
    const iotabots = (addresses || [])
      .filter((obj) => obj?.address === account)
      .map((obj) => obj.id)
    setBots(iotabots)
  }, [account, active, addresses])

  const conntect = (): void => {
    router.push(DISCORD_CONNECT)
  }

  return (
    <BaseLayout>
      <Section>
        <SectionHeader
          title='Profile'
          subtitle='Here at your profile we will show all your NFTs from different collections.'
        />
        <Container maxWidth='md'>
          {account ? (
            <p>
              {' '}
              <Typography variant='h6' mb={0}>
                {`Welcome ${bots.length > 0 ? bots[0] : ''}!`}
              </Typography>
            </p>
          ) : (
            <ConnectButton />
          )}
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Connector bots={bots} />
              <Button onClick={conntect}>Connect Discord</Button>
            </Grid>
            <Grid item xs={12} md={8}>
              <FakeIotabots bots={bots} />
              <SoonaBots />
              <RunBots />
            </Grid>
          </Grid>
        </Container>
      </Section>
    </BaseLayout>
  )
}

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
