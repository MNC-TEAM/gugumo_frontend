"use client"
import { useAppSelector } from '@/store/hook';
import { useRouter } from 'next/navigation';

export default function PrivateRoute({ children }: { children: React.ReactNode }) {

  const user = useAppSelector(state=>state.user);
  const router = useRouter();

<<<<<<< Updated upstream
  if(!user){
    alert('로그인을 하셔야합니다.');
    router.push('/');
  } 
=======
    if(!user){
      alert('로그인을 하셔야합니다.');
      router.push('/');
    } 
>>>>>>> Stashed changes

  return (
    <>
      {children}
    </>
  )
}
