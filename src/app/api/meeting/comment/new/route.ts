import { axiosInstace } from "@lib/axiosInstance";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const {data} = await axiosInstace.post('/api/v1/comment/new',body);
    return Response.json(data);
}