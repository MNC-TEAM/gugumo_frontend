"use client"
import Header from "@components/common/Header";
import { useEffect, useState } from "react";
import * as S from "@components/main/style";
import { useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import { Autoplay } from "swiper/modules";
import { useAppSelector } from "@store/hook";
import Recommend from "@components/common/Card/Recommend/Recommend";
import { GAMETYPE, LOCATION, MEETINGSTATUS } from "@constant/meeting";
import Location from "@components/common/Button/Location";
import BallTag from "@components/common/Button/BallTag/BallTag";
import { SORT } from "@constant/sort";
import Card from "@components/common/Card/Main/Card";
import Write from "@components/common/Button/Write/Write";
import Paging from "@components/main/Paging";
import { meetingType, pageableType } from "@/types/meeting";
import axios from "axios";

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
      }else{
        console.error(message);
        setContent([]);
      }

    });

  },[meetingstatus,location,gametype,q,user,page,sort]);

  return (
    <>
      <Header/>
      <S.MainStyle>

        <Swiper
            slidesPerView={1.2}
            modules={[Autoplay]}
            breakpoints={{
                "820" : {
                    slidesPerView : 1.6,
                    spaceBetween : 23
                }
            }}
            centeredSlides={true}
            spaceBetween={13}
            loop={true}
            autoplay={{
                delay : 6000
            }}
            speed={600}
        >
            <SwiperSlide>
            <S.BannerImg>
                <S.DesktopIMG src="/asset/image/banner/banner.jpg" alt="배너" />
                <S.MobileIMG src="/asset/image/banner/banner_mob.jpg" alt="배너" />
            </S.BannerImg>
            </SwiperSlide>
            <SwiperSlide>
            <S.BannerImg>
                <S.DesktopIMG src="/asset/image/banner/banner.jpg" alt="배너" />
                <S.MobileIMG src="/asset/image/banner/banner_mob.jpg" alt="배너" />
            </S.BannerImg>
            </SwiperSlide>
            <SwiperSlide>
            <S.BannerImg>
                <S.DesktopIMG src="/asset/image/banner/banner.jpg" alt="배너" />
                <S.MobileIMG src="/asset/image/banner/banner_mob.jpg" alt="배너" />
            </S.BannerImg>
            </SwiperSlide>
            <SwiperSlide>
            <S.BannerImg>
                <S.DesktopIMG src="/asset/image/banner/banner.jpg" alt="배너" />
                <S.MobileIMG src="/asset/image/banner/banner_mob.jpg" alt="배너" />
            </S.BannerImg>
            </SwiperSlide>
        </Swiper>

        <S.Wrap>

            <S.RecommendLayout>
            <h3>추천 게시물 🎯</h3>
            <div className="flex">
                <button><IoChevronBack /></button>
                <Swiper
                slidesPerView={1.2}
                breakpoints={{
                    "481" : {
                    slidesPerView : 1.5,
                    },
                    "820" : {
                    slidesPerView : 2,
                    centeredSlides : true
                    },
                    "1025" : {
                    slidesPerView : 3,
                    centeredSlides : true
                    }
                }}
                centeredSlides={false}
                spaceBetween={26}
                loop={true}
                speed={600}
                >
                <SwiperSlide>
                    <Recommend
                        bookmarkStatus={false}
                        postId={1}
                        status={""}
                        gameType={""}
                        location={""}
                        title={"테스트"}
                        meetingDateTime={"2020"}
                        meetingMemberNum={2020}
                        meetingDeadline={"2020"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Recommend
                        bookmarkStatus={false}
                        postId={1}
                        status={""}
                        gameType={""}
                        location={""}
                        title={"테스트"}
                        meetingDateTime={"2020"}
                        meetingMemberNum={2020}
                        meetingDeadline={"2020"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Recommend
                        bookmarkStatus={false}
                        postId={1}
                        status={""}
                        gameType={""}
                        location={""}
                        title={"테스트"}
                        meetingDateTime={"2020"}
                        meetingMemberNum={2020}
                        meetingDeadline={"2020"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Recommend
                        bookmarkStatus={false}
                        postId={1}
                        status={""}
                        gameType={""}
                        location={""}
                        title={"테스트"}
                        meetingDateTime={"2020"}
                        meetingMemberNum={2020}
                        meetingDeadline={"2020"}
                    />
                </SwiperSlide>
                </Swiper>
                <button><IoChevronForward /></button>
            </div>
            </S.RecommendLayout>

        </S.Wrap>

        <S.Wrap>
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
                <input type="text" {...register("q")} placeholder="제목, 글 내용을 검색해보세요!"/>
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
                <p onClick={()=>setSortOpen(!sortOpen)}>{SORT[sort]} <IoChevronDown/> </p>
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
                <Write href={'/post/write'}>새글 작성</Write>
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
        </S.Wrap>

      </S.MainStyle>
    </>
  );
  
}