import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";

import { connectToDB } from "../../../../utils/database"
import Users from "../../../../models/user"
import mongoose from "mongoose"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            httpOptions: {
                timeout: 40000
            }
        }),
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await Users.findOne({ email: session.user.email });
            session.user.id = sessionUser._id.toString();

            return session;
        },
        async signIn({ account, profile, user, credentials }) {
            try {
                console.log(profile)
                console.log(account)
                await connectToDB();
                // await mongoose.connect(process.env.MONGODB_URI, { dbName: "Author-It", useNewUrlParser: true, useUnifiedTopology: true })
                //     .then(() => console.log("Connected to MongoDB 😀"))

                // check if user already exists
                const userExists = await Users.findOne({ email: profile.email });

                // if not, create a new document and save user in MongoDB
                if (!userExists) {
                    await Users.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase() || profile.login.replace(" ", "").toLowerCase(),
                        image: profile.picture || profile.avatar_url,
                    });
                }

                return true
            } catch (error) {
                console.log("Error checking if user exists: ", error.message);
                return false
            }
        }
    },
    // session: {
    //     maxAge: 60 * 60 * 24 * 28
    // }
})

export { handler as GET, handler as POST }

// https://www.youtube.com/watch?v=wm5gMKuwSYk&pp=ygUGbmV4dGpz