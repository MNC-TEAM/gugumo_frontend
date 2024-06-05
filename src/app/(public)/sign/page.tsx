"use client"
import Input from "@components/common/Input/Basic/Input/Input";
import * as S from "./Sign.style";
import BallTag from "@components/common/Button/BallTag/BallTag";
import { GAMETYPE } from "@constant/meeting";
import White from "@components/common/Button/White/White";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import AuthBtn from "@components/common/Input/Basic/AuthBtn/AuthBtn";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {

    const router = useRouter();
    const {register,handleSubmit,getValues,setFocus} = useForm();
    const [showAuth,setShowAuth] = useState(false);
    const [emailCheck,setEmailCheck] = useState(false);
    const [nickNameError,setNickNameError] = useState('');
    const [emailError,setEmailError] = useState('');
    const [emailAuthError,setEmailAuthError] = useState('');
    const [isPasswordError,setIsPasswordError] = useState('');
    const [ballClick,setBallClick] = useState<string[]>([]);
    const [allCheck,setAllCheck] = useState(false);
    const [isAgreeTermsUse,setIsAgreeTermsUse] = useState(false);
    const [isAgreeCollectingUsingPersonalInformation,setIsAgreeCollectingUsingPersonalInformation] = useState(false);
    const [isAgreeMarketing,setIsAgreeMarketing] = useState(false);

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
                setEmailCheck(false);
                setEmailError('');
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
            emailAuthNum : getValues('emailAuth')
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
            setFocus('nickname');
            return setNickNameError('닉네임을 입력해주세요.');
        }

        if(nickname.match(/\s/g)){
            setFocus('nickname');
            return setNickNameError('닉네임에 공백을 제거해주세요.');
        }
    
        if(username === ""){
            setFocus('username');
            return setEmailError('이메일을 입력해주세요.');
        }

        if(!emailCheck){
            setFocus('emailCheck');
            return setEmailAuthError('이메일 인증이 완료되지 않았습니다.');
        }
    
        if(password !== confirmPassword){
            setFocus('password');
            return setIsPasswordError('비밀번호가 서로 다릅니다.');
        }

        if(!isAgreeTermsUse){
            return alert('서비스 이용약관에 동의 해주세요.');
        }

        if(!isAgreeCollectingUsingPersonalInformation){
            return alert('개인정보 수집 및 이용에 동의 해주세요');
        }

        axios.post('/api/auth/sign',{
            username,
            nickname,
            password,
            favoriteSports : ballClick.join(','),
            isAgreeTermsUse,
            isAgreeCollectingUsingPersonalInformation,
            isAgreeMarketing,
            emailAuthNum : emailAuth
        })
        .then(({data})=>{
            const {status,message} = data;
            if(status === "success"){
                alert('회원에 성공 하였습니다.');
                return router.push('/');
            }else{
                if(message){
                    return alert(message);
                }else{
                    return alert('회원가입에 실패 하였습니다.');
                }
            }
        })

    }

    // 전체선택
    const handleAllCheck = ()=>{
        if(allCheck){
            setIsAgreeTermsUse(false);
            setIsAgreeCollectingUsingPersonalInformation(false);
            setIsAgreeMarketing(false);
            setAllCheck(false);
        }else{
            setIsAgreeTermsUse(true);
            setIsAgreeCollectingUsingPersonalInformation(true);
            setIsAgreeMarketing(true);
            setAllCheck(true);
        }
    }

    const usernameOnChangeHandler = useCallback(()=>{
        setEmailError('');
        setShowAuth(false);
    },[]);

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
                                <input type="email" {...register("username",{onChange:usernameOnChangeHandler})} placeholder="이메일을 입력하세요."/>
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
                                    <S.ArgeeCheck
                                        $active={isAgreeTermsUse && isAgreeCollectingUsingPersonalInformation && isAgreeMarketing}
                                        onClick={handleAllCheck}
                                    >
                                        <div><IoCheckmarkOutline/></div>
                                        <p>전체동의</p>
                                    </S.ArgeeCheck>
                                </S.Argee>
                            </S.All>
                            <S.ArgeeList>
                                <S.Argee as={"li"}>
                                    <S.ArgeeCheck
                                        $active={isAgreeTermsUse}
                                        onClick={()=>{setIsAgreeTermsUse(!isAgreeTermsUse)}}
                                    >
                                        <div><IoCheckmarkOutline/></div>
                                        <p>서비스 이용약관 동의 (필수)</p>
                                    </S.ArgeeCheck>
                                    <S.ArgeeLink>내용보기</S.ArgeeLink>
                                </S.Argee>
                                <S.Argee as={"li"}>
                                    <S.ArgeeCheck 
                                        $active={isAgreeCollectingUsingPersonalInformation}
                                        onClick={()=>{setIsAgreeCollectingUsingPersonalInformation(!isAgreeCollectingUsingPersonalInformation)}}
                                    >
                                        <div><IoCheckmarkOutline/></div>
                                        <p>개인정보 수집 및 이용 동의 (필수)</p>
                                    </S.ArgeeCheck>
                                    <S.ArgeeLink>내용보기</S.ArgeeLink>
                                </S.Argee>
                                <S.Argee as={"li"}>
                                    <S.ArgeeCheck 
                                        $active={isAgreeMarketing}
                                        onClick={()=>{setIsAgreeMarketing(!isAgreeMarketing)}}
                                    >
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