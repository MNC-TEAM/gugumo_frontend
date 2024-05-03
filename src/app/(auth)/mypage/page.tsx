"use client"

import { Wrap } from "@/app/components/main/style";
import { MypageStyle, User, UserFlex, UserName, Layout, InputLayout, InputFlex, Button, UserDelete } from "@/app/components/mypage/style";

export default function Mypage() {
  return (
    <MypageStyle>
        <Wrap>
            <h1>마이페이지</h1>

            <UserFlex>
                <User>
                    <div></div>
                    <button>편집하기</button>
                </User>
                <UserName>
                    닉네임
                    <p>abc1234@naver.com</p>
                </UserName>
            </UserFlex>

            <Layout>
                <h4>개인정보 변경</h4>
                <InputLayout>
                    <p>닉네임변경</p>
                    <div>
                        <input type="text" placeholder="내용을 입력하세요" />
                        <button>중복확인</button>
                    </div>
                </InputLayout>
            </Layout>

            <Layout>
                <h4>비밀번호 설정</h4>
                <InputFlex>
                    <InputLayout>
                        <p>새 비밀번호</p>
                        <div>
                            <input type="text" placeholder="내용을 입력하세요" />
                        </div>
                    </InputLayout>
                    <InputLayout>
                        <p>새 비밀번호 확인</p>
                        <div>
                            <input type="text" placeholder="내용을 입력하세요" />
                        </div>
                    </InputLayout>
                </InputFlex>
            </Layout>

            <Button type="submit">프로필 수정</Button>

            <UserDelete>
                <button>회원탈퇴하기</button>
            </UserDelete>

        </Wrap>
    </MypageStyle>
  )
}
