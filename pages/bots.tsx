import * as React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Input,
  Typography,
} from '@iotabots/components'
import Head from 'next/head'
import BaseLayout from '../layout/BaseLayout'
import BotList from '../components/BotList'
import { SEO } from '../config'

const Bots: React.FC = () => {
  const [number, setNumber] = React.useState(() => null)

  const handleChange = (bot: number): void => {
    if (bot && bot > 0) {
      setNumber(bot)
    } else {
      setNumber(null)
    }
  }

  return (
    <BaseLayout>
      <Head>
        <title>{`${SEO.title} | Bot List`}</title>
      </Head>
      <Box py={6} display='flex' alignItems='center'>
        <Container maxWidth='md'>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography gutterBottom variant='h1'>
              IOTABOTS
            </Typography>
            <Typography variant='body1'>Discover all IOTABOTS.</Typography>
            <Box mt={6} mb={6}>
              <Typography gutterBottom variant='body1'>
                Search with Number:
              </Typography>
              <Input
                autoFocus
                type='number'
                value={number}
                onChange={(e) => handleChange(parseInt(e.target.value, 10))}
              />
            </Box>
            {number > 0 ? (
              <Box pt={8}>
                <Card
                  sx={{
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  <CardMedia
                    sx={{
                      minHeight: '280px',
                      maxHeight: '480px',
                      minWidth: '280px',
                      maxWidth: '480px',
                    }}
                    // eslint-disable-next-line max-len
                    image={`https://assets.iotabots.io/compressed/${number}.png`}
                  />
                  <CardContent />
                  <Typography gutterBottom variant='body1'>
                    {`IOTABOT #${number}`}
                  </Typography>
                </Card>
              </Box>
            ) : (
              <BotList />
            )}
          </Box>
        </Container>
      </Box>
    </BaseLayout>
  )
}
export default Bots
