import * as S from "./home.style";

export default function HomeKeyword() {
  return (
    <S.HomeKeyword>
        <S.Wrap>
            <S.HomeKeywordMegaphoneBase>
                <S.HomeKeywordMegaphoneText>
                    평소 집 주변에서 공놀이 할 친구를 구하기 <span>어려우시던 분?</span>
                </S.HomeKeywordMegaphoneText>
                <S.HomeKeywordMegaphone>
                    <img src="/asset/image/home/megaphone01.png" alt="확성기1" />
                </S.HomeKeywordMegaphone>
            </S.HomeKeywordMegaphoneBase>
            <S.HomeKeywordMegaphoneBase $right>
                <S.HomeKeywordMegaphoneText>
                    <span>동호회, 동아리 외에서 가볍게 만나</span> 함께 구기종목 운동할 사람을 찾으시던 분?
                </S.HomeKeywordMegaphoneText>
                <S.HomeKeywordMegaphone $right>
                    <img src="/asset/image/home/megaphone02.png" alt="확성기2" />
                </S.HomeKeywordMegaphone>
            </S.HomeKeywordMegaphoneBase>
        </S.Wrap>
        <S.HomeKeywordImage $type="one">
            <img src="/asset/image/home/keyword01.png" alt="" />
        </S.HomeKeywordImage>
        <S.HomeKeywordImage $type="two">
            <img src="/asset/image/home/keyword02.png" alt="" />
        </S.HomeKeywordImage>
        <S.HomeKeywordImage $type="three">
            <img src="/asset/image/home/keyword03.png" alt="" />
        </S.HomeKeywordImage>
    </S.HomeKeyword>
  )
}
