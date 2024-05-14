import React from 'react'
import { WriteStyle } from './style'
import { WhiteBtnType } from './WhiteBtn.stories'

export default function WhiteBtn({edit,children,href,align} : WhiteBtnType) {

  return (
    <WriteStyle
      $align={align} href={href ? href : "/"}
    >
      { 
        edit && <img src="/asset/icon/write.svg" alt="글쓰기" />
      }
      {children}
    </WriteStyle>
  )
  
}