"use client"
import { useAppSelector } from '@/store/hook';
import { useRouter } from 'next/navigation';

export default function PrivateRoute({ children }: { children: React.ReactNode }) {

  const user = useAppSelector(state=>state.user);
  const router = useRouter();

  if(!user){
    alert('로그인을 하셔야합니다.');
    router.push('/');
    return <></>
  }else{

    return (
      <>
        {children}
      </>
    )

  }

}
