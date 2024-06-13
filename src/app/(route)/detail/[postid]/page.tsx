"use client"
import * as S from "./detail.style";
import Header from "@components/common/Header";
import { Wrap } from "@styles/global";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import ViewIcon from "@asset/icon/view.svg";
import Bookmark from "@components/common/Button/Bookmark";
import { GAMETYPE, LOCATION, MEETINGTYPE } from "@constant/meetingQuery";
import { Viewer } from "@toast-ui/react-editor";
import Recommends from "@components/Recommends/Recommends";
import { useDetail } from "../../../../hooks/useMeeting";
import Comment from "@components/page/detail/Comment/Comment";
import White from "@components/common/Button/White/White";
import HashLoad from "@components/Loading/HashLoad";
import { BookMarkSkeleton } from "@components/common/Card/Card.style";

export default function Detail({ params }: { params: { postid: string } }) {

  const router = useRouter();
  const [bookmarkCount,setBookmarkCount] = useState(0);
  const viewRef = useRef<Viewer>(null);

  const removeHanlder = (postid : number)=>{
    if(confirm('정말 삭제하시겠습니까?')){
      axios.delete(`/api/meeting/${postid}`)
      .then(res=>{
        const {status,message} = res.data;

        if(status === "success"){
          alert('삭제가 완료되었습니다.');
          return router.push('/');
        } else if(status === "fail"){
          return alert(message);
        }

      });
    }
  }

  const editClickHandler = (postid : number)=>{
    return router.push(`/post/edit/${postid}`);
  }

  const {detail,isLoading} = useDetail(params.postid);

  useEffect(()=>{

    if(!detail) return;
    viewRef.current?.getInstance().setMarkdown(detail.data.content);
    setBookmarkCount(detail.data.bookmarkCount);

  },[detail]);

  return (
    <>
      <Header/>
      <S.DetailStyle>
        <Wrap>
          <S.Title $skeleton={isLoading}>{detail?.data.title}</S.Title>
          <S.Top>
            <S.TopFlex>
              <p>{detail?.data.author !== "" ? detail?.data.author : "탈퇴한 유저"}</p>
              <p>{moment(detail?.data.createdDateTime).format('YYYY-MM-DD')}</p>
              <S.View>
                <ViewIcon stroke="#A5A5A5"/>
                {detail?.data.viewCount}
              </S.View>
            </S.TopFlex>
            <S.BookFlex>
              {
                isLoading 
                ?
                  <BookMarkSkeleton/>
                :
                  <>
                    <Bookmark
                      postid={detail?.data.postId as number} 
                      status={detail ? detail.data.bookmarked  : false} 
                      bookmarkCount={bookmarkCount}
                      setBookmarkCount={setBookmarkCount}
                    />
                    <p>{bookmarkCount}</p>
                  </>
              }
            </S.BookFlex>
          </S.Top>
          <S.Grid>
            <S.Col>
              <h4>모집형식</h4>
              <p>{ detail ? MEETINGTYPE[detail.data.meetingType] : ""}</p>
            </S.Col>
            <S.Col>
              <h4>지역</h4>
              <p>{ detail ? LOCATION[detail.data.location] : "" }</p>
            </S.Col>
            <S.Col>
              <h4>구기종목</h4>
              <p>{ detail ? GAMETYPE[detail.data.gameType] : "" }</p>
            </S.Col>
            {
              detail?.data?.meetingType === "LONG" 
              ?
                <>
                  <S.Col>
                    <h4>시간대</h4>
                    <p>{detail.data.meetingTime}</p>
                  </S.Col>
                  <S.Col>
                    <h4>모임 요일</h4>
                    <p>{detail.data.meetingDays.split(';')}</p>
                  </S.Col>
                </>
              :
                <S.Col>
                  <h4>모임 날짜</h4>
                  <p>{moment(detail?.data.meetingDateTime).format('YYYY-MM-DD')}</p>
                </S.Col>
            }
            <S.Col>
              <h4>모집인원</h4>
              <p>{detail?.data.meetingMemberNum} 명</p>
            </S.Col>
            <S.Col>
              <h4>모집마감</h4>
              <p>{detail?.data.meetingDeadline}</p>
            </S.Col>
            <S.Col $open={true}>
              <h4>오픈카톡 주소</h4>
              <a href={detail?.data.openKakao} target="_blank">오픈톡 참여 <img src="/asset/icon/link.svg" alt="" /></a>
            </S.Col>
          </S.Grid>
          <S.Desc>
            <Viewer ref={viewRef} initialValue={detail?.data.content} />
          </S.Desc>
          <S.BtnList>
            { 
              detail?.data.yours && 
              <S.Btn
                $type={"error"} 
                onClick={()=>removeHanlder(detail.data.postId)}
              >삭제 하기</S.Btn>
            }
            <White
              type="button"
              onClick={()=>router.push('/')}
            >목록 보기</White>
            {
              detail?.data.yours && 
                <S.Btn 
                  $type={"edit"} 
                  onClick={()=>editClickHandler(detail.data.postId)}
                >수정 하기</S.Btn>
            }
          </S.BtnList>
          {/* 추천 매칭 */}
          <Recommends/>
          {/* 댓글 */}
          <Comment postId={params.postid}/>
        </Wrap>
      </S.DetailStyle>
    </>
  )

}
