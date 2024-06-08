"use client"
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import * as S from "./Recommends.style";
import { Swiper, SwiperSlide } from "swiper/react";
import Recommend from "@components/common/Card/Recommend/Recommend";
import { useRecommend } from "@hooks/useRecommend";
import { useSession } from "next-auth/react";

export default function Recommends() {

    const {status} = useSession();
    const {recommend} = useRecommend(status);

    return (
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
                <button><IoChevronForward /></button>
            </div>
        </S.RecommendLayout>
    )
}
