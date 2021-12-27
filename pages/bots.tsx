import * as React from 'react'
import { Box, Container, Typography } from '@iotabots/components'
import BaseLayout from '../layout/BaseLayout'
import BotList from '../components/BotList'

const Bots: React.FC = () => (
  <BaseLayout>
    <Box py={6} display='flex' alignItems='center'>
      <Container maxWidth='md'>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography gutterBottom variant='h1'>
            IOTABOTS
          </Typography>
          <Typography variant='body1'>Discover all IOTABOTS.</Typography>
          <BotList />
        </Box>
      </Container>
    </Box>
  </BaseLayout>
)

export default Bots
