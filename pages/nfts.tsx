import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// import { Button } from '@iotabots/react-nft-components';

export default function Nfts() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Mint your NFT now for free with zero costs!
        </Typography>
        {/* <Button
          label="MintButton"
          onClick={() => { console.log("Creating NFT...") }}
          primary
        /> */}
      </Box>
    </Container>
  );
}