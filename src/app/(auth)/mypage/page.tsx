
import MypageBase from "@/app/components/mypage/MypageBase/MypageBase";
import { cookies } from "next/headers";

export default async function Mypage() {

  const token = cookies().get('user')?.value;
  if(!token) return;
  const res = await fetch(`${process.env.API_URL}/api/v1/member`,{
    headers : {
      Authorization : token
    }
  });
  const {status,message,data} = await res.json();

  return (
    <MypageBase data={data}/>
  )
}