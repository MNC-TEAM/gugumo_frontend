import { cookies } from "next/headers";

export async function GET(request: Request) {

    try {
        cookies().delete('token');
        return Response.json({"status" : "success"});
    }
    catch{
        return Response.json({"status" : "fail","message" : "로그아웃에 실패하였습니다."});
    }

}