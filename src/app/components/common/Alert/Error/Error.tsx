import * as S from "./Error.style";
import {ErrorType} from "./Error.stories";

export default function Error({errorMessage} : ErrorType) {
  return (
    <S.Modal>
        <S.Div>
            <img src="/asset/image/alert/error.png" alt="에러 아이콘" />
            <h4>{errorMessage}</h4>
        </S.Div>
        <S.Button>확인</S.Button>
    </S.Modal>
  )
}