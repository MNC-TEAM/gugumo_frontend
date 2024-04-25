'use client'

import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { ButtonStyle, CloseStyle, Flex, InputBox, SignButton, SnsBox, TitleStyle, modalStyle } from './style'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'

export default function Sign() {

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
        
        <TitleStyle>회원가입</TitleStyle>

        <form>
          <InputBox>
            <input type="text" placeholder='닉네임' />
            <input type="email" placeholder='이메일을 입력하세요.' />
            <input type="password" placeholder='비밀번호' />
            <input type="password" placeholder='비밀번호 확인' />
          </InputBox>

          <ButtonStyle type="submit">
            회원가입 하기
          </ButtonStyle>
        </form>
        
        <SnsBox>
          <p>간편 회원가입</p>
          <Flex>
            <button></button>
            <button></button>
            <button></button>
          </Flex>
        </SnsBox>
        
        <SignButton>로그인 하기</SignButton>
      </ThemeProvider>
    </ReactModal>
    
  )
}
