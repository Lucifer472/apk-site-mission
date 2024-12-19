import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

import { LoginSchema } from "@/features/auth/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) {
          throw new Error("Invalid Fields");
        }

        const { email, password } = validatedFields.data;

        const user = await getUserByEmail({ email });

        if (!user || !user.password) {
          throw new Error("No User Found!");
        }

        if (password !== user.password) throw new Error("Invalid Password");

        return user;
      },
    }),
  ],
  pages: {
    error: "/sign-in",
    newUser: "/sign-in",
    signIn: "/sign-in",
    signOut: "/",
    verifyRequest: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
});
