import * as S from "../style";
import WhiteBtn from "../../../common/Button/WhiteBtn";

export default function Nickname() {
  return (
    <S.Form>
        <S.Layout>
            <h4>개인정보 변경</h4>
            <S.InputLayout>
                <p>닉네임</p>
                <div>
                    <input type="text" placeholder="내용을 입력하세요" />
                    <button type="submit">중복확인</button>
                </div>
            </S.InputLayout>
        </S.Layout>

        <WhiteBtn type="submit" align="center">개인정보 수정</WhiteBtn>
    </S.Form>
  )
}
