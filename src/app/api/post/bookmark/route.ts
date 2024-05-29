import axios from "axios";
import { cookies, headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req : NextRequest)=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const searchParams = req.nextUrl.searchParams;
    const page = searchParams.get('page');
    const q = searchParams.get('q');

    const token = cookies().get('user')?.value;

    try {
        const response = await axios.get(`${process.env.API_URL}/api/v1/bookmark`,{
            params :{
                page,
                q
            },
            headers : {
                Authorization : token
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

    const headerList = headers();
    const token = headerList.get("authorization");

    const body = await req.json();

    try {
        const response = await axios.post(`${process.env.API_URL}/api/v1/bookmark/new`,body,{
            headers : {
                Authorization : token
            }
        });
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

    const headerList = headers();
    const token = headerList.get("authorization");

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    try {
        const response = await axios.delete(`${process.env.API_URL}/api/v1/bookmark/${postId}`,{
            headers : {
                Authorization : token
            }
        });
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err){
        console.log(err);
        return new NextResponse("서버 에러");
    }

}