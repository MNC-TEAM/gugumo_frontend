'use client'

import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { ButtonStyle, CloseStyle, Flex, InputBox, SignButton, SnsBox, TitleStyle, modalStyle } from './style'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../../styles/theme'

export default function Login() {

  const [isOpen,setIsOpen] = useState(false)

  return (
    
    <ReactModal
      isOpen={isOpen}
      style={modalStyle}
    >
      <ThemeProvider 
        theme={theme}
      >
        <CloseStyle
          onClick={()=>setIsOpen(false)}
        >
          <img src="/asset/icon/close.svg" alt="취소버튼" />
        </CloseStyle>

        <img src="/asset/image/icon.png" alt="아이콘" />

        <TitleStyle>로그인</TitleStyle>

        <form>
          <InputBox>
            <input type="email" placeholder='이메일을 입력하세요.' />
            <input type="password" placeholder='비밀번호를 입력하세요.' />
          </InputBox>

          <ButtonStyle type="submit">
            로그인 하기
          </ButtonStyle>
        </form>
        
        <SnsBox>
          <p>간편 로그인</p>
          <Flex>
            <button></button>
            <button></button>
            <button></button>
          </Flex>
        </SnsBox>
        
        <SignButton>회원가입 하기</SignButton>
      </ThemeProvider>
    </ReactModal>
    
  )
}
