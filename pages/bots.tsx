import * as React from 'react'
import {
  BotCard,
  Box,
  Container,
  Link,
} from '@iotabots/components'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'

import BaseLayout from '../layout/BaseLayout'
import BotList from '../components/BotList'
import { SEO } from '../config'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Search from '../components/Search'

const Bots: React.FC = () => {
  const [number, setNumber] = React.useState(() => null)
  const { query } = useRouter()

  const handleChange = (bot: number): void => {
    if (bot && bot > 0) {
      setNumber(bot)
    } else {
      setNumber(null)
    }
  }

  React.useEffect(() => {
    if (query.q) {
      setNumber(query.q)
    }
  }, [query])

  return (
    <BaseLayout>
      <Head>
        <title>{`${SEO.title} | Bot List`}</title>
      </Head>
      <Section>
        <SectionHeader
          title='IOTABOTS'
          subtitle='Discover all IOTABOTS or find your own.'
        />
        <Container maxWidth='md'>
          <Box mb={6}>
            <Search
              value={number}
              onChange={(e) => handleChange(parseInt(e.target.value, 10))}
            />
            {number > 0 ? (
              <Box>
                <BotCard
                  image={
                    <Link href={`/bots/${number}`}>
                      <Image
                        // eslint-disable-next-line max-len
                        src={`https://assets.iotabots.io/compressed/${number}.png`}
                        alt={`IOTABOT #${number}`}
                        layout='intrinsic'
                        width={300}
                        height={300}
                      />
                    </Link>
                  }
                  headline={`IOTABOT #${number}`}
                  text=''
                  maxWidth='300px'
                  rounded
                />
              </Box>
            ) : (
              <BotList />
            )}
          </Box>
        </Container>
      </Section>
    </BaseLayout >
  )
}
export default Bots
