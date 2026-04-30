import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ROUTES } from "@/constants";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (
          credentials?.password === "Abcd1234" &&
          credentials?.email === "testUser@test.com"
          
        ) {
          return {
            id: "1",
            email: credentials.email,
            name: "John Doe",
          };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: ROUTES.LOGIN,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session.user = token.user as any;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};