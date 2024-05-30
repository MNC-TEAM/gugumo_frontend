import apiClient from "@lib/apiClient";

export const GET = async ()=>{

    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    try {
        const response = await apiClient.get(`/api/v1/member`);
        return Response.json(response.data);
    }
    catch(err : any){
        console.log(err);
        return Response.json({
            status : "err",
            message : "서버 오류가 발생했습니다."
        });
    }

}