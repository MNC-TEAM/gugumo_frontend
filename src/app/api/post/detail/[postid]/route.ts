import apiClient from "@lib/apiClient";
import { NextRequest } from "next/server"

export const GET = async (request : NextRequest,{ params }: { params: { postid: string } })=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const postId = params.postid;

    try {
        const response = await apiClient.get(`/api/v1/meeting/${postId}`);
        return Response.json(response.data);
    }
    catch(err){
        return Response.json({
            status : "fail",
            message : "서버 오류가 발생했습니다."
        });
    }

}