'use client'

import { useState } from "react";
import BallTag from "../components/common/Button/BallTag/BallTag";
import Tag from "../components/common/Button/Tag";
import Card from "../components/common/Card/Layout";
import * as S from "../components/main/style";
import {Swiper,SwiperSlide} from 'swiper/react';
import { Wrap } from "@/styles/global";

export default function Home() {
  
  const [recruit,setRecruit] = useState('모집중');
  const recruitClickHandler = (event : string)=>{
    setRecruit(event);
  }
  const [gameType,setGameType] = useState('All');
  const gameTypeClickHandler = (event : string)=>{
    setGameType(event);
  }
  const [location,setLocation] = useState('전체');
  const locationClickHandler = (event : string)=>{
    setLocation(event);
  }

  return (
    <S.MainStyle>
      <Wrap>

        <Swiper
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
        </Swiper>

        <S.SearchFlex>

          <S.RecruitStyle>
            <S.RecruitButton 
              $active={recruit==="모집중"} 
              onClick={()=>recruitClickHandler('모집중')}
            >모집중</S.RecruitButton >
            <S.RecruitButton  
              $active={recruit==="모집완료"} 
              onClick={()=>recruitClickHandler('모집완료')}
            >모집완료</S.RecruitButton >
            <S.RecruitButton  
              $active={recruit==="전체"} 
              onClick={()=>recruitClickHandler('전체')}
            >전체</S.RecruitButton >
          </S.RecruitStyle>

          <S.Search>
            <input type="text" />
            <button>
              <img src="/asset/icon/search.svg" alt="검색버튼" />
            </button>
          </S.Search>
        </S.SearchFlex>

        <S.Tag>
          <S.SmallText>지역</S.SmallText>
          <S.Flex>
            {
              ["전체","서울","경기","인천","대구","부산","경남","경북","강원","전남","전북","그 외"]
              .map((e,i)=>
              <Tag 
                onClick={()=>locationClickHandler(e)} 
                key={i} 
                active={e===location ? true : false} 
                label={e}
              />)
            }
          </S.Flex>
        </S.Tag>

        <S.Tag>
          <S.SmallText>종목</S.SmallText>
          <S.Flex>
            <BallTag
              onClick={()=>gameTypeClickHandler('All')}
              active={gameType === "All" ? true : false} 
            />
            {
              ["ball01","ball02","ball03","ball04","ball05","ball06"].map((e,index)=>
                <BallTag
                  onClick={()=>gameTypeClickHandler(e)}
                  key={index} 
                  gametype={e}
                  active={gameType === e ? true : false} 
                />
              )
            }
          </S.Flex>
        </S.Tag>

        <S.Layout>
          
          {/* <S.Order>
            <div>최신순 <img src="/asset/icon/down.svg" alt="순서" /></div>
          </S.Order> */}
          
          <S.Grid>
            {
              new Array(12).fill(0).map((_,i)=>
                <Card
                  bookmarkStatus={false}
                  key={i}
                  postId={1}
                  status={"모집중"}
                  gameType={"배드민턴"}
                  location={"인천"}
                  title={"인천에서 배드민턴 같이 치실 분 구합니다!"}
                  meetingDateTime={"09"}
                  meetingMemberNum={2}
                  meetingDeadline={Date.now()}
                />
              )
            }
          </S.Grid>
          
        </S.Layout>

      </Wrap>
    </S.MainStyle>
  );

}