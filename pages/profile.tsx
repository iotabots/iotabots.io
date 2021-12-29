import * as React from 'react'
import { Box, Container, Grid, Typography } from '@iotabots/components'
import BaseLayout from '../layout/BaseLayout'
import Iotabots from '../components/iotabots'
import Connector from '../components/Connector/Connector'

const Profile: React.FC = () => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  <BaseLayout>
    <Container maxWidth='sm'>
      <Box sx={{ my: 4 }}>
        <Typography variant='h1' gutterBottom>
          Profile
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Connector />
        </Grid>

        <Grid item xs={8}>
          <Iotabots />
        </Grid>
      </Grid>
      {/* IOTABOTS NFTs */}
    </Container>
  </BaseLayout>
)

export default Profile
