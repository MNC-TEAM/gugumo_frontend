"use client"
import * as S from "./style";
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useAppDispatch } from "@store/hook";
import { open } from "@store/features/modal/modal";
import { signOut, useSession } from "next-auth/react";
import Login from "@components/auth/Modal/Login";

interface HeaderType {
  postion? : boolean
}

export default function Header( {postion} : HeaderType ) {

  const { data : session } = useSession();
  const [userMenuHidden,setUserMenuHidden] = useState(true);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(()=>{
    setUserMenuHidden(true);
  },[pathname]);

  const logOutHanlder = ()=>{
    signOut({
      redirect : false,
      callbackUrl : "/"
    });
  }

  return (
    <S.HeaderStyle $postion={postion}>
      <S.Wrapper>
        <S.Logo $postion={postion}>
          <Link href={'/'}><img src='/asset/logo.svg' alt='로고'/></Link>
        </S.Logo>
        {
          !session ?
            <S.LoginStyle type="button" onClick={()=>dispatch(open({Component : Login}))}>로그인</S.LoginStyle>
          :
          <S.Flex>
            <S.Alarm>
              <img src="/asset/icon/bell.svg" alt="알림창" width={36}/>
              <S.AlarmBox>
                <S.AlarmBoxFlex>
                  <h4>알림</h4>
                  <button type="button">모두읽음</button>
                </S.AlarmBoxFlex>

                <S.AlarmBoxDay>
                  <p>6월 3일</p>
                  <S.AlarmBoxList>
                    <li>
                      <span>댓글</span>
                      <p>내용입니다...내용입니다...내용입니다...</p>
                      <button type="button"><img src="/asset/icon/remove.svg" alt="삭제 아이콘" /></button>
                    </li>
                    <li>
                      <span>댓글</span>
                      <p>내용입니다...내용입니다...내용입니다...</p>
                      <button type="button"><img src="/asset/icon/remove.svg" alt="삭제 아이콘" /></button>
                    </li>
                  </S.AlarmBoxList>
                </S.AlarmBoxDay>

                <S.AlarmBoxDay>
                  <p>6월 3일</p>
                  <S.AlarmBoxList $status={true}>
                    <li>
                      <span>댓글</span>
                      <p>내용입니다...내용입니다...내용입니다...</p>
                      <button type="button"><img src="/asset/icon/remove.svg" alt="삭제 아이콘" /></button>
                    </li>
                  </S.AlarmBoxList>
                </S.AlarmBoxDay>

              </S.AlarmBox>
            </S.Alarm>
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
                  <button onClick={logOutHanlder}>로그아웃</button>
                </li>
              </ul>
            </S.UserMenu>
          </S.Flex>
        }
      </S.Wrapper>
    </S.HeaderStyle>
  )
}