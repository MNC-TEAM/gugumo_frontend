import React from 'react'
import * as S from './Footer.style'

export default function Footer() {
  return (
    <S.FooterStyle>
        <S.Wrapper>
            <S.Flex>
                <S.CopyBox>
                    <img src="/asset/simbol.svg" alt="로고" width={100}/>
                    <S.Copy>
                        <a href='mailTo:gugumo024@gmail.com'>gugumo024@gmail.com</a>
                        <p>Copyright Gugumo. All rights reserved</p>
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
