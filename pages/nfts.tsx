import * as React from 'react';
import BaseLayout from '../layout/BaseLayout';
import { Box, Container, Typography } from '@iotabots/components'


export default function Nfts() {
  return (
    <BaseLayout>
      <Box py={11} className='flex-body'>
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" gutterBottom>
              Mint your NFT now for free with zero costs!
            </Typography>
          </Box>
        </Container>
      </Box>
    </BaseLayout>
  );
}