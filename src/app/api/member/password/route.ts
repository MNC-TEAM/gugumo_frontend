import { axiosInstace } from "@lib/axiosInstance";
import { NextRequest } from "next/server";

export async function PATCH(request : NextRequest) {
    const body = await request.json();
    const {data} = await axiosInstace.patch('/api/v1/member/updatePassword',body);
    return Response.json(data);
}