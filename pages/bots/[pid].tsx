import * as React from 'react'
import { BotCard, Box, Container, Typography } from '@iotabots/components'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import BaseLayout from '../../layout/BaseLayout'

interface BotAttribute {
  // eslint-disable-next-line camelcase
  trait_type: string
  value: string
}
interface Bot {
  attributes: Array<BotAttribute>
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <BotCard
              image={
                <Image
                  // eslint-disable-next-line max-len
                  src={`https://assets.iotabots.io/compressed/${bot?.edition}.png`}
                  alt='IOTABOT'
                  layout='intrinsic'
                  width={400}
                  height={400}
                />
              }
              headline={`IOTABOT #${bot?.edition}`}
              text=''
              maxWidth='400px'
              rounded
            >
              <Typography gutterBottom variant='body1'>
              {`DNA ${bot?.dna}`}
              </Typography>
              <Typography gutterBottom variant='body1'>
                {`Edition ${bot?.edition}`}
              </Typography>
              <Typography gutterBottom variant='body1'>
                {`Created on ${new Date(bot?.date).toLocaleDateString()}`}
              </Typography>
              {bot?.attributes.map((attribute) => (
                <Typography gutterBottom variant='body1'>
                  {`${attribute.trait_type}: ${attribute.value}`}
                </Typography>
              ))}
            </BotCard>
          </Box>
        </Container>
      </Box>
    </BaseLayout>
  )
}

export default BotDetail
