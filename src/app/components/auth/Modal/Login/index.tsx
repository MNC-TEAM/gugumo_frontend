'use client'
import React from 'react'
import * as S from './style'
import * as M from '../Modal.style'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { onClose, onSignup } from '@/store/features/modal/modal'
import { useForm } from 'react-hook-form'
import Primary from '../../../common/Button/Primary/Primary'
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
    
    <S.StyledModal
      isOpen={login}
    >
      <M.CloseStyle
        onClick={()=>dispatch(onClose())}
      >
        <img src="/asset/icon/close.svg" alt="취소버튼" />
      </M.CloseStyle>

      <S.Logo>
        <img src="/asset/image/icon.png" alt="아이콘" />
      </S.Logo>

      <M.TitleStyle>로그인</M.TitleStyle>

      <M.Form onSubmit={handleSubmit(onSubmit)}>
        <M.InputBox>
          <input type="email" placeholder='이메일을 입력하세요.' {...register('email',{required : true})} />
          <input type="password" placeholder='비밀번호를 입력하세요.' {...register('password',{required : true})}/>
        </M.InputBox>

        <Primary type="submit">
          로그인 하기
        </Primary>
      </M.Form>
        
      <M.SignButton onClick={()=>dispatch(onSignup())}>회원가입 하기</M.SignButton>
    </S.StyledModal>
    
  )
}
