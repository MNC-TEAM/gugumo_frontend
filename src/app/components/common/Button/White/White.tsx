"use client"
import React from 'react'
import * as S from './White.style'
import { WhiteType } from './White.stories'

export default function White({type,children,onClick} : WhiteType) {

  return (
    <S.Button type={type} onClick={onClick}>
      {children}
    </S.Button>
  )
  
}