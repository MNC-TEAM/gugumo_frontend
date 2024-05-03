import * as S from "@/app/(auth)/mypage/style";
import WhiteBtn from "../common/Button/WhiteBtn";

export default function Password() {
  return (
    <form>
        <S.Layout>
            <h4>비밀번호 설정</h4>
            <S.InputFlex>
                <S.InputLayout>
                    <p>새 비밀번호</p>
                    <div>
                        <input type="text" placeholder="내용을 입력하세요" />
                    </div>
                </S.InputLayout>
                <S.InputLayout>
                    <p>새 비밀번호 확인</p>
                    <div>
                        <input type="text" placeholder="내용을 입력하세요" />
                    </div>
                </S.InputLayout>
            </S.InputFlex>
        </S.Layout>

        <div style={{marginTop : 24}}>
            <WhiteBtn type="submit" align="center">비밀번호 수정</WhiteBtn>
        </div>
    </form>
  )
}
