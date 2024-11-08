// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin',    // stránka pre prihlásenie
    signOut: '/goodbye',  // stránka po odhlásení
    error: '/error',      // stránka pri chybe
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
});
