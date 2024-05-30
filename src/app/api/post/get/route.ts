import apiClient from "@/lib/apiClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request : NextRequest,response : NextResponse)=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');
    
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page');
    const meetingstatus = searchParams.get('meetingstatus');
    const sort = searchParams.get('sort');
    const location = searchParams.get('location');
    const gametype = searchParams.get('gametype');
    const q = searchParams.get('q');
    
    const res = await apiClient.get(`/api/v1/meeting`,{
        params :{
            page,
            meetingstatus,
            q,
            location,
            gametype,
            sort
        },
    });
    return Response.json(res.data);
}