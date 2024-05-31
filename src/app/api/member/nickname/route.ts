import { axiosInstace } from "@lib/axiosInstance";
import { NextRequest } from "next/server";

export async function GET(request : NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const changeNickname = searchParams.get('nickname');
    const {data} = await axiosInstace.get(`/api/v1/member/checkDuplicateNickname?nickname=${changeNickname}`);
    return Response.json(data);
}

export async function PATCH(request : NextRequest) {
    const body = await request.json();
    const {data} = await axiosInstace.patch('/api/v1/member/updateNickname',body);
    return Response.json(data);
}