import React, { useState } from 'react'
import * as S from "./style";
import Input from "@components/common/Input/Write/Input/Input";
import White from "@components/common/Button/White/White";
import Day from "@components/common/Input/Write/Day/Day";
import CalenderIcon from "@asset/icon/calender.svg";
import DownIcon from "@asset/icon/down.svg";
import dynamic from 'next/dynamic';
import moment from 'moment';
import Calendar from 'react-calendar';
import { Viewer } from '@toast-ui/react-editor';

const NoSsrEditor = dynamic(()=>import("@components/post/NoSsrEditor"),{
    ssr : false
});
  
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Form(
    {
        edit,
        register,
        handleSubmit,
        watch,
        onSubmitHanlder,
        setContent,
        meetingDate,
        onMeetingDate,
        meetingDeadline,
        onMeetingDeadline,
        meetingDays,
        setMeetingDays,
        content
    } : any
) {
    
    const meetingTypeWatch = watch('meetingType','SHORT');
    
    const [meetingDateOpen, setMeetingDateOpen] = useState(false);
    const meetingDateChangeHandler = (value: Value)=>{
        onMeetingDate(value);
        setMeetingDateOpen(!meetingDateOpen);
    }
    const meetingDateClickHandler = ()=>{
    setMeetingDateOpen(!meetingDateOpen);
    }

    const [meetingDeadlineOpen, setMeetingDeadlineOpen] = useState(false);
    const meetingDeadlineChangeHandler = (value: Value)=>{
        onMeetingDeadline(value);
        setMeetingDeadlineOpen(!meetingDeadlineOpen);
    }
    const meetingDeadlineClickHandler = ()=>{
        setMeetingDeadlineOpen(!meetingDeadlineOpen);
    }

    const meetingDaysClickHanlder = (event : string)=>{
    
        if(meetingDays.includes(event)){
            setMeetingDays((meetingDays as any[]).filter(e=>e !== event));
        }else{
            setMeetingDays([...meetingDays, event]);
        }

    } 
  return (
    
    <form onSubmit={handleSubmit(onSubmitHanlder)}>
        <S.Flex>
        <p>1</p>
        <h3>모임 정보를 입력해주세요</h3>
        </S.Flex>

        <S.Gird>

        <S.InputStyle>
            <label htmlFor="meetingType">모집형식</label>
            <Input>
            <select id="meetingType" {...register('meetingType')}>
                <option value="SHORT">단기모집</option>
                <option value="LONG">장기모집</option>
            </select>
            <DownIcon stroke={'#878787'} />
            </Input>
        </S.InputStyle>

        <S.InputStyle>
            <label htmlFor="location">지역 선택</label>
            <Input>
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
            </Input>
        </S.InputStyle>

        <S.InputStyle>
            <label htmlFor="gameType">구기종목</label>
            <Input>
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
            </Input>
        </S.InputStyle>

        <S.InputStyle>
            <label htmlFor="meetingMemberNum">모집인원</label>
            <Input>
            <select id="meetingMemberNum" {...register('meetingMemberNum')}>
                <option value="">모집인원을 선택해주세요.</option>
                <option value="1">1명</option>
                <option value="2">2명</option>
                <option value="3">3명</option>
                <option value="4">4명</option>
                <option value="5">5명 이상</option>
            </select>
            <DownIcon stroke={'#878787'} />
            </Input>
        </S.InputStyle>

        {
            meetingTypeWatch === "SHORT" 
            ?
            <S.InputStyle>
            <label htmlFor="meetingDate">모임 날짜</label>
            <Input>
                <S.CalendarBox onClick={meetingDateClickHandler}>
                    {moment(meetingDate as Date).format("YYYY.MM.DD")}
                </S.CalendarBox>
                {
                    meetingDateOpen && <Calendar onChange={meetingDateChangeHandler} value={meetingDate} />
                }
                <CalenderIcon stroke="#878787"/>
            </Input>
            </S.InputStyle>
            :
            <>
            <S.InputStyle>
                <label htmlFor="meetingTime">시간대</label>
                <Input>
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
                </Input>
            </S.InputStyle>
            <S.InputStyle>
                <p>모임 요일</p>
                <S.DaysGrid>
                {
                    ['월','화','수','목','금','토','일'].map((el,index)=>
                    <Day 
                        onClick={()=>meetingDaysClickHanlder(el)} 
                        key={index}
                        $active={meetingDays.includes(el)}
                    >{el}</Day>
                    )
                }
                </S.DaysGrid>
            </S.InputStyle>
            </>
        }
        
        <S.InputStyle>
            <label htmlFor="meetingDeadline">모집 마감</label>
            <Input>
            <S.CalendarBox onClick={meetingDeadlineClickHandler}>
                {moment(meetingDeadline as Date).format("YYYY.MM.DD")}
            </S.CalendarBox>
            {
                meetingDeadlineOpen && <Calendar onChange={meetingDeadlineChangeHandler} value={meetingDeadline} />
            }
            <CalenderIcon stroke="#878787"/>
            </Input>
        </S.InputStyle>

        <S.InputStyle>
            <label htmlFor="openKakao">오픈카톡 주소</label>
            <Input>
            <input type="text" id="openKakao" placeholder="오픈카톡 주소를 입력해주세요." {...register('openKakao')}/>
            </Input>
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

        <NoSsrEditor content={content} setContent={setContent}/>

        </S.DescBox>
        
        <S.BtnList>
            <White type="submit">{edit ? "수정하기" : "작성하기"}</White>
        </S.BtnList>
    </form>

  )
}
