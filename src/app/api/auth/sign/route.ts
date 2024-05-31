import { axiosInstace } from "@lib/axiosInstance"
import { NextRequest } from "next/server"

export const POST = async (req : NextRequest)=>{

    const body = await req.json();
    const {data} = await axiosInstace.post('/api/v2/member',body);
    return Response.json(data);

}