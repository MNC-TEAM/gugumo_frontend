"use client"
import * as S from "@app/(auth)/mypage/mypage.style";
import axios from "axios";
import Nickname from "@components/mypage/Form/NickName/Nickname";
import Password from "@components/mypage/Form/Password/Password";
import UserInfo from "@components/mypage/UserInfo/UserInfo";
import HashLoad from "@components/Loading/HashLoad";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMember } from "@hooks/useMember";
import { signOut } from "next-auth/react";

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
    });
    router.push('/');
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
    <>
      {
        isLoading ? <HashLoad/> :
        data?.data &&
        <S.MypageStyle>
          <S.Wrap>
              <S.Prev onClick={()=>router.push('/')}>
                <img src="/asset/icon/prev_arrow.svg" alt="뒤로가기" />
              </S.Prev>
              <S.Title>마이페이지</S.Title>
              <UserInfo mypage={data.data} nickname={nickname}/>
          </S.Wrap>
          <S.Wrap>
              <Nickname setNickname={setNickname}/>
              <Password/>
              <S.UserDelete>
                <button type="button" onClick={userDeleteHanlder}>회원탈퇴하기</button>
              </S.UserDelete>
          </S.Wrap>
        </S.MypageStyle>
      }
    </>
  )

}