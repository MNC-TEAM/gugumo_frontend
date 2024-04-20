import React from 'react'
import { Copy, Flex, FooterStyle, Service, Wrapper } from './style'
import Link from 'next/link'

export default function Footer() {
  return (
    <FooterStyle>
        <Wrapper>
            <Link href={'/'}>로고</Link>
            <Flex>
                <Copy>
                    <p>Contact@gmail.com</p>
                    <p>Copyright 구구모. All rights reserved</p>
                </Copy>
                <Service>
                    <button>이용약관</button>
                    <button>개인정보처리방침</button>
                    <button>서비스 소개</button>
                </Service>
            </Flex>
        </Wrapper>
    </FooterStyle>
  )
}
