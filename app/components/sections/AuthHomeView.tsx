// src/sections/AuthHomeView.tsx
"use client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"; // Import Button
import { signOut } from "next-auth/react"; // Import signOut function
import { Session } from "next-auth";

export default function AuthHomeView({ session }: { session: Session }) {

  const handleLogout = () => {
    signOut(); // Call signOut function
  };

  return (
    <Container>
      <Typography> Domovská stránka - user prihlaseny
      </Typography>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Vitajte, {session?.user?.name || "užívateľ"}!
      </Typography>

      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleLogout} // Attach click handler for logout
      >
        Odhlásiť sa
      </Button>
    </Container>
  );
}
