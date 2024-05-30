"use client"
import * as S from "./style";
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from "@store/hook";
import { logoutAction } from "@store/features/auth/user";
import { onLogin } from "@store/features/modal/modal";

interface HeaderType {
  postion? : boolean
}

export default function Header( {postion} : HeaderType ) {
  
  const user = useAppSelector(state=>state.user);
  const router = useRouter();
  const [userMenuHidden,setUserMenuHidden] = useState(true);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(()=>{
    setUserMenuHidden(true);
  },[pathname]);

  const logOut = async ()=>{
    const {data} = await axios.get("/api/auth/logout");
    const {status,message} = data;
    
    if(status === "success"){
      dispatch(logoutAction());
      router.push('/');
    }else{
      alert(message);
    }

  }

  return (
    <S.HeaderStyle $postion={postion}>
      <S.Wrapper>
        <S.Logo $postion={postion}>
          <Link href={'/'}><img src='/asset/logo.svg' alt='로고'/></Link>
        </S.Logo>
        {
          !user ?
            <S.LoginStyle onClick={()=>dispatch(onLogin())}>로그인</S.LoginStyle>
          :
          <S.Flex>
            {/* <img src="/asset/icon/bell.svg" alt="알림창" /> */}
            <Link href={"/bookmark"}>
              <img src="/asset/image/layout/header/bookmark.png" alt="북마크"/>
            </Link>
            <S.UserMenu>
              <img onClick={()=>setUserMenuHidden(!userMenuHidden)} src="/asset/icon/user.svg" alt="유저" width={36} />
              <ul hidden={userMenuHidden}>
                <li>
                  <Link href={"/post/list"}>작성글</Link>
                </li>
                <li>
                  <Link href={"/mypage"}>회원정보</Link>
                </li>
                <li>
                  <button onClick={logOut}>로그아웃</button>
                </li>
              </ul>
            </S.UserMenu>
          </S.Flex>
        }
      </S.Wrapper>
    </S.HeaderStyle>
  )
}