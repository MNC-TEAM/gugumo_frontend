"use client"
import * as S from "../../style";
import { Wrap } from "@styles/global";
import { useEffect, useState } from "react";
import moment from "moment";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAppSelector } from "@store/hook";
import { useRouter } from "next/navigation";
import Form from "@components/post/Form/Form";
import { useDetail } from "@hooks/useMeeting";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Post({params} : {params : {postid : string}}) {

  const router = useRouter();
  const user = useAppSelector(state=>state.user);
  const {register,handleSubmit,watch,setValue} = useForm();
    
  const [meetingDate, onMeetingDate] = useState<Value>(new Date());
  const [meetingDeadline, onMeetingDeadline] = useState<Value>(new Date());
  const [meetingDays,setMeetingDays] = useState<string[]>([]);
  const [content,setContent] = useState<any>(undefined);

  const {detail,mutate} = useDetail(params.postid);

  // 데이터 가져오기
  useEffect(()=>{

    if(!detail) return;

    const {status,data,message} = detail;

    if(status === "success"){
      Object.keys(data).forEach((key) => { // 가져온 데이터의 각 키와 값을 반복하여 setValue로 설정합니다.
        if(key === "meetingTime"){
          setValue(key, data[key].split(":")[0]);
        }else if(key === "meetingDays"){
          const array : string[] = data[key].split(';');
          setMeetingDays([...array]);
        }else {
          setValue(key, data[key]);
        }
      });
      setContent(data.content);
    }else if(status === "fail"){
      return alert(message);
    }

  },[detail]);

  useEffect(()=>{
    mutate();
  },[params.postid,setValue,user]);

  // 수정
  const onSubmitHanlder = (event : any)=>{

    const {meetingStatus,meetingType,location,gameType,meetingTime,meetingMemberNum,openKakao,title} = event;

    if(location === ""){
      return alert('지역 선택을 해야합니다.');
    }

    if(gameType === ""){
      return alert('구기종목을 선택해주세요.');
    }

    if(meetingType === "LONG"){

      if(meetingTime === ""){
        return alert('시간대을 선택해주세요.');
      }

      if(meetingDays.length <= 0){
        return alert('요일을 선택해주세요.');
      }

    }

    if(meetingMemberNum === ""){
      return alert('모집인원을 선택해주세요.');
    }

    if(openKakao === ""){
      return alert('오픈카톡을 입력해주세요.');
    }

    if(title === ""){
      return alert('제목을 입력해주세요.');
    }

    if(content === ""){
      return alert('내용을 입력해주세요.');
    }

    axios.patch(`/api/meeting/${params.postid}`,{
      meetingStatus,
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
        alert('수정이 완료 되었습니다.');
        router.push(`/detail/${params.postid}`);
      }else if(status === "fail"){
        return alert(message);
      }
    });
    
  }

  return (
    <S.WrtieStyle>
      <Wrap>
        
        <S.Prev onClick={()=>router.back()}><img src="/asset/icon/prev_arrow.svg" alt="뒤로가기" /></S.Prev>

        <Form
          edit={true}
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
          content={content}
        />

      </Wrap>
    </S.WrtieStyle>
  )
}
