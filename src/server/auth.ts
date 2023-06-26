import { eq } from "drizzle-orm";
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

import { env } from "@/env.mjs";
import { db } from "@/server/db";

import { PlanetScaleAdapter } from "./db/drizzle-adapter";
import { users } from "./db/schema";

export const authOptions: NextAuthOptions = {
  adapter: PlanetScaleAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      let dbUser;
      if (token.email) {
        dbUser = await db.query.users.findFirst({
          where: eq(users.email, token.email),
        });
      }

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
  },
};
