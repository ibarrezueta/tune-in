import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import GoogleProvider from 'next-auth/providers/google';


export default async function auth(req, res) {
    return await NextAuth(req, res, {
        providers: [
            GoogleProvider({
                clientId:process.env.G_CLIENT_ID,
                clientSecret:process.env.G_CLIENT_SECRET,
            })
        ],
        adapter: MongoDBAdapter({
            db: (await clientPromise).db('TuneInDB')
        }),
        secret: process.env.SECRET,
        session: {
            jwt: true
        },
        jwt:{

        },
        callbacks: {
            async signIn() {
                return true;
            },
            async redirect({ baseUrl }) {
                return baseUrl;
            },
            async session({ session }) {
                return session;
            },
            async jwt({ token }) {
                return token;
            }
        },
        debug: false
    });
}