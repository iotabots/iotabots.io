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

const BotDetail: React.FC = () => {
  const router = useRouter()

  console.log('router', router.query)
  const { pid } = router.query

  return (
    <BaseLayout>
      <Box>
        <Container maxWidth='sm'>
          <Box sx={{ my: 8 }}>
            <Typography variant='h4' gutterBottom>
              IOTABOT #{pid}
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
                  image={`https://assets.iotabots.io/compressed/${pid}.png`}
                />
                <CardContent />
                <Typography gutterBottom variant='body1'>
                  {`IOTABOT #${pid}`}
                </Typography>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </BaseLayout>
  )
}

export default BotDetail
