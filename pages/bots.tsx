import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { InfiniteBotList } from '@iotabots/react-nft-components'

export default function Bots() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ m: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          IOTABOTS
        </Typography>
        Coming soon...
        {/* <InfiniteBotList /> */}
      </Box>
    </Container>
  );
}