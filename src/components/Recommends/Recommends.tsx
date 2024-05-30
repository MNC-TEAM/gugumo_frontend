import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import * as S from "./Recommends.style";
import { Swiper, SwiperSlide } from "swiper/react";
import Recommend from "@components/common/Card/Recommend/Recommend";

export default function Recommends() {
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

  )
}
