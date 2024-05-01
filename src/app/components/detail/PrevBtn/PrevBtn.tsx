"use client"
import React from 'react'
import * as S from "./PrevBtn.style";
import { useRouter } from 'next/navigation';

function PrevBtn() {
    const router = useRouter();

    return (
        <S.BackRouter onClick={()=>router.back()}>
            <img src="/asset/icon/prev.svg" alt="뒤로가기" />
        </S.BackRouter>
    )

}

export default PrevBtn