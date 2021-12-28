import * as React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@iotabots/components'
import { useRouter } from 'next/router'
import Head from 'next/head'
import BaseLayout from '../../layout/BaseLayout'

interface Bot {
  attributes: Array<object>
  date: number
  description: string
  dna: string
  edition: number
  image: string
  name: string
}
const BotDetail: React.FC = () => {
  const [bot, setBot] = React.useState<Bot>(null)

  const router = useRouter()
  const { pid } = router.query
  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      const res = await fetch(`https://assets.iotabots.io/${pid}.json`)
      const data = await res.json()
      setBot(data)
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch((err: any) => {
        console.log(err)
      })
  }, [pid])
  return (
    <BaseLayout>
      <Head>
        <meta key='og:image' name='og:image' content={bot?.image} />
        <meta
          key='description'
          name='description'
          content={`Say hello to IOTABOT ${bot?.name}!`}
        />
      </Head>
      <Box>
        <Container maxWidth='sm'>
          <Box sx={{ my: 8 }}>
            <Typography variant='h4' gutterBottom>
              IOTABOT #{bot?.edition}
            </Typography>
            <Box pt={8}>
              <Card
                sx={{
                  justifyContent: 'center',
                  textAlign: 'center',

                  minHeight: '200px',
                  maxHeight: '400px',
                  minWidth: '200px',
                  maxWidth: '400px',
                }}
              >
                <CardMedia
                  sx={{
                    height: '200px',
                  }}
                  // eslint-disable-next-line max-len
                  image={`https://assets.iotabots.io/compressed/${bot?.edition}.png`}
                />
                <CardContent>
                  <Typography gutterBottom variant='body1'>
                    {`DNA ${bot?.dna}`}
                  </Typography>
                  <Typography gutterBottom variant='body1'>
                    {`Edition ${bot?.edition}`}
                  </Typography>
                  <Typography gutterBottom variant='body1'>
                    {`Created on ${new Date(bot?.date).toLocaleDateString()}`}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </BaseLayout>
  )
}

export default BotDetail
