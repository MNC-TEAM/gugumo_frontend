import { axiosInstace } from "@lib/axiosInstance";
import { NextRequest } from "next/server";

export async function DELETE(
    request: NextRequest,
    { params }: { params: { postid: string } }
) {

    const postid = params.postid;
    const {data} = await axiosInstace.delete(`/api/v1/bookmark/${postid}`);
    return Response.json(data);

}