import React from 'react'
import * as S from './White.style'
import { WhiteType } from './White.stories'

export default function White({children,onClick} : WhiteType) {

  return (
    <S.Button onClick={onClick}>
      {children}
    </S.Button>
  )
  
}