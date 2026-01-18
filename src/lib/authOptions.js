import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { addUserToDB } from "@/actions/server/users";
import bcrypt from "bcrypt";
import { collections, dbConnect } from "./dbConnect";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials, req) {
        const user = await (
          await dbConnect(collections.USERS)
        ).findOne({
          email: credentials.email,
        });
        if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
          throw new Error("Invalid email or password");
        }

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),

    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account }) {
      // Only store Google users
      if (account?.provider === "google") {
        const userInfo = {
          name: user.name,
          email: user.email,
          image: user.image,
          role: "user",
          createdAt: new Date(),
        };

        await addUserToDB(userInfo);
      }

      return true;
    },
  },
};
