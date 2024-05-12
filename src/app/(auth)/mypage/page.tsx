"use client"
import * as S from "@/app/(auth)/mypage/style";
import Nickname from "@/app/components/mypage/Form/NickName/Nickname";
import Password from "@/app/components/mypage/Form/Password/Password";
import UserInfo from "@/app/components/mypage/UserInfo/UserInfo";
import { useAppSelector } from "@/store/hook";
import { Wrap } from "@/styles/global";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Mypage() {

  const router = useRouter();
  const user = useAppSelector(state=>state.user);

  useEffect(()=>{

    axios.get('/api/member/mypage',{
      headers : {
        Authorization : `${user}`
      }
    })
    .then(({data})=>{
      console.log(data);
    })
    .catch(()=>{
      console.log('서버 에러');
    })

  },[user]);

  return (
    <S.MypageStyle>
        <Wrap>
            <S.Title>
                <button onClick={()=>router.back()}><img src="/asset/icon/prev_arrow.svg" alt="뒤로가기" /></button>
                마이페이지
            </S.Title>
            <UserInfo/>
            <Nickname/>
            <Password/>
            <S.UserDelete>
                <button>회원탈퇴하기</button>
            </S.UserDelete>
        </Wrap>
    </S.MypageStyle>
  )
}
