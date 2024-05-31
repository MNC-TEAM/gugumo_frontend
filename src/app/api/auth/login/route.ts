import { axiosInstace } from "@lib/axiosInstance";
import { cookies } from "next/headers";

export async function POST(request: Request) {

    const body = await request.json();

    try {
        const res = await axiosInstace.post('/api/v1/login',body);
        cookies().set("token",res.headers.authorization,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            // maxAge: 60 * 60 * 24 * 7, // One week
            path: '/',
        })
        return Response.json({
            "status": "success",
        });
    }
    catch(err : any){
        const {response} = err;
        return Response.json(response.data);
    }

}