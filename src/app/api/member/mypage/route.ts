import axios from "axios";
import { NextResponse } from "next/server";
export const GET = async ()=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    try {
        const response = await axios.post(`${process.env.API_URL}/api/v1/member`);
    }
    catch(err : any){
        return new NextResponse('서버 에러');
    }

}