"use client"
import * as S from "../../write/style";
import { Wrap } from "@/styles/global";
import DownIcon from "@asset/icon/down.svg";
import CalenderIcon from "@asset/icon/calender.svg";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import Prev from "@/app/components/common/Button/Prev/Prev";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAppSelector } from "@/store/hook";
import { useRouter } from "next/navigation";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Edit({param} : {param : {postid : string}}) {

  const router = useRouter();

  const edit = useAppSelector(state=>state.edit);
  const user = useAppSelector(state=>state.user);

  const {register,handleSubmit,watch} = useForm({
    defaultValues : {
      meetingType : edit.
    }
  });
  const meetingTypeWatch = watch('meetingType','SHORT');

  const [meetingDate, onMeetingDate] = useState<Value>(new Date());
  const [meetingDateOpen, setMeetingDateOpen] = useState(false);
  const meetingDateChangeHandler = (value: Value)=>{
    onMeetingDate(value);
    setMeetingDateOpen(!meetingDateOpen);
  }
  const meetingDateClickHandler = ()=>{
    setMeetingDateOpen(!meetingDateOpen);
  }

  const [meetingDeadline, onMeetingDeadline] = useState<Value>(new Date());
  const [meetingDeadlineOpen, setMeetingDeadlineOpen] = useState(false);
  const meetingDeadlineChangeHandler = (value: Value)=>{
    onMeetingDeadline(value);
    setMeetingDeadlineOpen(!meetingDeadlineOpen);
  }
  const meetingDeadlineClickHandler = ()=>{
    setMeetingDeadlineOpen(!meetingDeadlineOpen);
  }

  const [meetingDays,setMeetingDays] = useState<string[]>([]);
  const meetingDaysClickHanlder = (event : string)=>{
    
    if(meetingDays.includes(event)){
      setMeetingDays(meetingDays.filter(e=>e !== event));
    }else{
      setMeetingDays([...meetingDays, event]);
    }
  }

  const onSubmitHanlder = (event : any)=>{

    const {meetingType,location,gameType,meetingTime,meetingMemberNum,openKakao,title,content} = event;

    if(location === ""){
      return alert('지역 선택을 해야합니다.');
    }

    if(gameType === ""){
      return alert('구기종목을 선택해주세요.');
    }

    if(meetingTime === ""){
      return alert('시간대을 선택해주세요.');
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

    axios.post('/api/post/write',{
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
    },{
      headers : {
        Authorization : user
      }
    })
    .then(res=>{
      const {status} = res.data;
      if(status === "success"){
        alert('작성이 완료 되었습니다.');
        return router.push('/');
      }
    })
    .catch(err=>{
      console.log('서버 에러');
    });

  }

  return (
    <S.WrtieStyle>
      <Wrap>
        
        <Prev/>

        <form onSubmit={handleSubmit(onSubmitHanlder)}>
          <S.Flex>
            <p>1</p>
            <h3>모임 정보를 입력해주세요</h3>
          </S.Flex>

          <S.Gird>

            <S.InputStyle>
              <label htmlFor="meetingType">모집형식</label>
              <S.InputBox>
                <select id="meetingType" {...register('meetingType')}>
                  <option value="SHORT">단기모집</option>
                  <option value="LONG">장기모집</option>
                </select>
                <DownIcon stroke={'#878787'} />
              </S.InputBox>
            </S.InputStyle>

            <S.InputStyle>
              <label htmlFor="location">지역 선택</label>
              <S.InputBox>
                <select id="location" {...register('location')}>
                  <option value="">지역 선택을 선택해주세요.</option>
                  <option value="SEOUL">서울</option>
                  <option value="INCHEON">인천</option>
                  <option value="GYEONGGI">경기</option>
                  <option value="DAEGU">대구</option>
                  <option value="BUSAN">부산</option>
                  <option value="GYEONGNAM">경남</option>
                  <option value="GYEONGBUK">경북</option>
                  <option value="GANGWON">경원</option>
                  <option value="JEONNAM">전남</option>
                  <option value="JEONBUK">전북</option>
                  <option value="OTHER">그외</option>
                </select>
                <DownIcon stroke={'#878787'} />
              </S.InputBox>
            </S.InputStyle>

            <S.InputStyle>
              <label htmlFor="gameType">구기종목</label>
              <S.InputBox>
                <select id="gameType" {...register('gameType')}>
                  <option value="">구기종목을 선택해주세요.</option>
                  <option value="BADMINTON">배드민턴</option>
                  <option value="BASKETBALL">농구</option>
                  <option value="FUTSAL">풋살</option>
                  <option value="TENNIS">테니스</option>
                  <option value="TABLETENNIS">탁구</option>
                  <option value="BASEBALL">야구</option>
                </select>
                <DownIcon stroke={'#878787'} />
              </S.InputBox>
            </S.InputStyle>

            <S.InputStyle>
              <label htmlFor="meetingTime">시간대</label>
              <S.InputBox>
                <select id="meetingTime" {...register('meetingTime')}>
                  <option value="">시간대을 선택해주세요.</option>
                  <option value="1">1시</option>
                  <option value="2">2시</option>
                  <option value="3">3시</option>
                  <option value="4">4시</option>
                  <option value="5">5시</option>
                  <option value="6">6시</option>
                  <option value="7">7시</option>
                  <option value="8">8시</option>
                  <option value="9">9시</option>
                  <option value="10">10시</option>
                  <option value="11">11시</option>
                  <option value="12">12시</option>
                  <option value="13">13시</option>
                  <option value="14">14시</option>
                  <option value="15">15시</option>
                  <option value="16">16시</option>
                  <option value="17">17시</option>
                  <option value="18">18시</option>
                  <option value="19">19시</option>
                  <option value="20">20시</option>
                  <option value="21">21시</option>
                  <option value="22">22시</option>
                  <option value="23">23시</option>
                </select>
                <DownIcon stroke={'#878787'} />
              </S.InputBox>
            </S.InputStyle>

            <S.InputStyle>
              <label htmlFor="meetingMemberNum">모집인원</label>
              <S.InputBox>
                <select id="meetingMemberNum" {...register('meetingMemberNum')}>
                  <option value="">모집인원을 선택해주세요.</option>
                  <option value="1">1명</option>
                  <option value="2">2명</option>
                  <option value="3">3명</option>
                  <option value="4">4명</option>
                  <option value="5">5명 이상</option>
                </select>
                <DownIcon stroke={'#878787'} />
              </S.InputBox>
            </S.InputStyle>

            {
              meetingTypeWatch === "SHORT" 
              ?
              <S.InputStyle>
                <label htmlFor="meetingDate">모임 날짜</label>
                <S.InputBox>
                  <S.CalendarBox onClick={meetingDateClickHandler}>
                    {moment(meetingDate as Date).format("YYYY.MM.DD")}
                  </S.CalendarBox>
                  {
                    meetingDateOpen && <Calendar onChange={meetingDateChangeHandler} value={meetingDate} />
                  }
                  <CalenderIcon stroke="#878787"/>
                </S.InputBox>
              </S.InputStyle>
              :
              <S.InputStyle>
                <p>모임 요일</p>
                <S.DaysGrid>
                  {
                    ['월','화','수','목','금','토','일'].map((el,index)=>
                      <S.DaysCheckbox 
                        onClick={()=>meetingDaysClickHanlder(el)} 
                        key={index}
                        $active={meetingDays.includes(el)}
                      >{el}</S.DaysCheckbox>
                    )
                  }
                </S.DaysGrid>
              </S.InputStyle>
            }
            
            <S.InputStyle>
              <label htmlFor="meetingDeadline">모집 마감</label>
              <S.InputBox>
                <S.CalendarBox onClick={meetingDeadlineClickHandler}>
                  {moment(meetingDeadline as Date).format("YYYY.MM.DD")}
                </S.CalendarBox>
                {
                  meetingDeadlineOpen && <Calendar onChange={meetingDeadlineChangeHandler} value={meetingDeadline} />
                }
                <CalenderIcon stroke="#878787"/>
              </S.InputBox>
            </S.InputStyle>

            <S.InputStyle>
              <label htmlFor="openKakao">오픈카톡 주소</label>
              <S.InputBox>
                <input type="text" id="openKakao" placeholder="오픈카톡 주소를 입력해주세요." {...register('openKakao')}/>
              </S.InputBox>
            </S.InputStyle>

          </S.Gird>

          <S.DescBox>

            <S.Flex>
              <p>2</p>
              <h3>모임에 대해 소개해주세요</h3>
            </S.Flex>

            <S.DescInputStyle>
              <label htmlFor="title">제목</label>
              <input type="text" id="title" placeholder="제목을 입력해주세요" {...register('title')} />
            </S.DescInputStyle>

            <S.DescInputStyle>
              <label htmlFor="content">내용</label>
              <textarea id="content" placeholder="내용을 입력해주세요" {...register('content')}></textarea>
            </S.DescInputStyle>

          </S.DescBox>
          
          <S.Button type="submit">수정하기</S.Button>
        </form>

      </Wrap>
    </S.WrtieStyle>
  )
}