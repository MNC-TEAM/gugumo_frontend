import { axiosInstace } from "@lib/axiosInstance";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;
    const params = Object.fromEntries(searchParams);
    const {data} = await axiosInstace.get('/api/v1/bookmark',{params});
    return Response.json(data);

}

export async function POST(request: NextRequest) {

    const body = await request.json();

    const {data} = await axiosInstace.post('/api/v1/bookmark/new',body);
    return Response.json(data);

}