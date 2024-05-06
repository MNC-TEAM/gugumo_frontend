import React from 'react'
import { WhiteButton, WriteStyle } from './style'
import { WhiteBtnType } from './WhiteBtn.stories'

export default function WhiteBtn({edit,children,href,align,type} : WhiteBtnType) {

  if(href){
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

  if(type){
    return (
      <WhiteButton
        type={type}
        $align={align}
      >
        { 
          edit && <img src="/asset/icon/write.svg" alt="글쓰기" />
        }
        {children}
      </WhiteButton>
    )
  }
  
}