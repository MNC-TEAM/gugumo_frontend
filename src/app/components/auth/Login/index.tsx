'use client'

import React from 'react'
import ReactModal from 'react-modal'
import * as S from './style'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { onClose, onSignup } from '@/store/features/modal/modal'
import { useForm } from 'react-hook-form'
import Primary from '../../common/Button/Primary/Primary'
import { loginAction } from '@/store/features/auth/user'

export default function Login() {

  const {login} = useAppSelector((state)=>state.modal);
  const dispatch = useAppDispatch();
  const {register,handleSubmit} = useForm();

  const onSubmit = (event : any)=>{
    console.log(event);
    dispatch(loginAction());
    dispatch(onClose());
  }

  return (
    
    <ReactModal
      isOpen={login}
      style={S.modalStyle}
      ariaHideApp={false}
      onRequestClose={()=>dispatch(onClose())}
    >
      <S.CloseStyle
        onClick={()=>dispatch(onClose())}
      >
        <img src="/asset/icon/close.svg" alt="취소버튼" />
      </S.CloseStyle>

      <img src="/asset/image/icon.png" alt="아이콘" />

      <S.TitleStyle>로그인</S.TitleStyle>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputBox>
          <input type="email" placeholder='이메일을 입력하세요.' {...register('email',{required : true})} />
          <input type="password" placeholder='비밀번호를 입력하세요.' {...register('password',{required : true})}/>
        </S.InputBox>

        <Primary type="submit">
          로그인 하기
        </Primary>
      </S.Form>
      
      {/* <SnsBox>
        <p>간편 로그인</p>
        <Flex>
          <button></button>
          <button></button>
          <button></button>
        </Flex>
      </SnsBox> */}
        
      <S.SignButton onClick={()=>dispatch(onSignup())}>회원가입 하기</S.SignButton>
    </ReactModal>
    
  )
}
