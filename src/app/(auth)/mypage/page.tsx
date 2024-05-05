"use client"
import * as S from "@/app/(auth)/mypage/style";
import Nickname from "@/app/components/mypage/Form/NickName/Nickname";
import Password from "@/app/components/mypage/Form/Password/Password";
import UserInfo from "@/app/components/mypage/UserInfo/UserInfo";
import { Wrap } from "@/styles/global";
import { useRouter } from "next/navigation";

export default function Mypage() {

  const router = useRouter();

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
