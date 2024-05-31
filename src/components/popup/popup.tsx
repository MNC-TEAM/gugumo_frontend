"use client"
import { onClose } from "@/store/features/modal/modal";
import * as S from "./popup.style";
import { useAppDispatch, useAppSelector } from "@/store/hook";

export default function Popup() {

    const {popup} = useAppSelector((state)=>state.modal);
    const dispatch = useAppDispatch();

    return (
        <S.StyledModal isOpen={popup}>
            <S.CloseStyle onClick={()=>dispatch(onClose())}>
                <img src="/asset/icon/close.svg" alt="취소버튼" />
            </S.CloseStyle>
            <div>
                <S.Desktop src="/asset/image/popup.png" alt="팝업이미지" />
                <S.Mobile src="/asset/image/mob_popup.png" alt="팝업이미지" />
            </div>
        </S.StyledModal>
    )

}