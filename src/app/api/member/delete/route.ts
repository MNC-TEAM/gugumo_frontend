export const DELETE = async ()=>{
    if(!process.env.API_URL) throw new Error('env 에러가 발생했습니다.');

    const res = await fetch(`${process.env.API_URL}/api/v1/member`,{
        method : "DELETE",
    });
    const json = await res.json();
    return Response.json(json);
}