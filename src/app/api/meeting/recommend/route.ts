import { axiosInstace } from "@lib/axiosInstance";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    const {data} = await axiosInstace.get('/api/v1/meeting/recommend');
    return Response.json(data);

}