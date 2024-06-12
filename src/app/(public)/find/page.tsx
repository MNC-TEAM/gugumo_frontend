"use client";
import Input from "@components/common/Input/Basic/Input/Input";
import * as S from "./find.style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import Success from "@components/common/Alert/Success/Success";
import { open } from "@store/features/modal/modal";
import { useState } from "react";
import Error from "@components/common/Alert/Error/Error";
import { useRouter } from "next/navigation";

export default function Find() {

    const router = useRouter();
    const {register,handleSubmit} = useForm();
    const dispatch = useDispatch();
    const [isLoading,setIsLoading] = useState(false);
    const [emailError,setEmailError] = useState("");

    const onButtonHanlder = ()=>{
        router.push('/');
    }

    const onSubmitHanlder = async (data: any)=>{

        const {email} = data;
        if(isLoading) return;
        if(email === ""){
            return setEmailError('이메일을 입력해주세요.');
        }

        setIsLoading(true);

        try {
            const {data} = await axios.post('/api/auth/resetPassword',{email});
            if(data.status === "success"){
                return dispatch(open({
                    Component : Success,
                    props : {
                        successMessage : "입력된 이메일로 임시 비밀번호를 보냈습니다.",
                        onButtonHanlder
                    }
                }));
            }else{
                return dispatch(open({Component : Error,props : {errorMessage : "회원이 존재하지 않습니다."}}));
            }
        }
        catch{
            alert('오류가 발생했습니다.');
        }
        finally{
            setIsLoading(false);
        }

    }

  return (
    <S.FindMain>
        <S.FindBox>
            <dl>
                <dt>비밀번호 찾기</dt>
                <dd>
                    비밀번호를 재설정할 수 있는 이메일을 보내드립니다. <br/>
                    발송된 이메일의 비밀번호 재설정은 <span>10분 간</span> 유효합니다.
                </dd>
            </dl>
            <form onSubmit={handleSubmit(onSubmitHanlder)}>
                <Input 
                    error={emailError}
                >
                    <input type="text" placeholder="가입하신 이메일 주소를 입력하세요." {...register('email',{onChange : ()=> setEmailError('')})}/>
                </Input>
                <button type="submit">{isLoading ? "로딩중" : "전송하기"}</button>
            </form>
        </S.FindBox>
    </S.FindMain>
  )
}