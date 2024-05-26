import Input from "@/app/components/common/Input/Basic/Input/Input";
import * as S from "./Sign.style";
import BallTag from "@/app/components/common/Button/BallTag/BallTag";
import { GAMETYPE } from "@/app/constant/meeting";
import White from "@/app/components/common/Button/White/White";

export default function page() {
  return (
    <S.Wrap>
        
        <S.Box>
            <S.Title>회원가입</S.Title>

            <S.Layout>
                <p>정보 입력</p>
                <S.LayoutBox>
                    <Input>
                        <input type="text" placeholder="닉네임"/>
                    </Input>
                    <Input>
                        <input type="text" placeholder="이메일을 입력하세요."/>
                    </Input>
                    <Input>
                        <input type="text" placeholder="비밀번호"/>
                    </Input>
                    <Input>
                        <input type="text" placeholder="비밀번호 확인"/>
                    </Input>
                </S.LayoutBox>
            </S.Layout>

            <S.Layout>
                <p>관심있는 종목 (중복가능)</p>
                <S.GameBox>
                    {
                        GAMETYPE.map((e,index)=>
                            <BallTag
                                // onClick={()=>{}}
                                key={index} 
                                gametype={e.get}
                                active={false}
                            />
                        )
                    }
                </S.GameBox>
            </S.Layout>

            <S.Layout>
                <p>서비스 정책</p>
                <S.Service>
                    <S.All>
                        <S.Argee>
                            <S.ArgeeCheck>
                                <div></div>
                                <p>전체동의</p>
                            </S.ArgeeCheck>
                        </S.Argee>
                    </S.All>
                    <S.ArgeeList>
                        <S.Argee as={"li"}>
                            <S.ArgeeCheck>
                                <div></div>
                                <p>서비스 이용약관 동의 (필수)</p>
                            </S.ArgeeCheck>
                            <S.ArgeeLink>내용보기</S.ArgeeLink>
                        </S.Argee>
                        <S.Argee as={"li"}>
                            <S.ArgeeCheck>
                                <div></div>
                                <p>개인정보 수집 및 이용 동의 (필수)</p>
                            </S.ArgeeCheck>
                            <S.ArgeeLink>내용보기</S.ArgeeLink>
                        </S.Argee>
                        <S.Argee as={"li"}>
                            <S.ArgeeCheck>
                                <div></div>
                                <p>마케팅 수신 동의 (선택)</p>
                            </S.ArgeeCheck>
                            <S.ArgeeLink>내용보기</S.ArgeeLink>
                        </S.Argee>
                    </S.ArgeeList>
                </S.Service>
            </S.Layout>

            <S.ButtonList>
                <White>회원가입</White>
            </S.ButtonList>

        </S.Box>

    </S.Wrap>
  )
}