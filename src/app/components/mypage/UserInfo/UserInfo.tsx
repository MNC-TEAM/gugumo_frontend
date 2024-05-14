"use client"
import { MypageType } from "@/app/types/mypage";
import * as S from "./style";

export default function UserInfo({mypage} : {mypage : MypageType}) {
  return (
    <S.UserFlex>
        <S.User>
            <div style={{backgroundImage : `url(${mypage.profileImagePath})`}}></div>
            <button><img src="/asset/icon/edit.svg" alt="편집하기" /> 편집하기</button>
        </S.User>
        <S.UserName>
            닉네임
            <p>{mypage.nickname}</p>
        </S.UserName>
    </S.UserFlex>
  )
}