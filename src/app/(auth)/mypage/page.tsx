"use client"
import * as S from "@/app/(auth)/mypage/style";
import Nickname from "@/app/components/mypage/Form/NickName/Nickname";
import Password from "@/app/components/mypage/Form/Password/Password";
import UserInfo from "@/app/components/mypage/UserInfo/UserInfo";
import { MypageType } from "@/app/types/mypage";
import { useAppSelector } from "@/store/hook";
import { Wrap } from "@/styles/global";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

export default function Mypage() {

  const router = useRouter();
  const user = useAppSelector(state=>state.user);
  const [mypage,setMypage] = useState<MypageType | null>(null);

  const userDeleteHanlder = ()=>{
    alert('회원탈퇴 기능은 준비중입니다.');
  }

  // 회원가져오기
  useEffect(()=>{

    axios.get('/api/member/mypage',{
      headers : {
        Authorization : user
      }
    })
    .then((res)=>{
      const {status,message,data} = res.data;

      if(status === "success"){
        setMypage(data);
      }else{
        alert(message);
      }

    })
    .catch(()=>{
      console.log('서버 에러');
    })

  },[user]);

  return (
    <>
      {
        !mypage 
        ? 
          <div style={{top : 0, left : 0, width : "100%", height : "100%", display : "flex", alignItems : "center", justifyContent : "center", background : "rgba(255,255,255,0.2)", backdropFilter : "blur(10px)"}}>
            <MoonLoader color="#574fff"></MoonLoader>
          </div>
        :
        <S.MypageStyle>
          <Wrap>
              <S.Title>
                  <button onClick={()=>router.back()}><img src="/asset/icon/prev_arrow.svg" alt="뒤로가기" /></button>
                  마이페이지
              </S.Title>
              <UserInfo mypage={mypage}/>
              <Nickname setMypage={setMypage}/>
              <Password/>
              <S.UserDelete>
                  <button onClick={userDeleteHanlder}>회원탈퇴하기</button>
              </S.UserDelete>
          </Wrap>
        </S.MypageStyle>
      }
    </>
  )
}
