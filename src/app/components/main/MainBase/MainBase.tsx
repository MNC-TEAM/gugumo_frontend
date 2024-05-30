'use client'
import { useEffect, useState } from "react";
import * as S from "../style";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@/store/hook";
import Write from "@/app/components/common/Button/Write/Write";
import { Swiper, SwiperSlide } from "swiper/react";
import Recommend from "@/app/components/common/Card/Recommend/Recommend";
import { IoChevronBack, IoChevronDown, IoChevronForward } from "react-icons/io5";
import { Autoplay } from "swiper/modules";
import { meetingType, pageableType } from "@/app/types/meeting";
import { GAMETYPE, LOCATION, MEETINGSTATUS } from "@/app/constant/meeting";
import Location from "@/app/components/common/Button/Location";
import BallTag from "@/app/components/common/Button/BallTag/BallTag";
import { SORT } from "@/app/constant/sort";
import Card from "@/app/components/common/Card/Main/Card";
import Paging from "@/app/components/main/Paging";

const getPost = async({meetingstatus,location,gametype,q,page,sort} : any)=>{

    const parmas = {
        page,
        meetingstatus,
        q,
        location,
        gametype,
        sort
    }

    const queryString = new URLSearchParams(parmas).toString();
    const res = await fetch(`/api/post/get?${queryString}`);
    const {message,status,data} = await res.json();
    return {message,status,data};

}

export default function MainBase() {
  
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

    async function fetchPost() {
        
        const {message,status,data} = await getPost({meetingstatus,location,gametype,q,user,page,sort});

        if(status === "success"){

            setContent(data.content);
            setPageable(data.pageable);

        }else{
            alert(message);
        }

    }

    fetchPost();
    
  },[meetingstatus,location,gametype,q,user,page,sort]);

  return (
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
  );
  
}