// pages/signin.tsx
import { signIn } from 'next-auth/react';
import { Button, Container, Typography } from '@mui/material';
import React from 'react';

const SignIn: React.FC = () => {
  return (
    <Container style={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h4">Sign In</Typography>
      <Typography variant="body1">Please sign in to continue</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => signIn('google')}
        style={{ marginTop: '1rem' }}
      >
        Sign in with Google
      </Button>
    </Container>
  );
};

export default SignIn;
