import * as React from 'react'
import { Box, Container, Typography } from '@iotabots/components'
import BaseLayout from '../layout/BaseLayout'

const Nfts: React.FC = () => (
  <BaseLayout>
    <Box>
      <Container maxWidth='sm'>
        <Box sx={{ my: 4 }}>
          <Typography variant='h4' gutterBottom>
            Mint your NFT now for free with zero costs!
          </Typography>
        </Box>
      </Container>
    </Box>
  </BaseLayout>
)

export default Nfts
