import { axiosInstace } from "@lib/axiosInstance";
import { NextRequest } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { postid: string } }
) {
    const postid = params.postid;
    const {data} = await axiosInstace.get(`/api/v1/meeting/${postid}`);
    return Response.json(data);
}