"use client"
import { DetailType } from "@/types/detail";
import Header from "@components/common/Header";
import { useAppSelector } from "@store/hook";
import { Wrap } from "@styles/global";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import * as S from "./detail.style";
import moment from "moment";
import ViewIcon from "@asset/icon/view.svg";
import Bookmark from "@components/common/Button/Bookmark";
import { GAMETYPE, LOCATION, MEETINGTYPE } from "@constant/meetingQuery";
import { Viewer } from "@toast-ui/react-editor";
import Recommends from "@components/Recommends/Recommends";
import { useQuery } from "@tanstack/react-query";
import { getDetailMeeting } from "@lib/actions/getMeeting";

export default function Detail({ params }: { params: { postid: string } }) {

  const user = useAppSelector(state=>state.user);
  const router = useRouter();

  const [bookmarkCount,setBookmarkCount] = useState(0);

  const removeHanlder = (postid : number)=>{
    axios.delete('/api/post/write',{
      params : {
        post_id : postid
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

  const editClickHandler = (postid : number)=>{
    return router.push(`/post/edit/${postid}`);
  }

  const {data,isLoading} = useQuery({
    queryKey : ["detailMeeting",params,user],
    queryFn : ()=> getDetailMeeting(params.postid)
  });

  return (
    <>
      <Header/>
      {
        isLoading
          ? 
            <Suspense fallback={<>로딩중</>}/>
          :
            <S.DetailStyle>
              <Wrap>
      
                <S.Title>{data?.title}</S.Title>
      
                <S.Top>
                  <S.TopFlex>
                    <p>{data?.author}</p>
                    <p>{moment(data?.createdDateTime).format('YYYY-MM-DD')}</p>
                    <S.View>
                      <ViewIcon stroke="#A5A5A5"/>
                      {data?.viewCount}
                    </S.View>
                  </S.TopFlex>
                  <S.BookFlex>
                    <Bookmark
                      postid={data?.postId as number} 
                      status={data?.bookmarked as boolean} 
                      bookmarkCount={bookmarkCount}
                      setBookmarkCount={setBookmarkCount}
                    />
                    <p>{data?.bookmarkCount}</p>
                  </S.BookFlex>
                </S.Top>
      
                <S.Grid>
                  <S.Col>
                    <h4>모집형식</h4>
                    <p>{ data ? MEETINGTYPE[data.meetingType] : ""}</p>
                  </S.Col>
                  <S.Col>
                    <h4>지역</h4>
                    <p>{ data ? LOCATION[data.location] : "" }</p>
                  </S.Col>
                  <S.Col>
                    <h4>구기종목</h4>
                    <p>{ data ? GAMETYPE[data.gameType] : "" }</p>
                  </S.Col>
                  {
                    data?.meetingType === "LONG" 
                    ?
                      <>
                        <S.Col>
                          <h4>시간대</h4>
                          <p>{data.meetingTime}</p>
                        </S.Col>
                        <S.Col>
                          <h4>모임 요일</h4>
                          <p>{data.meetingDays.split(';')}</p>
                        </S.Col>
                      </>
                    :
                      <S.Col>
                        <h4>모임 날짜</h4>
                        <p>{moment(data?.meetingDateTime).format('YYYY-MM-DD')}</p>
                      </S.Col>
                  }
                  <S.Col>
                    <h4>모집인원</h4>
                    <p>{data?.meetingMemberNum} 명</p>
                  </S.Col>
                  <S.Col>
                    <h4>모집마감</h4>
                    <p>{data?.meetingDeadline}</p>
                  </S.Col>
                  <S.Col $open={true}>
                    <h4>오픈카톡 주소</h4>
                    <a href={data?.openKakao} target="_blank">오픈톡 참여 <img src="/asset/icon/link.svg" alt="" /></a>
                  </S.Col>
                </S.Grid>
      
                <S.Desc>
                  <Viewer initialValue={data?.content} />
                </S.Desc>
      
                <S.BtnList>
                  { 
                    data?.yours && 
                    <S.Btn 
                      $type={"error"} 
                      onClick={()=>removeHanlder(data.postId)}
                    >삭제 하기</S.Btn>
                  }
                  <S.Btn 
                    onClick={()=>router.push('/')}
                  >목록 보기</S.Btn>
                  {
                    data?.yours && 
                      <S.Btn 
                        $type={"edit"} 
                        onClick={()=>editClickHandler(data.postId)}
                      >수정 하기</S.Btn>
                  }
                </S.BtnList>
      
                <Recommends/>
      
              </Wrap>
            </S.DetailStyle>
      }
    </>
  )

}
