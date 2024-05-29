import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const POST = async (request : NextRequest)=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const body = await request.json();

    // const response = await axios.post(`${process.env.API_URL}/api/v1/login`,body);

    const res = await fetch(`${process.env.API_URL}/api/v1/login`,{
        method: "POST",
        body : JSON.stringify(body),
        headers : {
            "Content-Type": "application/json",
        }
    });

    if(res.status === 200){
        const token = res.headers.get('authorization');
        if(!token) return Response.json({status : "fail",message : "오류가 발생했습니다"});
        cookies().set('user',token,{
            httpOnly : true,
            maxAge: 60 * 60 * 24 * 1,
            path: '/',
        });
        return Response.json({status : "success"});
    }else{
        const json = await res.json();
        return Response.json(json);
    }

}