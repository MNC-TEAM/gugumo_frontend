import { NextRequest } from "next/server";

export const POST = async (request : NextRequest)=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const body = await request.json();

    const res = await fetch(`${process.env.API_URL}/api/v1/login`,{
        method : "POST",
        body
    });
    const json = await res.json();
    return Response.json(json);

}