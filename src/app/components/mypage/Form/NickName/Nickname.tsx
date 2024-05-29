import * as S from "../style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAppSelector } from "@/store/hook";
import { Dispatch, SetStateAction, useState } from "react";
import { MypageType } from "@/app/types/mypage";
import Input from "@/app/components/common/Mypage/Input/Input";
import Change from "@/app/components/common/Mypage/Change/Change";
import White from "@/app/components/common/Button/White/White";

interface propsType {
  setNickname: Dispatch<SetStateAction<string>>;
}

export default function Nickname({setNickname} : propsType) {

  const {register,handleSubmit,setValue,getValues} = useForm();
  const [ischeck,setIscheck] = useState(true);

  // 중복확인버튼
  const confirmHanlder = ()=>{
    
    const {nickname} = getValues();

    if(nickname === ""){
      return alert('닉네임을 입력해주세요.');
    }
    
    axios.get('/api/member/nickname',{
      params : {
        nickname
      }
    })
    .then((res)=>{
      const {status,message,data} = res.data;
      if(status === "success"){
        if(data){
          alert('중복된 닉네임이 있습니다.');
          setValue('nickname','');
          return setIscheck(true);
        }else{
          alert('사용하실수 있는 닉네임 입니다.');
          return setIscheck(false);
        }
      }else if(status === "fail"){
        alert(message);
      }
    })
    .catch(e=>{
      console.log('서버 에러');
    })

  }

  // 개인정보 수정 버튼
  const submitHanlder = (event : any)=>{

    if(ischeck){
      return alert('닉네임 중복 체크를 해주세요.');
    }

    const {nickname} = event;
    axios.patch('/api/member/nickname',{
      nickname
    })
    .then(res=>{
      const {status,message} = res.data;
      if(status === "success"){
        alert('닉네임 변경이 완료되었습니다.');
        setNickname(nickname);
        setValue('nickname','');
      }else if(status === "fail"){
        alert(message);
        setValue('nickname','');
      }
    })
    .catch(()=>{
      console.log('서버에러');
    });

  }

  return (
    <S.Form onSubmit={handleSubmit(submitHanlder)}>
        <S.Layout>
            <h4>개인정보 변경</h4>
            <S.InputLayout>
                <p>닉네임</p>
                <div>
                  <Input>
                    <input type="text" placeholder="닉네임을 입력하세요." {...register('nickname')}/>
                  </Input>
                  <Change onClick={confirmHanlder}>중복확인</Change>
                </div>
            </S.InputLayout>
        </S.Layout>
        <S.Btn>
          <White type={"submit"}>개인정보 수정</White>
        </S.Btn>
    </S.Form>
  )
  
}
