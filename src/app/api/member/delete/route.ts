import { cookies } from "next/headers"

export const DELETE = async ()=>{
    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const token = cookies().get('user')?.value;

    if(!token) return;

    const res = await fetch(`${process.env.API_URL}/api/v1/member`,{
        method : "DELETE",
        headers : {
            Authorization : token
        }
    })

    const json = await res.json();

    console.log(json);

    return Response.json(json);

}