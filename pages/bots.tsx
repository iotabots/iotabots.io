import * as React from 'react'
import {
  BotCard,
  Box,
  Container,
  Input,
  Link,
  Typography,
} from '@iotabots/components'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { TextField } from '@mui/material'
import BaseLayout from '../layout/BaseLayout'
import BotList from '../components/BotList'
import { SEO } from '../config'
import Section from '../components/Section'

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
        <Container maxWidth='md'>
          <Typography variant='h1' mb={3}>IOTABOTS</Typography>
          <Typography fontSize={20} mb={6} color='text.secondary'>
            Discover all IOTABOTS.
          </Typography>
          <Box mt={6} mb={6}>
            <TextField
              variant='filled'
              placeholder='Search by number'
              size='medium'
              fullWidth
              autoFocus
              type='number'
              value={number}
              onChange={(e) => handleChange(parseInt(e.target.value, 10))}
              sx={{
                mb: 6,
                '& .MuiFilledInput-input ': {
                  bgcolor: 'rgba(0,0,0,0.5)',
                  borderRadius: '8px',
                }
              }}
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
