"use client"
import { MypageType } from "@/app/types/mypage";
import * as S from "./style";

export default function UserInfo({mypage} : {mypage : MypageType}) {

  const imageChangeHanlder = ()=>{
    alert('회원 이미지는 준비중에 있습니다.');
  }

  return (
    <S.UserFlex>
        <S.User>
            <div style={{backgroundImage : `url(${mypage.profileImagePath})`}}></div>
            <button type="button" onClick={imageChangeHanlder}><img src="/asset/icon/edit.svg" alt="편집하기" /> 편집하기</button>
        </S.User>
        <S.UserName>
            닉네임
            <p>{mypage.nickname}</p>
        </S.UserName>
    </S.UserFlex>
  )
}