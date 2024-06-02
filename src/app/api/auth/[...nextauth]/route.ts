import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
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
    ]
})

export { handler as GET, handler as POST }