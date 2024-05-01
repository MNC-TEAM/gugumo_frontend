'use client'

import React, { useState } from 'react'
import ReactModal from 'react-modal'
import * as S from './style'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { onClose, onLogin } from '@/store/features/modal/modal'
import Primary from '../../common/Button/Primary/Primary'
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
    
    <ReactModal
      isOpen={signup}
      style={S.modalStyle}
      ariaHideApp={false}
      onRequestClose={()=>dispatch(onClose())}
    >
      <S.CloseStyle
        onClick={()=>dispatch(onClose())}
      >
        <img src="/asset/icon/close.svg" alt="취소버튼" />
      </S.CloseStyle>
      
      <S.TitleStyle>회원가입</S.TitleStyle>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputBox>
          <input type="text" placeholder='닉네임을 입력하세요' {...register('name',{required : true})} />
          <input type="email" placeholder='이메일을 입력하세요.' {...register('email',{required : true})} />
          <input type="password" placeholder='비밀번호' {...register('password',{required : true})} />
          <input type="password" placeholder='비밀번호 확인' {...register('confirmPassword',{required : true})} />
          {
            isError && <p data-testid="error-message">{isError}</p>
          }
        </S.InputBox>

        <Primary type="submit">
          회원가입 하기
        </Primary>
      </S.Form>
      
      {/* <SnsBox>
        <p>간편 회원가입</p>
        <Flex>
          <button></button>
          <button></button>
          <button></button>
        </Flex>
      </SnsBox> */}
      
      <S.SignButton onClick={()=>dispatch(onLogin())}>로그인 하기</S.SignButton>
    </ReactModal>
    
  )
}
