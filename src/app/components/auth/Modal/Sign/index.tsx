'use client'

import React, { useState } from 'react'
import * as S from './style'
import * as M from '../Modal.style';
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { onClose, onLogin } from '@/store/features/modal/modal'
import Primary from '../../../common/Button/Primary/Primary'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { Input } from '@/app/components/common/Input/Input';

export default function Sign() {

  const {signup} = useAppSelector((state)=>state.modal);
  const dispatch = useAppDispatch();
  const {register,handleSubmit} = useForm();
  const [nickNameError,setNickNameError] = useState('');
  const [emailError,setEmailError] = useState('');
  const [isError,setIsError] = useState('');

  const onSubmit = (event : any) =>{
    
    const {nickname,username,password,confirmPassword} = event;

    if(nickname === ""){
      return setNickNameError('닉네임을 입력해주세요.');
    }

    if(username === ""){
      return setEmailError('이메일을 입력해주세요.');
    }

    if(password !== confirmPassword){
      return setIsError('비밀번호가 서로 다릅니다.');
    }

    axios.post('/api/member/new',{
      nickname,
      username,
      password
    })
    .then(({data})=>{
      const {status,message} = data;
      
      if(status === "success"){
        alert('회원가입에 성공하였습니다.');
        return dispatch(onClose());
      }else if(status === "fail"){
        alert(message);
      }

    })
    .catch(err=>{
      alert('에러가 발생했습니다.');
    });

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
          <Input 
            type="text" 
            placeholder='닉네임을 입력하세요' 
            register={register('nickname',{required : false,onChange: ()=>setNickNameError('')})}
            error={nickNameError}
          />
          <Input 
            type="email" 
            placeholder='이메일을 입력하세요.' 
            register={register('username',{required : false,onChange: ()=>setEmailError('')})} 
            error={emailError}
          />
          <Input
            type="password" 
            placeholder='비밀번호' 
            register={register('password',{required : false,onChange: ()=>setIsError('')})}
          />
          <Input
            type="password" 
            placeholder='비밀번호 확인' 
            register={register('confirmPassword',{required : false,onChange: ()=>setIsError('')})}
            error={isError}
          />
        </M.InputBox>

        <Primary type="submit">
          회원가입 하기
        </Primary>
        
      </M.Form>
      
      <M.SignButton onClick={()=>dispatch(onLogin())}>로그인 하기</M.SignButton>
    </S.StyledModal>
    
  )
}