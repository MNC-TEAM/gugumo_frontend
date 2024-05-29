"use client"

import Input from "@/app/components/common/Input/Basic/Input/Input";
import * as S from "./Sign.style";
import BallTag from "@/app/components/common/Button/BallTag/BallTag";
import { GAMETYPE } from "@/app/constant/meeting";
import White from "@/app/components/common/Button/White/White";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AuthBtn from "@/app/components/common/Input/Basic/AuthBtn/AuthBtn";
import { useRouter } from "next/navigation";

export default function page() {

    const router = useRouter();
    const {register,handleSubmit,getValues} = useForm();
    const [showAuth,setShowAuth] = useState(false);
    const [emailCheck,setEmailCheck] = useState(false);
    const [nickNameError,setNickNameError] = useState('');
    const [emailError,setEmailError] = useState('');
    const [emailAuthError,setEmailAuthError] = useState('');
    const [isPasswordError,setIsPasswordError] = useState('');

    const ballClickHanlder = ()=>{

    }

    const onEmailAuth = ()=>{

        if(getValues('username') === ""){
            return setEmailError('이메일을 입력해주세요.');
        }
        setShowAuth(true);
    }

    const onMailAuthCheck = ()=>{
        alert('이메일 인증이 완료 되었습니다.');
        setEmailCheck(true);
    }

    const onSubmit = async (event : any)=>{

        const {nickname,username,password,emailAuth,confirmPassword} = event;

        if(nickname === ""){
            return setNickNameError('닉네임을 입력해주세요.');
        }
    
        if(username === ""){
            return setEmailError('이메일을 입력해주세요.');
        }

        if(emailAuth === "" || !emailCheck){
            return setEmailAuthError('이메일 인증이 완료되지 않았습니다.');
        }
    
        if(password !== confirmPassword){
            return setIsPasswordError('비밀번호가 서로 다릅니다.');
        }

        const res = await fetch('/api/member/sign',{
            method : "POST",
            body : JSON.stringify({
                nickname,
                username,
                password
            })
        });

        const {data,message,status} = await res.json();

        if(status === "fail"){
            return alert(message);
        }else{
            alert('회원가입이 완료 되었습니다.');
            return router.push('/');
        }

    }

  return (
    <S.Wrap>
        
        <S.Box>
            
            <form onSubmit={handleSubmit(onSubmit)}>

                <S.Title>회원가입</S.Title>

                <S.Layout>
                    <p>정보 입력</p>
                    <S.LayoutBox>
                        <Input error={nickNameError}>
                            <input type="text" {...register("nickname",{onChange: ()=>setNickNameError('')})} placeholder="닉네임"/>
                        </Input>
                        <Input error={emailError}>
                            <input type="email" {...register("username",{onChange: ()=>setEmailError('')})} placeholder="이메일을 입력하세요."/>
                            <AuthBtn active={showAuth} type="button" onClick={onEmailAuth}>인증요청</AuthBtn>
                        </Input>
                        {
                            showAuth &&
                            <Input error={emailAuthError}>
                                <input type="text" {...register("emailAuth",{onChange: ()=>setEmailAuthError('')})} placeholder="인증번호를 입력하세요"/>
                                <AuthBtn type="button" onClick={onMailAuthCheck}>확인</AuthBtn>
                            </Input>
                        }
                        <Input>
                            <input type="password" {...register("password")} placeholder="비밀번호"/>
                        </Input>
                        <Input error={isPasswordError}>
                            <input type="password" {...register("confirmPassword",{onChange: ()=>setIsPasswordError('')})} placeholder="비밀번호 확인"/>
                        </Input>
                    </S.LayoutBox>
                </S.Layout>

                <S.Layout>
                    <p>관심있는 종목 (중복가능)</p>
                    <S.GameBox>
                        {
                            GAMETYPE.map((e,index)=>
                                <BallTag
                                    // onClick={()=>{}}
                                    key={index} 
                                    gametype={e.get}
                                    active={false}
                                />
                            )
                        }
                    </S.GameBox>
                </S.Layout>

                <S.Layout>
                    <p>서비스 정책</p>
                    <S.Service>
                        <S.All>
                            <S.Argee>
                                <S.ArgeeCheck>
                                    <div><IoCheckmarkOutline/></div>
                                    <p>전체동의</p>
                                </S.ArgeeCheck>
                            </S.Argee>
                        </S.All>
                        <S.ArgeeList>
                            <S.Argee as={"li"}>
                                <S.ArgeeCheck>
                                    <div><IoCheckmarkOutline/></div>
                                    <p>서비스 이용약관 동의 (필수)</p>
                                </S.ArgeeCheck>
                                <S.ArgeeLink>내용보기</S.ArgeeLink>
                            </S.Argee>
                            <S.Argee as={"li"}>
                                <S.ArgeeCheck>
                                    <div><IoCheckmarkOutline/></div>
                                    <p>개인정보 수집 및 이용 동의 (필수)</p>
                                </S.ArgeeCheck>
                                <S.ArgeeLink>내용보기</S.ArgeeLink>
                            </S.Argee>
                            <S.Argee as={"li"}>
                                <S.ArgeeCheck>
                                    <div><IoCheckmarkOutline/></div>
                                    <p>마케팅 수신 동의 (선택)</p>
                                </S.ArgeeCheck>
                                <S.ArgeeLink>내용보기</S.ArgeeLink>
                            </S.Argee>
                        </S.ArgeeList>
                    </S.Service>
                </S.Layout>

                <S.ButtonList>
                    <White type={"submit"}>회원가입</White>
                </S.ButtonList>

            </form>

        </S.Box>

    </S.Wrap>
  )
}