// pages/index.tsx
import { Button, Container, Typography } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <Container style={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h4">Welcome to Our App</Typography>
      {session ? (
        <>
          <Typography variant="h6">Hello, {session.user?.name}!</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => signOut()}
            style={{ marginTop: '1rem' }}
          >
            Sign Out
          </Button>
        </>
      ) : (
        <>
          <Typography variant="body1" style={{ marginBottom: '1rem' }}>
            Please sign in to continue
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => signIn('google')}
          >
            Sign in with Google
          </Button>
        </>
      )}
    </Container>
  );
};

export default Home;
