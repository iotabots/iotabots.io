import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Connnector from '../components/Connector/Connnector'

export default function Profile() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Profile
        </Typography>
        <Connnector />
      </Box>
    </Container>
  );
}