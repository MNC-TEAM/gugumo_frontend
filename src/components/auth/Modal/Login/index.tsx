'use client'
import React, { useEffect, useState } from 'react'
import * as S from './style'
import { useForm } from 'react-hook-form'
import Input from '@components/common/Input/Basic/Input/Input'
import Primary from '@components/common/Button/Primary/Primary'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default function Login({isOpen,onClose} : {isOpen : boolean,onClose : any}) {
  
  const router = useRouter();

  const {register,handleSubmit} = useForm();
  const [isEmailError,setIsEmailError] = useState('');
  const [isPasswordError,setIsPasswordError] = useState('');
  const [active,setActive] = useState(false);

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
    const html = document.querySelector('html');
    if(!html) return;
    if(isOpen){
      html.style.overflowY = "hidden";
    }
    setTimeout(() => {
      setActive(true);
    }, 200);
  },[isOpen]);

  return (
    <>
      {
        isOpen &&
        <S.BackModal>
          <S.StyledModal className={active ? "active" : ""} onClick={(e)=>e.stopPropagation()}>
            <S.CloseStyle type='button' onClick={onClose}>
              <img src="/asset/icon/close.svg" alt="취소버튼" />
            </S.CloseStyle>
            <S.Logo>
              <img src="/asset/image/icon.png" alt="로고 아이콘" />
            </S.Logo>
            <S.TitleStyle>로그인</S.TitleStyle>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <S.InputBox>
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
              </S.InputBox>
              <S.BtnList>
                <Primary type="submit">
                  로그인 하기
                </Primary>
              </S.BtnList>
              <S.SnsBox>
                <p>간편 로그인</p>
                <S.SnsBoxFlex>
                  <button type="button" onClick={()=>signIn("kakao")}></button>
                </S.SnsBoxFlex>
              </S.SnsBox>
              <S.SignFind>
                <Link href={"/find"}>비밀번호 찾기</Link>
                <Link href={"/sign"}>회원가입 하기</Link>
              </S.SignFind>
            </S.Form>
          </S.StyledModal>
        </S.BackModal>
      }
    </>
  )
}