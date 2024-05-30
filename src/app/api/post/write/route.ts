import apiClient from "@/lib/apiClient";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req : NextRequest)=>{

    const body = await req.json();
    const headerList = headers();
    const token = headerList.get("authorization");

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    try {
        const response = await apiClient.post(`/api/v1/meeting/new`,body,{
            headers : {
                Authorization : token
            }
        });
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err : any){
        const {response} = err;
        console.log(response.data);
        return new NextResponse("서버 에러");
    }

}

export const PATCH = async (req : NextRequest)=>{

    const body = await req.json();
    const searchParams = req.nextUrl.searchParams;
    const postId = searchParams.get('postId');

    const headerList = headers();
    const token = headerList.get("authorization");

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    try {
        const response = await apiClient.patch(`/api/v1/meeting/${postId}`,body,{
            headers : {
                Authorization : token
            }
        });
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err : any){
        console.log(err);
        const {response} = err;
        return new NextResponse(JSON.stringify(response.data));
    }

}


export const DELETE = async (req : NextRequest)=>{

    const searchParams = req.nextUrl.searchParams;
    const postId = searchParams.get('post_id');

    const headerList = headers();
    const token = headerList.get("authorization");

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    try {
        const response = await apiClient.delete(`/api/v1/meeting/${postId}`,{
            headers : {
                Authorization : token
            }
        });
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err : any){
        const {response} = err;
        return new NextResponse(JSON.stringify(response.data));
    }

}