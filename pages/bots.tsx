import * as React from 'react';
import BaseLayout from '../layout/BaseLayout';
import { Box, Container, Typography } from '@iotabots/components'

export default function Bots() {
  return (
    <BaseLayout>
      <Box py={11} className='flex-body' display="flex" alignItems="center">
        <Container maxWidth="sm">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h2" gutterBottom>
              IOTABOTS
            </Typography>
            Coming soon...
          </Box>
        </Container>
      </Box>
    </BaseLayout>
  );
}