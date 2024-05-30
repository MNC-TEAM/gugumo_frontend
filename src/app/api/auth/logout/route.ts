import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const GET = async (req : NextRequest)=>{
    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const token = cookies().get('user')?.value;

    if(token){

        cookies().delete('user');

        return Response.json({
            status : "success"
        })

    }else{
        return Response.json({
            status : "fail",
            message : "로그인에 실패했습니다."
        })
    }

}