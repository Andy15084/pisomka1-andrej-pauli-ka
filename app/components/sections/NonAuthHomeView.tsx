"use client";
import { Container, Typography, Button } from "@mui/material";
import { signIn } from "next-auth/react"; // Import signIn function

export default function NonAuthHomeView() {
  const handleLoginWithGoogle = () => {
    signIn('google'); // Pass 'google' to the signIn function
  };

  return (
    <Container>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Domovská stránka - user neprihlaseny
      </Typography>
      <Typography>
        Registrujte sa
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2 }} 
        onClick={handleLoginWithGoogle} // Attach click handler for Google login
      >
        Prihlásiť sa cez Google
      </Button>
    </Container>
  );
}