import axios from "axios";
import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req : NextRequest)=>{

    const searchParams = req.nextUrl.searchParams;
    const page = searchParams.get('page');
    const q = searchParams.get('q');

    const headerList = headers();
    const token = headerList.get("authorization");

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    try {
        const response = await axios.get(`${process.env.API_URL}/api/v1/meeting/my`,{
            params :{
                page,
                q
            },
            headers : {
                Authorization : token
            }
        });
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err){
        console.log(err);
        return new NextResponse("서버 에러");
    }

}