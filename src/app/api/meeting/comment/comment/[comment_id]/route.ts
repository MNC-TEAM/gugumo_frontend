import { axiosInstace } from "@lib/axiosInstance";
import { NextRequest } from "next/server";

export async function PATCH(
    request: NextRequest,
    { params }: { params: { comment_id: string } }
) {
    const comment_id = params.comment_id;
    const body = await request.json();
    const {data} = await axiosInstace.patch(`/api/v1/comment/${comment_id}`,body);
    return Response.json(data);
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { comment_id: string } }
) {
    const comment_id = params.comment_id;
    const {data} = await axiosInstace.delete(`/api/v1/comment/${comment_id}`);
    return Response.json(data);
}