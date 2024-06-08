"use client"
import * as S from "./Recommends.style";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Recommend from "@components/common/Card/Recommend/Recommend";
import { useRecommend } from "@hooks/useRecommend";
import { useSession } from "next-auth/react";
import { useCallback, useRef } from "react";

export default function Recommends() {

    const swiperRef = useRef<SwiperRef>(null);
    const {status} = useSession();
    const {recommend} = useRecommend(status);

    const prevHandler = useCallback(()=>{
        swiperRef.current?.swiper.slidePrev();
    },[]);

    const nextHandler = useCallback(()=>{
        swiperRef.current?.swiper.slideNext();
    },[]);

    return (
        <S.RecommendLayout>
            <h3>추천 게시물 🎯</h3>
            <div className="flex">
                <S.Button onClick={prevHandler}><img src="/asset/icon/slide-arrow.png" alt="왼쪽 버튼" /></S.Button>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1.2}
                    breakpoints={{
                        "481" : {
                            slidesPerView : 1.5,
                        },
                        "820" : {
                            slidesPerView : 2.5,
                        },
                        "1025" : {
                            slidesPerView : 3,
                        }
                    }}
                    centeredSlides={false}
                    spaceBetween={26}
                    loop={true}
                    speed={600}
                    slidesPerGroup={1}
                >
                    {
                        recommend.map((el)=>(
                            <SwiperSlide key={el.postId}>
                                <Recommend
                                    bookmarkStatus={el.bookmarked}
                                    postId={el.postId}
                                    status={el.meetingStatus}
                                    gameType={el.gameType}
                                    location={el.location}
                                    title={el.title}
                                    meetingDateTime={el.meetingDateTime}
                                    meetingMemberNum={el.meetingMemberNum}
                                    meetingDeadline={el.meetingDeadline}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <S.Button $type={"next"} onClick={nextHandler}><img src="/asset/icon/slide-arrow.png" alt="오른쪽 버튼" /></S.Button>
            </div>
        </S.RecommendLayout>
    )
}
