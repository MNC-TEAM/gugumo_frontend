'use client'

import React, { useState } from 'react'
import * as S from './style'
import * as M from '../Modal.style';
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { onClose, onLogin } from '@/store/features/modal/modal'
import Primary from '../../../common/Button/Primary/Primary'
import { useForm } from 'react-hook-form'

export default function Sign() {

  const {signup} = useAppSelector((state)=>state.modal);
  const dispatch = useAppDispatch();
  const {register,handleSubmit} = useForm();
  const [isError,setIsError] = useState('');

  const onSubmit = (event : any) =>{
    console.log(event);
    const {name,email,password,confirmPassword} = event;

    if(password !== confirmPassword){
      return setIsError('비밀번호가 서로 다릅니다.');
    }

  }

  return (
    
    <S.StyledModal
      isOpen={signup}
    >
      <M.CloseStyle
        onClick={()=>dispatch(onClose())}
      >
        <img src="/asset/icon/close.svg" alt="취소버튼" />
      </M.CloseStyle>
      
      <M.TitleStyle>회원가입</M.TitleStyle>

      <M.Form onSubmit={handleSubmit(onSubmit)}>
        <M.InputBox>
          <input type="text" placeholder='닉네임을 입력하세요' {...register('name',{required : true})} />
          <input type="email" placeholder='이메일을 입력하세요.' {...register('email',{required : true})} />
          <input type="password" placeholder='비밀번호' {...register('password',{required : true})} />
          <input type="password" placeholder='비밀번호 확인' {...register('confirmPassword',{required : true})} />
          {
            isError && <p data-testid="error-message">{isError}</p>
          }
        </M.InputBox>

        <Primary type="submit">
          회원가입 하기
        </Primary>
        
      </M.Form>
      
      <M.SignButton onClick={()=>dispatch(onLogin())}>로그인 하기</M.SignButton>
    </S.StyledModal>
    
  )
}
