"use client"
import { Wrap } from "@/styles/global";
import * as S from "./detail.style";
import Prev from "@/app/components/common/Button/Prev/Prev";
import Bookmark from "@/app/components/common/Button/Bookmark";
import ViewIcon from "@asset/icon/view.svg";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { DetailType } from "@/app/types/detail";
import moment from "moment";
import { MoonLoader } from "react-spinners";
import { useAppSelector } from "@/store/hook";
import { useRouter } from "next/navigation";
import { GAMETYPE, LOCATION, MEETINGTYPE } from "@/app/constant/meetingQuery";

export default function Detail({ params }: { params: { postid: string } }) {

  const user = useAppSelector(state=>state.user);
  const router = useRouter();

  const [meeting,setMeeting] = useState<DetailType | null>(null);
  const [isLoading,setIsLoading] = useState(true);

  const removeHanlder = (postid : string)=>{
    axios.delete('/api/post/write',{
      params : {
        post_id : postid
      },
      headers : {
        Authorization : user
      }
    })
    .then(res=>{
      const {status,message} = res.data;

      if(status === "success"){
        alert('삭제가 완료되었습니다.');
        return router.push('/');
      } else if(status === "fail"){
        return alert(message);
      }

    })
    .catch(()=>{
      console.error('서버 에러');
    })
  }

  useEffect(()=>{

    axios.get(`/api/post/detail/${params.postid}`,{
      headers : {
        Authorization : user
      }
    })
    .then(res=>{

      const {status,data,message} = res.data;

      if(status === "success"){
        setMeeting(data);
        setIsLoading(false);
      }else{
        console.log(message);
      }

    })
    .catch(err=>{
      console.log('서버 에러');
    });

  },[params,user]);

  return (
    <>
      {
        isLoading ?
          <div style={{top : 0, left : 0, width : "100%", height : "100%", position : "fixed", display : "flex", alignItems : "center", justifyContent : "center", background : "rgba(255,255,255,0.2)", backdropFilter : "blur(10px)"}}>
            <MoonLoader color="#574fff"></MoonLoader>
          </div>
        :
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
                  <p>{ meeting ? MEETINGTYPE[meeting.meetingType] : ""}</p>
                </S.Col>
                <S.Col>
                  <h4>지역</h4>
                  <p>{ meeting ? LOCATION[meeting.location] : "" }</p>
                </S.Col>
                <S.Col>
                  <h4>구기종목</h4>
                  <p>{ meeting ? GAMETYPE[meeting.gameType] : "" }</p>
                </S.Col>
                {
                  meeting?.meetingType === "LONG" 
                  ?
                    <>
                      <S.Col>
                        <h4>시간대</h4>
                        <p>{meeting?.meetingTime}</p>
                      </S.Col>
                      <S.Col>
                        <h4>모임 요일</h4>
                        <p>{meeting?.meetingDays.split(';')}</p>
                      </S.Col>
                    </>
                  :
                    <S.Col>
                      <h4>모임 날짜</h4>
                      <p>{moment(meeting?.meetingDateTime).format('YYYY-MM-DD')}</p>
                    </S.Col>
                }
                <S.Col>
                  <h4>모집인원</h4>
                  <p>{meeting?.meetingMemberNum} 명</p>
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

              <div style={{display : "grid", gridTemplateColumns : "repeat(3,1fr)"}}>
                {
                  meeting?.yours && <button onClick={()=>removeHanlder(params.postid)}>삭제</button>
                }
                <button onClick={()=>router.push('/')}>목록</button>
                {
                  meeting?.yours && <button onClick={()=>router.push(`/edit/${params.postid}`)}>수정</button>
                }
              </div>

            </Wrap>
          </S.DetailStyle>
      }
    </>
  )
}
