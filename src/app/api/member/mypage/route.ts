import apiClient from "@/lib/apiClient";
import { NextResponse } from "next/server";

export const GET = async ()=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    try {
        const response = await apiClient.get(`/api/v1/member`);
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err : any){
        console.log(err);
        return new NextResponse('서버 에러');
    }

}


export const PATCH = async ()=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    try {
        const response = await apiClient.get(`/api/v1/member`);
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(err : any){
        console.log(err);
        return new NextResponse('서버 에러');
    }

}