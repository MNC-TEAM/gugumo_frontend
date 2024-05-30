import apiClient from "@lib/apiClient";
import { NextRequest } from "next/server";

export const POST = async (req : NextRequest)=>{

    const body = await req.json();

    console.log(body);

    const {data} = await apiClient.post('/api/v1/comment/new',body);
    Response.json(data);

}