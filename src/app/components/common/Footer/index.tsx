import React from 'react'
import * as S from './Footer.style'
import Link from 'next/link'

export default function Footer() {
  return (
    <S.FooterStyle>
        <S.Wrapper>
            <S.Flex>
                <S.CopyBox>
                    <Link href={'/'}>
                        <img src="/asset/simbol.svg" alt="로고" width={100}/>
                    </Link>
                    <S.Copy>
                        <p>Contact<br/>@gmail.com</p>
                        <p>Copyright 구구모. All rights reserved</p>
                    </S.Copy>
                </S.CopyBox>
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
