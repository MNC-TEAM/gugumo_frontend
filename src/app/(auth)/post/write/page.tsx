"use client"
import * as S from "../style";
import { Wrap } from "@styles/global";
import { useState } from "react";
import moment from "moment";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import Form from "@components/post/Form/Form";
import Image from "next/image";
import { useAppDispatch } from "@store/hook";
import { open } from "@store/features/modal/modal";
import Error from "@components/common/Alert/Error/Error";
import Success from "@components/common/Alert/Success/Success";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Wrtie() {

  const router = useRouter();
  const {register,handleSubmit,watch} = useForm({
    defaultValues : {
      meetingType : "SHORT",
      location : "",
      gameType : "",
      meetingMemberNum : "",
      meetingTime : "",
      openKakao : "",
      title : "",
      content : ""
    }
  });
  const [meetingDate, onMeetingDate] = useState<Value>(new Date());
  const [meetingDeadline, onMeetingDeadline] = useState<Value>(new Date());
  const [meetingDays,setMeetingDays] = useState<string[]>([]);
  const [content,setContent] = useState<any>("");
  const dispatch = useAppDispatch();

  const onSubmitHanlder = (event : any)=>{
    
    const {meetingType,location,gameType,meetingTime,meetingMemberNum,openKakao,title} = event;

    if(location === ""){
      return dispatch(open({Component : Error,props : {errorMessage : '지역 선택을 해야합니다.'}}));
    }

    if(gameType === ""){
      return dispatch(open({Component : Error,props : {errorMessage : '구기종목을 선택해주세요.'}}));
    }

    if(meetingType === "LONG"){
      if(meetingTime === ""){
        return dispatch(open({Component : Error,props : {errorMessage : '시간대을 선택해주세요.'}}));
      }
      if(meetingDays.length <= 0){
        return dispatch(open({Component : Error,props : {errorMessage : '요일을 선택해주세요.'}}));
      }
    }

    if(meetingMemberNum === ""){
      return dispatch(open({Component : Error,props : {errorMessage : '모집인원을 선택해주세요.'}}));
    }

    if(openKakao === ""){
      return dispatch(open({Component : Error,props : {errorMessage : '오픈카톡을 입력해주세요.'}}));
    }

    if(title === ""){
      return dispatch(open({Component : Error,props : {errorMessage : '제목을 입력해주세요.'}}));
    }

    if(content === ""){
      return dispatch(open({Component : Error,props : {errorMessage : '내용을 입력해주세요.'}}));
    }

    axios.post('/api/meeting',{
      meetingType,
      location,
      gameType,
      meetingTime,
      meetingMemberNum,
      openKakao,
      title,
      content,
      meetingDate : moment(meetingDate as Date).format("YYYY-MM-DD"),
      meetingDeadline : moment(meetingDeadline as Date).format("YYYY-MM-DD"),
      meetingDays : meetingDays.join(';')
    })
    .then(res=>{
      const {status,message} = res.data;
      if(status === "success"){
        dispatch(open({Component : Success,props : {
          successMessage : '작성이 완료 되었습니다.',
          onButtonHanlder : ()=>{
            router.push('/')
          }
        }}));
      }else if(status === "fail"){
        return alert(message);
      }
    })

  }
  
  return (
    <S.WrtieStyle>
      <Wrap>
        <S.Prev onClick={()=>router.push('/')}><Image src="/asset/icon/prev_arrow.svg" alt="뒤로가기" width={20} height={18}/></S.Prev>
        <Form 
          onSubmitHanlder={onSubmitHanlder} 
          setContent={setContent} 
          handleSubmit={handleSubmit} 
          register={register} 
          watch={watch}
          meetingDate={meetingDate}
          onMeetingDate={onMeetingDate}
          meetingDeadline={meetingDeadline}
          onMeetingDeadline={onMeetingDeadline}
          meetingDays={meetingDays}
          setMeetingDays={setMeetingDays}
        />
      </Wrap>
    </S.WrtieStyle>
  )
}
