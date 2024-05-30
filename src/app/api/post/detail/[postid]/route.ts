import apiClient from "@/lib/apiClient";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request : NextRequest,{ params }: { params: { postid: string } })=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const postId = params.postid;
    const headerList = headers();
    const token = headerList.get("authorization");

    try {
        const response = await apiClient.get(`/api/v1/meeting/${postId}`,{
            headers : {
                Authorization : token
            }
        });
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err){
        return new NextResponse('서버 에러');
    }

}