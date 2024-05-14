import axios from "axios";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req : NextRequest)=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');
    
    const headersList = headers();
    const token = headersList.get('authorization');
    const body = await req.json();

    console.log(body);

    try{
        const response = await axios.patch(`${process.env.API_URL}/api/v1/member/updatePassword`,body,{
            headers : {
                Authorization : token
            }
        });
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(e : any){
        const {response} = e;
        return new NextResponse(JSON.stringify(response.data));
    }

}