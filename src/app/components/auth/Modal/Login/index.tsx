'use client'
import React, { useState } from 'react'
import * as S from './style'
import * as M from '../Modal.style'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { onClose, onSignup } from '@/store/features/modal/modal'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { loginAction } from '@/store/features/auth/user'
import { BaseModalBackground } from 'styled-react-modal'
import Primary from '@/app/components/common/Button/Primary/Primary'
import Input from '@/app/components/common/Input/Basic/Input/Input'

export default function Login() {

  const dispatch = useAppDispatch();
  const {register,handleSubmit,setValue} = useForm();
  const {login} = useAppSelector((state)=>state.modal);

  const [isEmailError,setIsEmailError] = useState('');
  const [isPasswordError,setIsPasswordError] = useState('');

  const onSubmit = (event : any)=>{

    const {username,password} = event;

    if(username === ""){
      return setIsEmailError('이메일을 입력해주세요.');
    }

    if(password === ""){
      return setIsPasswordError('비밀번호을 입력해주세요.');
    }

    axios.post('/api/member/login',{
      username,
      password
    })
    .then(({data})=>{
      const {status,token,message} = data;
      if(status === "success"){
        dispatch(loginAction(token));
        return dispatch(onClose());
      }else if(status === "fail"){
        alert(message);
        setValue('username','');
        setValue('password','');
        return;
      }
    })
    .catch(err=>{
      alert('에러가 발생했습니다.');
    });

  }

  return (
    
    <BaseModalBackground>
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
            <Input error={isEmailError}>
              <input 
                type="email"
                placeholder='이메일을 입력해주세요.'
                {...register('username',{required : false,onChange:()=>setIsEmailError('')})}
              />
            </Input>
            <Input error={isPasswordError}>
              <input
                type="password" 
                placeholder='비밀번호를 입력하세요.' 
                {...register('password',{required : false,onChange:()=>setIsPasswordError('')})}
              />
            </Input>
          </M.InputBox>

          <Primary type="submit">
            로그인 하기
          </Primary>
        </M.Form>
          
        <M.SignButton href={"/sign"} >회원가입 하기</M.SignButton>
        
      </S.StyledModal>
    </BaseModalBackground>
    
  )
}
