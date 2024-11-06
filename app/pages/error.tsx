// pages/error.tsx
import { Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const ErrorPage: React.FC = () => {
  const router = useRouter();
  const { error } = router.query;

  return (
    <Container style={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h4">Error</Typography>
      <Typography variant="body1" color="error">
        {error ? `Error: ${error}` : 'An unexpected error occurred.'}
      </Typography>
    </Container>
  );
};

export default ErrorPage;
