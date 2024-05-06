import * as S from "../style";
import WhiteBtn from "../../../common/Button/WhiteBtn";

export default function Password() {
  return (
    <S.Form>
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
        <WhiteBtn type="submit" align="center">비밀번호 수정</WhiteBtn>
    </S.Form>
  )
}
