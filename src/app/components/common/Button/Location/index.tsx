import React from 'react'
import * as S from './style'
import { LocationTypes } from './Location.stories'

export default function Location({label,onClick,active}: LocationTypes) {
  return (
    <S.ButtonStyle 
      onClick={onClick} 
      $active={active}
    >{label}</S.ButtonStyle>
  )
}
