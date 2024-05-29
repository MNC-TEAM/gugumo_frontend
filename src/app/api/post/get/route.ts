import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request : NextRequest)=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const token = cookies().get('user')?.value;

    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page');
    const meetingstatus = searchParams.get('meetingstatus');
    const sort = searchParams.get('sort');
    const location = searchParams.get('location');
    const gametype = searchParams.get('gametype');
    const q = searchParams.get('q');

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const response = await axios.get(`${process.env.API_URL}/api/v1/meeting`,{
        params :{
            page,
            meetingstatus,
            q,
            location,
            gametype,
            sort
        },
        headers : {
            Authorization : token
        }
    });
    return new NextResponse(JSON.stringify(response.data));

}