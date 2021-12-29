import * as React from 'react'
import { Box, Container, Typography } from '@iotabots/components'
import Connector from '../components/Connector/Connector'
import Iotabots from '../components/iotabots'
import BaseLayout from '../layout/BaseLayout'

const Profile: React.FC = () => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  <BaseLayout>
    <Box>
      <Container maxWidth='sm'>
        <Box sx={{ my: 4 }}>
          <Typography variant='h1' gutterBottom>
            Profile
          </Typography>
          <Connector />
        </Box>
        {/* IOTABOTS NFTs */}
        <Iotabots />
      </Container>
    </Box>
  </BaseLayout>
)

export default Profile
