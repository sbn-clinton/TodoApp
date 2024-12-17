
import { prisma } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import Google from "next-auth/providers/google";

const adapter: Adapter = PrismaAdapter(prisma)

const authOptions: NextAuthOptions = {
  adapter,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
 
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions as options };