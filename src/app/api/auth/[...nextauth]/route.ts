import { axiosInstace } from "@lib/axiosInstance";
import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions : NextAuthOptions = {
    providers : [
        CredentialsProvider({
            name : "Credentials",
            credentials : {
                username: { type: "email", placeholder: "이메일을 입력해주세요." },
                password: { type: "password",placeholder: "비밀번호를 입력해주세요." }
            },
            async authorize(credentials) : Promise<any> {
                
                if(!credentials) return null;

                try {

                    const res = await axios.post(`${process.env.API_URL}/api/v1/login`, {
                        username: credentials.username,
                        password: credentials.password,
                    });


                    if (res.headers.authorization) {
                        return {token : res.headers.authorization};
                    }

                    return null;
                } catch (error) {
                    return null;
                };

            }
        })
    ],
    callbacks : {
        async jwt({ token, user } : any) {
            if(user){
                token.accessToken = user.token;
            }
            return token;
        },
        async session({ session, token } : any){
            session.accessToken  = token.accessToken;
            return session;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }