"use client";
import Input from "@components/common/Input/Basic/Input/Input";
import * as S from "./find.style";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Find() {

    const {register,handleSubmit} = useForm();

    const onSubmitHanlder = async (data: any)=>{

        const {email} = data;
        
        try {
            const {data} = await axios.post('/api/auth/resetPassword',{email});
            console.log(data);
        }
        catch{
            alert('오류가 발생했습니다.');
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
                <Input>
                    <input type="text" placeholder="가입하신 이메일 주소를 입력하세요." {...register('email')}/>
                </Input>
                <button type="submit">전송하기</button>
            </form>
        </S.FindBox>
    </S.FindMain>
  )
}