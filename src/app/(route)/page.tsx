'use client'

import { useEffect, useState } from "react";
import BallTag from "../components/common/Button/BallTag/BallTag";
import Location from "../components/common/Button/Location";
import Card from "../components/common/Card";
import * as S from "../components/main/style";
import { Wrap } from "@/styles/global";
import axios from "axios";
import Header from "../components/common/Header";
import { useForm } from "react-hook-form";
import { GAMETYPE, LOCATION, MEETINGSTATUS } from "../constant/meeting";
import { meetingType, pageableType } from "../types/meeting";
import { useAppSelector } from "@/store/hook";
import WhiteBtn from "../components/common/Button/WhiteBtn";
import Paging from "../components/main/Paging";
import DownIcon from "@asset/icon/down.svg";
import { SORT } from "../constant/sort";

export default function Home() {
  
  const user = useAppSelector(state=>state.user);

  const {register,handleSubmit} = useForm();

  const [page,setPage] = useState(1);
  const [pageable,setPageable] = useState<pageableType | null>(null);

  const [sort,setSort] = useState('NEW');
  const [sortOpen,setSortOpen] = useState(false);

  const [meetingstatus,setMeetingstatus] = useState('RECRUIT');
  const meetingstatusClickHandler = (event : string)=>{
    setMeetingstatus(event);
  }

  const [location,setLocation] = useState("");
  const locationClickHandler = (event : string)=>{
    setLocation(event);
  }

  const [gametype,setGametype] = useState("");
  const gametypeClickHandler = (event : string)=>{
    setGametype(event);
  }
  
  const [q,setQ] = useState('');
  const [content,setContent] = useState<meetingType[]>([]);

  const searchSubmitHanlder = (event : any)=>{
    const {q} = event;
    setQ(q);
  }

  useEffect(()=>{
    axios.get('/api/post/get',{
      params : {
        page,
        meetingstatus,
        q,
        location,
        gametype,
        sort
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
        setPageable(pageable);
      }else if(status === "fail"){
        alert(message);
        setContent([]);
      }

    })
    .catch(()=>{
      console.log('서버 에러');
    });

  },[meetingstatus,location,gametype,q,user,page,sort]);

  return (
    <>
      <Header postion={true}/>
      <S.MainStyle>

        <S.DesktopBanner></S.DesktopBanner>

        <S.MobBanner>
          <img src="/asset/image/banner.jpg" alt="배너" />
        </S.MobBanner>

        <Wrap>
          {/* <Swiper
            spaceBetween={10}
            loop={true}
            speed={600}
          >
            <SwiperSlide>
              <img src="/asset/image/banner.jpg" alt="배너" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/asset/image/banner.jpg" alt="배너" />
            </SwiperSlide>
          </Swiper> */}

          <S.SearchFlex>

            <S.RecruitStyle>
              {
                MEETINGSTATUS.map((el,index)=>
                  <S.RecruitButton
                    key={index}
                    $active={meetingstatus===el.get} 
                    onClick={()=>meetingstatusClickHandler(el.get)}
                  >{el.name}</S.RecruitButton >
                )
              }
            </S.RecruitStyle>

            <S.Search onSubmit={handleSubmit(searchSubmitHanlder)}>
              <input type="text" {...register("q")} />
              <button type="submit">
                <img src="/asset/icon/search.svg" alt="검색버튼" />
              </button>
            </S.Search>
          </S.SearchFlex>

          <S.Tag>
            <S.SmallText>지역</S.SmallText>
            <S.Flex>
              <Location
                onClick={()=>locationClickHandler("")} 
                active={"" === location ? true : false} 
                label={"전체"}
              />
              {
                LOCATION.map((e,i)=>
                <Location 
                  onClick={()=>locationClickHandler(e.get)} 
                  key={i} 
                  active={e.get === location ? true : false} 
                  label={e.name}
                />)
              }
            </S.Flex>
          </S.Tag>

          <S.Tag>
            <S.SmallText>종목</S.SmallText>
            <S.Flex>
              <BallTag
                onClick={()=>gametypeClickHandler("")}
                active={gametype === "" ? true : false} 
              />
              {
                GAMETYPE.map((e,index)=>
                  <BallTag
                    onClick={()=>gametypeClickHandler(e.get)}
                    key={index} 
                    gametype={e.get}
                    active={gametype === e.get ? true : false} 
                  />
                )
              }
            </S.Flex>
          </S.Tag>

          <S.Layout>
            
            <S.Order>
              <div>
                <p onClick={()=>setSortOpen(!sortOpen)}>{SORT[sort]} <DownIcon stroke="#878787"/></p>
                {
                  sortOpen &&
                  <ul>
                    <li onClick={()=>{setSort('NEW'); setSortOpen(!sortOpen)}}>최신순</li>
                    <li onClick={()=>{setSort('LIKE'); setSortOpen(!sortOpen)}}>인기순</li>
                    <li onClick={()=>{setSort('OLD'); setSortOpen(!sortOpen)}}>오래된순</li>
                  </ul>
                }
              </div>
            </S.Order>
            
            {
              content.length > 0 ?
              <S.Grid>
                {
                  content.map(el=>(
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
                  ))
                }
              </S.Grid>
              : <p style={{marginTop : 28, textAlign : 'center'}}>게시글이 존재하지 않습니다.</p>
            }

            <S.White>
              <WhiteBtn align="right" href={'/post/write'} edit={true}>글쓰기</WhiteBtn>
            </S.White>

            {
              pageable?.empty 
              ?
                null
              :
              <S.Paging>
                <Paging page={page} setPage={setPage} pageable={pageable}/>
              </S.Paging>
            }
            
          </S.Layout>

        </Wrap>
      </S.MainStyle>
    </>
  );
  
}