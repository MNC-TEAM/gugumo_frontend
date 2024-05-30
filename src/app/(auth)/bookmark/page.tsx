"use client"
import * as S from "@components/main/style";
import * as B from "./bookmark.style";
import { Wrap } from "@styles/global";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { meetingType, pageableType } from "@/types/meeting";
import Paging from "@components/main/Paging";
import Card from "@components/common/Card/Main/Card";

export default function Home() {

  const {register,handleSubmit} = useForm();

  const [page,setPage] = useState(1);
  const [pageable,setPageable] = useState<pageableType | null>(null);

  const [q,setQ] = useState('');
  const [content,setContent] = useState<meetingType[]>([]);

  const searchSubmitHanlder = (event : any)=>{
    const {q} = event;
    setQ(q);
  }

  useEffect(()=>{

    axios.get('/api/post/bookmark',{
      params : {
        page,
        q
      }
    })
    .then((res)=>{
      
      const {status,message,data} = res.data;

      if(status === "success"){
        const {content,pageable} = data;
        setContent(content);
        setPageable(pageable);
      }else if(status === "fail"){
        alert(message);
        setContent([]);
      }

    })
    .catch(()=>{
      console.log('서버 에러');
    });

  },[q,page]);

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
            content.length > 0 ?
              <S.Grid>
                {content.map((el)=>
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
            : <p style={{textAlign : 'center'}}>북마크가 존재하지 않습니다.</p>
          }
            
          {
            !pageable?.empty &&
              <S.Paging>
                <Paging page={page} setPage={setPage} pageable={pageable}/>
              </S.Paging>
          }
          
        </B.BookMakrLayout>

      </Wrap>
    </S.MainStyle>
  );
}