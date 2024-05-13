"use client"
import Card from "@/app/components/common/Card/Layout";
import * as S from "@/app/components/main/style";
import * as B from "./bookmark.style";
import { Wrap } from "@/styles/global";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { meetingType } from "@/app/types/meeting";
import { useAppSelector } from "@/store/hook";

export default function Home() {

  const user = useAppSelector(state=>state.user);

  const {register,handleSubmit} = useForm();

  const [q,setQ] = useState('');
  const [content,setContent] = useState<meetingType[]>([]);

  const searchSubmitHanlder = (event : any)=>{
    const {q} = event;
    setQ(q);
  }

  useEffect(()=>{

    axios.get('/api/post/bookmark',{
      params : {
        q
      },
      headers : {
        Authorization : user
      }
    })
    .then((res)=>{
      
      const {status,message,data} = res.data;

      if(status === "success"){
        const {content,pageable} = data;
        setContent(content);
      }else{
        setContent([]);
      }

    })
    .catch(()=>{
      console.log('서버 에러');
    });

  },[q])

  return (
    <S.MainStyle>
      <Wrap>
        
        <S.SearchFlex>
            <h4>북마크</h4>
            <S.Search onSubmit={handleSubmit(searchSubmitHanlder)}>
              <input type="text" {...register("q")} />
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
              : <p style={{textAlign : "center"}}>북마크가 존재하지 않습니다.</p>
            }
          
        </B.BookMakrLayout>

      </Wrap>
    </S.MainStyle>
  );
}