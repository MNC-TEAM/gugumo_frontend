"use client"
import React from 'react'
import * as S from './Footer.style'
import Link from 'next/link'

export default function Footer() {
  return (
    <S.FooterStyle>
        <S.Wrapper>
            <S.Flex>
                <S.CopyBox>
                    <img src="/asset/simbol.svg" alt="로고" width={100}/>
                    <S.Copy>
                        <p>Contact<br/>@gmail.com</p>
                        <p>Copyright 구구모. All rights reserved</p>
                    </S.Copy>
                </S.CopyBox>
                <S.Service>
                    <button onClick={()=>alert('준비중 입니다.')}>이용약관</button>
                    <button onClick={()=>alert('준비중 입니다.')}>개인정보처리방침</button>
                    <button onClick={()=>alert('준비중 입니다.')}>서비스 소개</button>
                </S.Service>
            </S.Flex>
        </S.Wrapper>
    </S.FooterStyle>
  )
}
