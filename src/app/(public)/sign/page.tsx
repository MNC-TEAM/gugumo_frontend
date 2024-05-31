"use client"

import Input from "@components/common/Input/Basic/Input/Input";
import * as S from "./Sign.style";
import BallTag from "@components/common/Button/BallTag/BallTag";
import { GAMETYPE } from "@constant/meeting";
import White from "@components/common/Button/White/White";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AuthBtn from "@components/common/Input/Basic/AuthBtn/AuthBtn";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function page() {

    const router = useRouter();
    const {register,handleSubmit,getValues} = useForm();
    const [showAuth,setShowAuth] = useState(false);
    const [emailCheck,setEmailCheck] = useState(false);
    const [nickNameError,setNickNameError] = useState('');
    const [emailError,setEmailError] = useState('');
    const [emailAuthError,setEmailAuthError] = useState('');
    const [isPasswordError,setIsPasswordError] = useState('');
    const [ballClick,setBallClick] = useState<string[]>([]);

    // 구기종목 선택
    const ballClickHanlder = (get : string)=>{
        if(ballClick.includes(get)){
            setBallClick(ballClick.filter(elm=>elm !== get));
        }else{
            setBallClick((prev)=>([
                ...prev,
                get
            ]))
        }
    }

    // 이메일 인증
    const onEmailAuth = ()=>{

        if(getValues('username') === ""){
            return setEmailError('이메일을 입력해주세요.');
        }

        axios.post('/api/auth/sign/mailSend',{
            email : getValues('username')
        })
        .then(({data})=>{
            const {status} = data;
            if(status === "success"){
                setShowAuth(true);
            }else{
                setEmailError('이메일 인증요청에 실패하였습니다.');
                setShowAuth(false);
            }
        })
        .catch((err)=>{
            setEmailError('이메일 인증요청에 실패하였습니다.');
        });

    }

    // 이메일 체크
    const onMailAuthCheck = ()=>{

        if(emailCheck) return;

        axios.post('/api/auth/sign/emailCheck',{
            email : getValues('username'),
            authNum : getValues('emailAuth')
        })
        .then(({data})=>{
            const {status} = data;
            if(status === "success"){
                alert('이메일 인증이 완료 되었습니다.');
                setEmailCheck(true);
            }else{
                setEmailAuthError('이메일 인증에 실패하였습니다.');
                setEmailCheck(false);
            }
        })
        .catch((err)=>{
            setEmailAuthError('이메일 인증에 실패하였습니다.');
        });

    }

    // 회원가입
    const onSubmit = async (event : any)=>{

        const {nickname,username,password,emailAuth,confirmPassword} = event;

        if(nickname === ""){
            return setNickNameError('닉네임을 입력해주세요.');
        }
    
        if(username === ""){
            return setEmailError('이메일을 입력해주세요.');
        }

        if(!emailCheck){
            return setEmailAuthError('이메일 인증이 완료되지 않았습니다.');
        }
    
        if(password !== confirmPassword){
            return setIsPasswordError('비밀번호가 서로 다릅니다.');
        }

        axios.post('/api/auth/sign',{
            nickname,
            username,
            password,
            emailAuth
        })
        .then(({data})=>{
            const {status,message} = data;
            if(status === "success"){
                alert('회원에 성공 하였습니다.');
                return router.push('/');
            }else{
                alert(message);
            }
        })
        .catch((err)=>{
            alert('회원가입에 실패 하였습니다.');
        });

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
                                    <input disabled={emailCheck} type="text" {...register("emailAuth",{onChange: ()=>setEmailAuthError('')})} placeholder="인증번호를 입력하세요"/>
                                    <AuthBtn active={emailCheck} type="button" onClick={onMailAuthCheck}>확인</AuthBtn>
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
                                GAMETYPE.map((elm,index)=>
                                    <BallTag
                                        onClick={()=>{ballClickHanlder(elm.get)}}
                                        key={index} 
                                        gametype={elm.get}
                                        active={ballClick.includes(elm.get)}
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