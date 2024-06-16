"use client"

import * as S from "@app/(auth)/mypage/mypage.style";
import axios from "axios";
import Nickname from "@components/page/mypage/Form/NickName/Nickname";
import Password from "@components/page/mypage/Form/Password/Password";
import UserInfo from "@components/page/mypage/UserInfo/UserInfo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMember } from "@hooks/useMember";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Page() {

  const router = useRouter();
  const [nickname,setNickname] = useState("");

  const {data,isLoading} = useMember();

  useEffect(()=>{
    if(!data) return;
    setNickname(data.data.nickname)
  },[data]);

  const logOutHanlder = ()=>{
    signOut({
      redirect : false,
      callbackUrl : "/"
    });
  }

  const userDeleteHanlder = async ()=>{

    if(confirm("정말 탈퇴하시겠습니까?")){

      axios.delete(`/api/member`)
      .then(({data})=>{

        const {status,message} = data;
  
        if(status === "success"){
          alert('회원 탈퇴가 완료 되었습니다.');
          logOutHanlder();
        }else if(status === "fail"){
          return alert(message);
        }

      });
      
    }

  }

  return (
    <S.MypageStyle>
      <S.Wrap>
          <S.Prev onClick={()=>router.push('/')}>
            <Image src="/asset/icon/prev_arrow.svg" alt="뒤로가기" width={20} height={18} />
          </S.Prev>
          <S.Title>마이페이지</S.Title>
          <UserInfo isLoading={isLoading} nickname={nickname}/>
      </S.Wrap>
      <S.Wrap>
          <Nickname isLoading={isLoading} setNickname={setNickname}/>
          <Password isLoading={isLoading} />
          {
            !isLoading &&
            <S.UserDelete>
              <button type="button" onClick={userDeleteHanlder}>회원탈퇴하기</button>
            </S.UserDelete>
          }
      </S.Wrap>
    </S.MypageStyle>
  )

}