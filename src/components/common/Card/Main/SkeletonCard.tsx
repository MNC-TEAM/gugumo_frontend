import React from 'react'
import * as S from './Card.style';
import * as C from "../Card.style";

export default function SkeletonCard() {
  return (
    <S.CardStyle $skeleton={true}>
      <S.Flex>
        {
            new Array(3).fill(0).map((_,i)=><S.Tag key={i}/>)
        }
      </S.Flex>
      <C.Title $skeleton={true}/>
      <C.Detail $skeleton={true}>
        {
            new Array(3).fill(0).map((_,i)=>(
                <li key={i}>
                    <p></p>
                </li>
            ))
        }
      </C.Detail>
      <C.Date $skeleton={true}>
        <span></span>
        <C.BookMarkSkeleton/>
      </C.Date>
    </S.CardStyle>
  )
}