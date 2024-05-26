"use client"
import React from 'react'
import * as S from "./Input.style";

export default function Input({children}:{children : React.ReactNode}) {
  return (
    <S.Box>{children}</S.Box>
  )
}