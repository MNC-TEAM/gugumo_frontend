import { axiosInstace } from "@lib/axiosInstance";
import { NextRequest } from "next/server";

export async function GET(request : NextRequest) {
    const {data} = await axiosInstace.get('/api/v1/member');
    return Response.json(data);
}

export async function DELETE(request : NextRequest) {
    const {data} = await axiosInstace.delete('/api/v1/member');
    return Response.json(data);
}