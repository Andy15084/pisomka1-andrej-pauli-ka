// pages/goodbye.tsx
import { Container, Typography } from '@mui/material';
import React from 'react';

const Goodbye: React.FC = () => {
  return (
    <Container style={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h4">Goodbye!</Typography>
      <Typography variant="body1">
        You have successfully signed out. See you next time!
      </Typography>
    </Container>
  );
};

export default Goodbye;
