import apiClient from "@lib/apiClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req : NextRequest)=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const searchParams = req.nextUrl.searchParams;
    const page = searchParams.get('page');
    const q = searchParams.get('q');
    try {
        const response = await apiClient.get(`/api/v1/bookmark`,{
            params :{
                page,
                q
            }
        });
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err){
        console.log(err);
        return new NextResponse("서버 에러");
    }

}

export const POST = async (req : NextRequest)=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const body = await req.json();

    try {
        const response = await apiClient.post(`/api/v1/bookmark/new`,body);
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err){
        console.log(err);
        return new NextResponse("서버 에러");
    }

}

export const DELETE = async (req : NextRequest)=>{

    const searchParams = req.nextUrl.searchParams;
    const postId = searchParams.get('post_id');

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    try {
        const response = await apiClient.delete(`/api/v1/bookmark/${postId}`);
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err){
        console.log(err);
        return new NextResponse("서버 에러");
    }

}