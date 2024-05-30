import { axiosInstace } from "@lib/axiosInstance";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;
    const params = Object.fromEntries(searchParams);
    const {data} = await axiosInstace.get('/api/v1/meeting',{params});
    return Response.json(data);

}