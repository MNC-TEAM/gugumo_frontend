"use client"
import * as S from "@components/main/style";
import * as B from "./bookmark.style";
import { Wrap } from "@styles/global";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Paging from "@components/main/Paging";
import Card from "@components/common/Card/Main/Card";
import { useBookMark } from "@hooks/useMeeting";
import HashLoad from "@components/Loading/HashLoad";

export default function Home() {

  const {register,handleSubmit} = useForm();
  const [page,setPage] = useState(1);
  const [q,setQ] = useState('');

  const searchSubmitHanlder = (event : any)=>{
    const {q} = event;
    setQ(q);
  }

  const {data : content,isLoading} = useBookMark({q,page});

  return (
    <S.MainStyle>
      <Wrap>
        
        <S.SearchFlex>
            <h4>북마크</h4>
            <S.Search onSubmit={handleSubmit(searchSubmitHanlder)}>
              <input 
                type="text" 
                placeholder="제목,글 내용을 검색해보세요!"
                {...register("q")}
              />
              <button type="submit">
                <img src="/asset/icon/search.svg" alt="검색버튼" />
              </button>
            </S.Search>
        </S.SearchFlex>

        <B.BookMakrLayout>

          {
            isLoading 
            ? 
              <HashLoad/>
            :
              (
                content && content.data.content.length > 0 ?
                  <S.Grid>
                    {content?.data.content.map((el)=>
                      <Card
                        bookmarkStatus={el.bookmarked}
                        key={el.postId}
                        postId={el.postId}
                        status={el.meetingStatus}
                        gameType={el.gameType}
                        location={el.location}
                        title={el.title}
                        meetingDateTime={el.meetingDateTime}
                        meetingMemberNum={el.meetingMemberNum}
                        meetingDeadline={el.meetingDeadline}
                      />
                    )}
                  </S.Grid>
                : <p style={{ padding : "150px 0",gridColumn: "1 / 5",textAlign : "center"}}>게시글이 존재하지 않습니다.</p>
              )
          }
            
          <S.Paging>
            <Paging page={page} setPage={setPage} pageable={content?.data.pageable}/>
          </S.Paging>
          
        </B.BookMakrLayout>

      </Wrap>
    </S.MainStyle>
  );
}