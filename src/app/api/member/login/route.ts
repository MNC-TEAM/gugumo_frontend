import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request : NextRequest)=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const body = await request.json();

    try {
        const response = await axios.post(`${process.env.API_URL}/api/v1/login`,body)
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err){
        console.log(err);
        return new NextResponse("server error");
    }

}