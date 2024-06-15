import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import * as S from "./Banner.style";

export default function Banner() {
  return (
    <Swiper
        slidesPerView={1.2}
        modules={[Autoplay]}
        breakpoints={{
            "820" : {
                slidesPerView : 1.2,
                spaceBetween : 23
            },
            "1024" : {
                slidesPerView : 1.2,
                spaceBetween : 23
            },
            "1280" : {
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
            <S.DesktopIMG src="/asset/image/banner/banner.jpg" alt="배너1 데스크탑" width={2496} height={785} />
            <S.MobileIMG src="/asset/image/banner/banner_mob.jpg" alt="배너1 모바일" width={1879} height={851} />
        </S.BannerImg>
        </SwiperSlide>
        <SwiperSlide>
        <S.BannerImg>
            <S.DesktopIMG src="/asset/image/banner/banner.jpg" alt="배너2 데스크탑" width={2496} height={785} />
            <S.MobileIMG src="/asset/image/banner/banner_mob.jpg" alt="배너2 모바일" width={1879} height={851} />
        </S.BannerImg>
        </SwiperSlide>
        <SwiperSlide>
        <S.BannerImg>
            <S.DesktopIMG src="/asset/image/banner/banner.jpg" alt="배너3 데스크탑" width={2496} height={785} />
            <S.MobileIMG src="/asset/image/banner/banner_mob.jpg" alt="배너3 모바일" width={1879} height={851} />
        </S.BannerImg>
        </SwiperSlide>
        <SwiperSlide>
        <S.BannerImg>
            <S.DesktopIMG src="/asset/image/banner/banner.jpg" alt="배너4 데스크탑" width={2496} height={785} />
            <S.MobileIMG src="/asset/image/banner/banner_mob.jpg" alt="배너4 모바일" width={1879} height={851} />
        </S.BannerImg>
        </SwiperSlide>
    </Swiper>
  )
}
