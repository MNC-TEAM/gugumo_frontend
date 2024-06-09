"use client"
import * as S from "@app/(auth)/mypage/mypage.style";
import Nickname from "@components/page/mypage/Form/NickName/Nickname";
import Password from "@components/page/mypage/Form/Password/Password";
import UserInfo from "@components/page/mypage/UserInfo/UserInfo";
import { MypageType } from "@/types/mypage";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MypageBase({data} : {data : MypageType}) {

  const router = useRouter();
  const [nickname,setNickname] = useState(data.nickname);
  const userDeleteHanlder = async ()=>{

    const res = await fetch(`/api/member/delete`,{
      method : "DELETE",
    });

    const {status,message} = await res.json();

    if(status === "success"){
      alert('회원 탈퇴가 완료 되었습니다.');
      router.push('/');
    }else{
      alert(message);
    }

  }

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
