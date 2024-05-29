"use client"
import { useAppDispatch, useAppSelector } from '@/store/hook'
import * as S from "./style";
import Link from 'next/link'
import { onLogin } from '@/store/features/modal/modal';
import { useEffect, useState } from 'react';
import { logoutAction } from '@/store/features/auth/user';
import { usePathname } from 'next/navigation';

interface HeaderType {
  token? : string,
  postion? : boolean
}

export default function Header( {token,postion} : HeaderType ) {
  
  const [userMenuHidden,setUserMenuHidden] = useState(true);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(()=>{
    setUserMenuHidden(true);
  },[pathname]);

  return (
    <S.HeaderStyle $postion={postion}>
      <S.Wrapper>
        <S.Logo $postion={postion}>
          <Link href={'/'}><img src='/asset/logo.svg' alt='로고'/></Link>
        </S.Logo>
        {
          !token ?
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
                  <button onClick={()=>dispatch(logoutAction())}>로그아웃</button>
                </li>
              </ul>
            </S.UserMenu>
          </S.Flex>
        }
      </S.Wrapper>
    </S.HeaderStyle>
  )
}