import React from 'react'
import * as S from './style'
import Link from 'next/link'

export default function Footer() {
  return (
    <S.FooterStyle>
        <S.Wrapper>
            <Link href={'/'}>
                <img src="/asset/logo.svg" alt="로고" width={70}/>
            </Link>
            <S.Flex>
                <S.Copy>
                    <p>Contact<br/>@gmail.com</p>
                    <p>Copyright 구구모. All rights reserved</p>
                </S.Copy>
                <S.Service>
                    <button>이용약관</button>
                    <button>개인정보처리방침</button>
                    <button>서비스 소개</button>
                </S.Service>
            </S.Flex>
        </S.Wrapper>
    </S.FooterStyle>
  )
}
