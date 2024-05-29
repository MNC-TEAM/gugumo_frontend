"use client"
import * as S from "@/app/(auth)/mypage/mypage.style";
import Nickname from "@/app/components/mypage/Form/NickName/Nickname";
import Password from "@/app/components/mypage/Form/Password/Password";
import UserInfo from "@/app/components/mypage/UserInfo/UserInfo";
import { MypageType } from "@/app/types/mypage";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MypageBase({data} : {data : MypageType}) {

  const router = useRouter();
  const userDeleteHanlder = ()=>{
    alert('회원탈퇴 기능은 준비중입니다.');
  }

  const [nickname,setNickname] = useState(data.nickname);

  return (
    <S.MypageStyle>
        <S.Wrap>
            <S.Prev onClick={()=>router.back()}><img src="/asset/icon/prev_arrow.svg" alt="뒤로가기" /></S.Prev>
            <S.Title>마이페이지</S.Title>
            <UserInfo mypage={data} nickname={nickname}/>
        </S.Wrap>
        <S.Wrap>
            <Nickname setNickname={setNickname}/>
            <Password/>
            <S.UserDelete>
                <button onClick={userDeleteHanlder}>회원탈퇴하기</button>
            </S.UserDelete>
        </S.Wrap>
    </S.MypageStyle>
  )
}
