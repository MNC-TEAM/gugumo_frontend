"use client";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivateRouter({children} : {children : React.ReactNode}){

  const {data} = useSession();
  const router = useRouter();

  useEffect(()=>{
    if(!data){
      alert("로그인을 해야합니다.");
      return router.push('/');
    }
  },[data,router]);

  return (
    <>{children}</>
  )
}
