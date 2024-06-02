"use client"
import * as S from "@app/(auth)/mypage/mypage.style";
import Nickname from "@components/mypage/Form/NickName/Nickname";
import Password from "@components/mypage/Form/Password/Password";
import UserInfo from "@components/mypage/UserInfo/UserInfo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch } from "@store/hook";
import { logoutAction } from "@store/features/auth/user";
import { useMember } from "@hooks/useMember";
import HashLoad from "@components/Loading/HashLoad";

export default function page() {

  const dispatch = useAppDispatch();
  const router = useRouter();
  const [nickname,setNickname] = useState("");

  const {data,isLoading} = useMember();

  useEffect(()=>{
    if(!data) return;
    setNickname(data.data.nickname)
  },[data]);

  const userDeleteHanlder = async ()=>{

    if(confirm("정말 탈퇴하시겠습니까?")){

      axios.delete(`/api/member`)
      .then(({data})=>{

        const {status,message} = data;
  
        if(status === "success"){
          alert('회원 탈퇴가 완료 되었습니다.');
          dispatch(logoutAction());
          return router.push('/');
        }else if(status === "fail"){
          return alert(message);
        }else{
          console.error(message);
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