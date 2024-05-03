"use client"
import * as S from "@/app/(auth)/mypage/style";
import { Wrap } from "@/app/components/main/style";
import Nickname from "@/app/components/mypage/nickname";
import Password from "@/app/components/mypage/password";

export default function Mypage() {
  return (
    <S.MypageStyle>
        <Wrap>
            <S.HTitle>마이페이지</S.HTitle>

            <S.UserFlex>
                <S.User>
                    <div></div>
                    <button><img src="/asset/icon/edit.svg" alt="편집하기" /> 편집하기</button>
                </S.User>
                <S.UserName>
                    닉네임
                    <p>abc1234@naver.com</p>
                </S.UserName>
            </S.UserFlex>

            <Nickname/>

            <Password/>

            <S.UserDelete>
                <button>회원탈퇴하기</button>
            </S.UserDelete>

        </Wrap>
    </S.MypageStyle>
  )
}
