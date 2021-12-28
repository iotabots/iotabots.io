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
import BaseLayout from '../../layout/BaseLayout'

const BotDetail: React.FC<any> = ({ bot }) => (
  <BaseLayout>
    <Box>
      <Container maxWidth='sm'>
        <Box sx={{ my: 8 }}>
          <Typography variant='h4' gutterBottom>
            IOTABOT #{bot.edition}
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
                image={`https://assets.iotabots.io/compressed/${bot.edition}.png`}
              />
              <CardContent />
              <Typography gutterBottom variant='body1'>
                {`IOTABOT #${bot.edition}`}
              </Typography>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  </BaseLayout>
)
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getServerSideProps({ params }) {
  if (Number(params.pid)) {
    const res = await fetch(`https://assets.iotabots.io/${params.pid}.json`)
    const data = await res.json()

    return {
      props: { bot: data },
    }
  }

  return { props: params }
}
export default BotDetail
