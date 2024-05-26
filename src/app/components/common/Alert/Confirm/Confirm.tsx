import * as S from "./Confirm.style";
import {ConfirmType} from "./Confirm.stories";

export default function Confirm({confirmMessage} : ConfirmType) {
  return (
    <S.Modal>
        <S.Div>
            <img src="/asset/image/alert/primary.png" alt="확인 아이콘" />
            <h4>{confirmMessage}</h4>
        </S.Div>
        <S.ButtonDiv>
          <S.Button $close={true}>아니요</S.Button>
          <S.Button>네, 할래요</S.Button>
        </S.ButtonDiv>
    </S.Modal>
  )
}