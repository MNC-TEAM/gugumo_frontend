import * as S from "@/app/(auth)/mypage/style";
import WhiteBtn from "../common/Button/WhiteBtn";

export default function Nickname() {
  return (
    <form>
        <S.Layout>
            <h4>개인정보 변경</h4>
            <S.InputLayout>
                <p>닉네임변경</p>
                <div>
                    <input type="text" placeholder="내용을 입력하세요" />
                    <button>중복확인</button>
                </div>
            </S.InputLayout>
        </S.Layout>

        <div style={{marginTop : 24}}>
            <WhiteBtn type="submit" align="center">개인정보 수정</WhiteBtn>
        </div>
    </form>
  )
}
