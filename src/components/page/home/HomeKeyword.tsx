import { useGSAP } from "@gsap/react";
import * as S from "./home.style";
import { useRef } from "react";
import gsap from "gsap/all";

export default function HomeKeyword() {

    const keywordRef = useRef(null);

    useGSAP(()=>{

        gsap.fromTo('.base01',{
            y : 75,
            opacity : 0,
        },{
            y : 0,
            opacity : 1,
            scrollTrigger : {
                trigger : ".base01",
                start : "top bottom-=15%",
                // markers : true,
            }
        });
        gsap.fromTo('.base02',{
            y : 75,
            opacity : 0,
        },{
            y : 0,
            opacity : 1,
            scrollTrigger : {
                trigger : ".base02",
                start : "top bottom-=15%",
                // markers : true,
            }
        });

        gsap.to('.megaphone01 img',{
            rotate : 15,
            repeat : -1,
            duration : 0.8,
            ease : "power1.inOut",
            yoyo : true,
        });

        gsap.to('.megaphone02 img',{
            rotate : 15,
            repeat : -1,
            duration : 0.8,
            ease : "power1.inOut",
            yoyo : true,
        });

        gsap.to(".one",{
            y : -50,
            repeat : -1,
            duration : 0.6,
            repeatDelay : 0.4,
            yoyo : true,
        })
        gsap.to(".two",{
            y : -75,
            repeat : -1,
            duration : 0.6,
            repeatDelay : 0.2,
            yoyo : true,
        })
        gsap.to(".three",{
            y : -30,
            repeat : -1,
            duration : 0.6,
            repeatDelay : 0.3,
            yoyo : true,
        })

    },{scope : keywordRef});

  return (
    <S.HomeKeyword ref={keywordRef}>
        <S.Wrap>
            <S.HomeKeywordMegaphoneBase className="base01">
                <S.HomeKeywordMegaphoneText>
                    평소 집 주변에서 공놀이 할 친구를 구하기 <span>어려우시던 분?</span>
                </S.HomeKeywordMegaphoneText>
                <S.HomeKeywordMegaphone className="megaphone01">
                    <img src="/asset/image/home/megaphone01.png" alt="확성기1" />
                </S.HomeKeywordMegaphone>
            </S.HomeKeywordMegaphoneBase>
            <S.HomeKeywordMegaphoneBase $right className="base02">
                <S.HomeKeywordMegaphoneText>
                    <span>동호회, 동아리 외에서 가볍게 만나</span> 함께 구기종목 운동할 사람을 찾으시던 분?
                </S.HomeKeywordMegaphoneText>
                <S.HomeKeywordMegaphone $right className="megaphone02">
                    <img src="/asset/image/home/megaphone02.png" alt="확성기2" />
                </S.HomeKeywordMegaphone>
            </S.HomeKeywordMegaphoneBase>
        </S.Wrap>
        <S.HomeKeywordImage $type="one" className="one">
            <img src="/asset/image/home/keyword01.png" alt="" />
        </S.HomeKeywordImage>
        <S.HomeKeywordImage $type="two" className="two">
            <img src="/asset/image/home/keyword02.png" alt="" />
        </S.HomeKeywordImage>
        <S.HomeKeywordImage $type="three" className="three">
            <img src="/asset/image/home/keyword03.png" alt="" />
        </S.HomeKeywordImage>
    </S.HomeKeyword>
  )
}
