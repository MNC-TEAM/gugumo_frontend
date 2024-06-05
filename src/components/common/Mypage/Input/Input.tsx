"use client"
import React from 'react'
import * as S from "./Input.style";

export default function Input({children,error}:{children : React.ReactNode,error? : string}) {
  return (
    <>
      <S.Box>
        {children}
      </S.Box>
      <S.Error>{error}</S.Error>
    </>
  )
}