import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { InfiniteBotList } from '@iotabots/react-nft-components'

export default function Bots() {
  return (
    <Box sx={{bgcolor: 'IB_green.main'}} className='flex-body' display="flex" alignItems="center">
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h2" component="h1" gutterBottom>
            IOTABOTS
          </Typography>
          Coming soon...
          {/* <InfiniteBotList /> */}
        </Box>
      </Container>
    </Box>
  );
}