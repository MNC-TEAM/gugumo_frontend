import axios from "axios";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request : NextRequest)=>{

    const searchParams = request.nextUrl.searchParams;
    const meetingstatus = searchParams.get('meetingstatus');
    const location = searchParams.get('location');
    const gametype = searchParams.get('gametype');
    const q = searchParams.get('q');

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    try {
        const response = await axios.get(`${process.env.API_URL}/api/v1/meeting`,{
            params :{
                q,
                meetingstatus,
                location,
                gametype
            }
        });
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err){
        console.log(err);
        return new NextResponse('서버 에러');
    }

}