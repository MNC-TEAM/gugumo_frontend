import apiClient from "@lib/apiClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req : NextRequest)=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');
    
    const searchParams = req.nextUrl.searchParams;
    const page = searchParams.get('page');
    const q = searchParams.get('q');

    try {
        const response = await apiClient.get(`/api/v1/meeting/my`,{
            params :{
                page,
                q
            },
        });
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err){
        console.log(err);
        return new NextResponse("서버 에러");
    }

}