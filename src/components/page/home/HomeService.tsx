import Link from "next/link";
import * as S from "./home.style";

export default function HomeService() {
  return (
    <S.HomeService>
        <S.Wrap>
            <S.HomeServiceDot><div></div><div></div><div></div></S.HomeServiceDot>
            <S.HomeServiceTitle><img src="/asset/image/home/gugumo.png" alt="구구모" /> 는 이런 서비스에요!</S.HomeServiceTitle>

            <S.HomeServiceCardBase>
                <S.HomeServiceCard>
                    <S.HomeServiceCardNum>
                        <span>1</span>
                    </S.HomeServiceCardNum>
                    <p>
                        <span>웹</span> 🖥 으로 운영되며, <br/>
                        구기 스포츠 메이트 <span>매칭 중계</span>를 <br/>
                        제공해요.
                    </p>
                </S.HomeServiceCard>
                <S.HomeServiceCard>
                    <S.HomeServiceCardNum>
                        <span>2</span>
                    </S.HomeServiceCardNum>
                    <p>
                        <span>구기종목</span>만 모아뒀어요⚽️🏀🥎<br/>
                        러닝, 헬스 등은 포함하지 않아요!
                    </p>
                </S.HomeServiceCard>
                <S.HomeServiceCard>
                    <S.HomeServiceCardNum>
                        <span>3</span>
                    </S.HomeServiceCardNum>
                    <p>
                        <span>지역, 종목</span>에 따라 자유롭게 <br/>
                        메이트🏃‍♂️를 찾을 수 있어요.
                    </p>
                </S.HomeServiceCard>
                <S.HomeServiceCard>
                    <S.HomeServiceCardNum>
                        <span>4</span>
                    </S.HomeServiceCardNum>
                    <p>
                        최종적으로는 구구모 웹에 얽매이지 않고 유저에게 익숙한 <br/>
                        <span>카카오톡 오픈채팅</span>💬에서 장기적인 모임을 이어갈 수 있어요.
                    </p>
                </S.HomeServiceCard>
            </S.HomeServiceCardBase>

            <S.LinkBase>
                <dl>
                    <dt>앞으로, 구기 스포츠 메이트 찾을 땐 </dt>
                    <dd><img src="/asset/image/home/gugumo.png" alt="구구모" /></dd>
                </dl>
                <Link href={'/'}>매칭하기</Link>
            </S.LinkBase>

        </S.Wrap>
    </S.HomeService>
  )
}
