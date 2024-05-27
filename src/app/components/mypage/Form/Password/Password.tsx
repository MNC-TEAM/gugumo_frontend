import * as S from "../style";
import * as P from "./Password.style"
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAppSelector } from "@/store/hook";
import { useState } from "react";
import Input from "@/app/components/common/Mypage/Input/Input";
import White from "@/app/components/common/Button/White/White";

export default function Password() {

    const user = useAppSelector(state=>state.user);
    const {register,handleSubmit,setValue} = useForm();
    const [isError,setIsError] = useState('');

    // 비밀번호 수정 버튼
    const submithanlder = (event : any)=>{
        const {password,confirmPassword} = event;

        if(password === "" || confirmPassword === ""){
            return setIsError('비밀번호를 입력하지 않았습니다.');
        }

        if(password !== confirmPassword) {
            return setIsError('비밀번호가 동일하지 않습니다.');
        }

        axios.patch('/api/member/password',{
            password
        },{
            headers : {
                Authorization : user
            }
        })
        .then(res=>{
            const {status,message} = res.data;
            if(status === "success"){
                alert('비밀번호 변경에 성공하였습니다.');
                setValue('password','');
                setValue('confirmPassword','');
            }else if(status === "fail"){
                alert(message);
                setValue('password','');
                setValue('confirmPassword','');
            }
        })
        .catch(()=>{
            console.log('서버에러');
        });

    }

  return (
    <S.Form onSubmit={handleSubmit(submithanlder)}>
        <P.Layout>
            <h4>비밀번호 설정</h4>
            <S.InputFlex>
                <S.InputLayout>
                    <label htmlFor="password">새 비밀번호</label>
                    <div>
                        <Input>
                            <input 
                                id="password" 
                                type="password" 
                                placeholder="비밀번호를 입력해주세요." 
                                {...register('password',{
                                    onChange : ()=> setIsError('')
                                })}
                            />
                        </Input>
                    </div>
                </S.InputLayout>
                <S.InputLayout>
                    <label htmlFor="confirmPassword">새 비밀번호 확인</label>
                    <div>
                        <Input>
                            <input 
                                id="confirmPassword" 
                                type="password" 
                                placeholder="입력한 비밀번호를 입력해주세요." 
                                {...register('confirmPassword',{
                                    onChange : ()=> setIsError('')
                                })}
                            />
                        </Input>
                    </div>
                    {isError ? isError : ""}
                </S.InputLayout>
            </S.InputFlex>
        </P.Layout>
        <S.Btn>
          <White type={"submit"}>비밀번호 수정</White>
        </S.Btn>
    </S.Form>
  )
}
