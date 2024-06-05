"use client"
import * as S from "./popup.style";

export default function Popup() {

    return (
        <S.StyledModal>
            <S.CloseStyle>
                <img src="/asset/icon/close.svg" alt="취소버튼" />
            </S.CloseStyle>
            <div>
                <S.Desktop src="/asset/image/popup.png" alt="팝업이미지" />
                <S.Mobile src="/asset/image/mob_popup.png" alt="팝업이미지" />
            </div>
        </S.StyledModal>
    )

}