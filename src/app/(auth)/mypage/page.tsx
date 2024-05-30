"use client"
import * as S from "@app/(auth)/mypage/mypage.style";
import Nickname from "@components/mypage/Form/NickName/Nickname";
import Password from "@components/mypage/Form/Password/Password";
import UserInfo from "@components/mypage/UserInfo/UserInfo";
import { MypageType } from "@/types/mypage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { logoutAction } from "@store/features/auth/user";

export default function Mypage() {

  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector(state=>state.user);
  const [mypage,setMypage] = useState<MypageType | null>(null);
  const [nickname,setNickname] = useState("");

  useEffect(()=>{

    axios.get('/api/member/mypage')
    .then((res)=>{
      const {status,message,data} = res.data;

      if(status === "success"){
        setMypage(data);
        setNickname(data.nickname);
      }else if(status === "fail"){
        return alert(message);
      }else{
        console.error(message);
      }

    })

  },[user]);

  const userDeleteHanlder = async ()=>{

    if(confirm("정말 탈퇴하시겠습니까?")){

      const res = await axios.delete(`/api/member/delete`);

      const {status,message} = res.data;
  
      if(status === "success"){
        alert('회원 탈퇴가 완료 되었습니다.');
        dispatch(logoutAction());
        return router.push('/');
      }else if(status === "fail"){
        return alert(message);
      }else{
        console.error(message);
      }

    }

  }

  return (
    <>
      {
        mypage &&
        <S.MypageStyle>
          <S.Wrap>
              <S.Prev onClick={()=>router.back()}><img src="/asset/icon/prev_arrow.svg" alt="뒤로가기" /></S.Prev>
              <S.Title>마이페이지</S.Title>
              <UserInfo mypage={mypage} nickname={nickname}/>
          </S.Wrap>
          <S.Wrap>
              <Nickname setNickname={setNickname}/>
              <Password/>
              <S.UserDelete>
                <button onClick={userDeleteHanlder}>회원탈퇴하기</button>
              </S.UserDelete>
          </S.Wrap>
        </S.MypageStyle>
      }
    </>
  )

}