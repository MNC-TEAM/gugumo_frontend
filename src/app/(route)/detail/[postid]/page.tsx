"use client"
import * as S from "./detail.style";
import Header from "@components/common/Header";
import { Wrap } from "@styles/global";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Viewer } from "@toast-ui/react-editor";
import Recommends from "@components/Recommends/Recommends";
import { useDetail } from "../../../../hooks/useMeeting";
import Comment from "@components/page/detail/Comment/Comment";
import White from "@components/common/Button/White/White";
import DetailTop from "@components/page/detail/DetailTop";
import DetailGrid from "@components/page/detail/DetailGrid";
import { Prev } from "@app/(auth)/mypage/mypage.style";
import Image from "next/image";

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
          <Prev onClick={()=>router.push('/')}><Image src="/asset/icon/prev_arrow.svg" alt="뒤로가기" width={20} height={18}/></Prev>
          <S.Title $skeleton={isLoading}>{detail?.data.title}</S.Title>
          <DetailTop 
            isLoading={isLoading} 
            detail={detail} 
            bookmarkCount={bookmarkCount} 
            setBookmarkCount={setBookmarkCount}
          />
          <DetailGrid
            isLoading={isLoading}
            detail={detail}
          />
          <S.Desc $isLoading={isLoading}>
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
          { !isLoading && <Comment postId={params.postid}/> }
        </Wrap>
      </S.DetailStyle>
    </>
  )

}
