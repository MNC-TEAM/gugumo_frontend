"use client"
import { Wrap } from "@/styles/global";
import * as S from "./detail.style";
import Prev from "@/app/components/common/Button/Prev/Prev";
import Bookmark from "@/app/components/common/Button/Bookmark";
import ViewIcon from "@asset/icon/view.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailType } from "@/app/types/detail";
import moment from "moment";
import { STATUS } from "@/app/constant/meetingQuery";

export default function Detail({ params }: { params: { postid: string } }) {

  const [meeting,setMeeting] = useState<DetailType | null>(null);

  useEffect(()=>{

    axios.get(`/api/post/detail/${params.postid}`)
    .then(res=>{

      const {status,data,message} = res.data;

      if(status === "success"){
        setMeeting(data);
      }else{
        console.log(message);
      }

    })
    .catch(err=>{
      console.log('서버 에러');
    });

  },[params]);

  return (
    <S.DetailStyle>
      <Wrap>
        <Prev/>

        <S.Flex>
          <h1>{meeting?.title}</h1>
          <S.BookFlex>
            <Bookmark postid={Number(params.postid)} status={false} />
            <p>{meeting?.bookmarkCount}</p>
          </S.BookFlex>
        </S.Flex>

        <S.Top>
          <S.TopFlex>
            <p>{meeting?.author}</p>
            <p>{moment(meeting?.createdDateTime).format('YYYY-MM-DD')}</p>
            <S.View>
              <ViewIcon stroke="#A5A5A5"/>
              {meeting?.viewCount}
            </S.View>
          </S.TopFlex>
          <S.BookFlex>
            <Bookmark postid={Number(params.postid)} status={false} />
            <p>{meeting?.bookmarkCount}</p>
          </S.BookFlex>
        </S.Top>

        <S.Grid>
          <S.Col>
            <h4>모집형식</h4>
            <p>{meeting?.meetingType}</p>
          </S.Col>
          <S.Col>
            <h4>지역</h4>
            <p>{meeting?.location}</p>
          </S.Col>
          <S.Col>
            <h4>구기종목</h4>
            <p>{meeting?.gameType}</p>
          </S.Col>
          <S.Col>
            <h4>시간대</h4>
            <p>{meeting?.meetingTime}</p>
          </S.Col>
          <S.Col>
            <h4>모집인원</h4>
            <p>{meeting?.meetingMemberNum} 명</p>
          </S.Col>
          <S.Col>
            <h4>모집날짜</h4>
            <p>{moment(meeting?.meetingDateTime).format('YYYY-MM-DD')}</p>
          </S.Col>
          <S.Col>
            <h4>모집마감</h4>
            <p>{meeting?.meetingDeadline}</p>
          </S.Col>
          <S.Col>
            <h4>오픈카톡 주소</h4>
            <a href={meeting?.openKakao} target="_blank">오픈톡 참여 <img src="/asset/icon/link.svg" alt="" /></a>
          </S.Col>
        </S.Grid>
        <S.Desc>
          {meeting?.content}
        </S.Desc>
      </Wrap>
    </S.DetailStyle>
  )
}
