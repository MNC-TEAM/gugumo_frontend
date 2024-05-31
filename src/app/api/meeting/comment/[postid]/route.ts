import { axiosInstace } from "@lib/axiosInstance";
import { NextRequest } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { postid: string } }
) {
    const post_id = params.postid;
    const {data} = await axiosInstace.get(`/api/v1/comment/${post_id}`);
    return Response.json(data);
}