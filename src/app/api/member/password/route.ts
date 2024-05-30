import apiClient from "@/lib/apiClient";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req : NextRequest)=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');
    const body = await req.json();

    try{
        const response = await apiClient.patch(`/api/v1/member/updatePassword`,body);
        return new NextResponse(JSON.stringify(response.data));
    }
    catch(e : any){
        const {response} = e;
        return new NextResponse(JSON.stringify(response.data));
    }

}