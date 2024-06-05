'use client'
import React, { useCallback, useEffect, useState } from 'react'
import * as S from './style'
import * as M from '../Modal.style'
import { useForm } from 'react-hook-form'
import Input from '@components/common/Input/Basic/Input/Input'
import Primary from '@components/common/Button/Primary/Primary'
import { createPortal } from 'react-dom'
import { useAppDispatch, useAppSelector } from '@store/hook'
import { close } from '@store/features/modal/modal'
import { usePathname, useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function Login() {
  
  const router = useRouter();
  const pathname = usePathname();

  const modal = useAppSelector(state=>state.modal);
  const dispatch = useAppDispatch();

  const onClose = useCallback(()=>{
    dispatch(close());
  },[dispatch]);

  const {register,handleSubmit} = useForm();
  const [isEmailError,setIsEmailError] = useState('');
  const [isPasswordError,setIsPasswordError] = useState('');

  const onSubmit = async (event : any)=>{

    const {username,password} = event;

    if(username === ""){
      return setIsEmailError('이메일을 입력해주세요.');
    }

    if(password === ""){
      return setIsPasswordError('비밀번호을 입력해주세요.');
    }

    const res = await signIn('credentials',{
      username : username,
      password : password,
      redirect: false,
    });

    if(res?.ok){
      router.push('/');
      onClose();
    }else{
      alert('로그인에 실패 하였습니다.');
    }

  }

  useEffect(()=>{
    onClose();
  },[pathname,onClose])

  useEffect(()=>{

    const html = document.querySelector('html');
    if(!html) return;

    if(modal.isOpen){
      html.style.overflowY = "hidden";
    }else{
      html.style.overflowY = "auto";
    }
    
  },[modal]);

  return (
    
    <>
      {
        modal.isOpen &&
        createPortal(
            <S.BackModal onClick={()=>{dispatch(close())}}>
              <S.StyledModal onClick={(e)=>e.stopPropagation()}>

                <M.CloseStyle type='button' onClick={onClose}>
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
            </S.BackModal>,
          document.body
        )
      }
    </>
    
  )
}