import apiClient from "@lib/apiClient";
import { cookies } from "next/headers";

export const DELETE = async ()=>{
    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');
    
    try {
        const res = await apiClient.delete(`/api/v1/member`);
        if(res){
            cookies().delete("user");
        }
        return Response.json(res.data);
    }
    catch(err){
        console.log(err);
        return Response.json({
            status : "err",
            message : "서버 오류가 발생했습니다."
        });
    }

}