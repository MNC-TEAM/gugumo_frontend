import { axiosInstace } from "@lib/axiosInstance";

export async function GET(request: Request) {

    const {data} = await axiosInstace('/api/v1/meeting');
    return Response.json(data);

}