import * as React from 'react'
import { Box, Container, Typography } from '@iotabots/components'
import BaseLayout from '../layout/BaseLayout'
import BotList from '../components/BotList'

const Bots: React.FC = () => (
  <BaseLayout>
    <Box py={11} display='flex' alignItems='center'>
      <Container maxWidth='sm'>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='h2' gutterBottom>
            IOTABOTS
          </Typography>
          <BotList />
        </Box>
      </Container>
    </Box>
  </BaseLayout>
)

export default Bots
