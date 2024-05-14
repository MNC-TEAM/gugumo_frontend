import axios from "axios";
import { NextApiRequest } from "next";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async ()=>{

    const headersList = headers();
    const token = headersList.get('authorization');

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    try {
        const response = await axios.get(`${process.env.API_URL}/api/v1/member`,{
            headers : {
                Authorization : token
            }
        });
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err : any){
        console.log(err);
        return new NextResponse('서버 에러');
    }

}


export const PATCH = async ()=>{

    const headersList = headers();
    const token = headersList.get('authorization');

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    try {
        const response = await axios.get(`${process.env.API_URL}/api/v1/member`,{
            headers : {
                Authorization : token
            }
        });
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err : any){
        console.log(err);
        return new NextResponse('서버 에러');
    }

}