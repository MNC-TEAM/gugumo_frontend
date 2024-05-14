import * as S from "../style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAppSelector } from "@/store/hook";
import { Dispatch, SetStateAction, useState } from "react";
import { MypageType } from "@/app/types/mypage";

interface propsType {
  setMypage: Dispatch<SetStateAction<MypageType | null>>;
}

export default function Nickname({setMypage} : propsType) {

  const user = useAppSelector(state=>state.user);
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
    },{
      headers : {
        Authorization : user
      }
    })
    .then(res=>{
      const {status,message} = res.data;
      console.log(res.data);
      if(status === "success"){
        alert('닉네임 변경이 완료되었습니다.');
        setMypage(prev=>{
          if(prev){
            return {...prev,nickname : nickname};
          }else{
            return prev;
          }
        });
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
                    <input type="text" placeholder="닉네임을 입력하세요." {...register('nickname')}/>
                    <button type="button" onClick={confirmHanlder}>중복확인</button>
                </div>
            </S.InputLayout>
        </S.Layout>

        <S.WhiteBtn type="submit">개인정보 수정</S.WhiteBtn>
    </S.Form>
  )
}
