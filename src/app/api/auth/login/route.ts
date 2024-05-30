import apiClient from "@/lib/apiClient";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const POST = async (req : NextRequest)=>{
    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const body = await req.json();

    try {

        const res = await apiClient.post(`/api/v1/login`,body);
        cookies().set('user',res.headers.authorization,{
            httpOnly : true,
            maxAge: 60 * 60 * 24 * 1,
            path : "/",
            secure : process.env.NODE_ENV === 'production',
        })
        return Response.json({
            status : "success",
            token : res.headers.authorization
        });
        
    }catch(err : any){
        const {response} = err;
        return Response.json(response.data);
    }

}