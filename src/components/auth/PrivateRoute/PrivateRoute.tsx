"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function PrivateRoute({children} : {children : React.ReactNode}) {

    const router = useRouter();
    const {status} = useSession();

    if(status == "unauthenticated"){
        alert('로그인을 해야합니다.');
        router.push('/');
        return null
    }
    
    if(status === "authenticated"){
        return children
    }

}
