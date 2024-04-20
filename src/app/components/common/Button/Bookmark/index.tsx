import React, { useState } from 'react'
import { BookmarkStyle } from './style'

import BookMarkSvg from "../../../../../../public/asset/icon/bookmark.svg";

export default function Bookmark() {

  const [click,setClick] = useState(false);

  const clickHandler = ()=>{
    setClick(!click);
  }

  return (
    <BookmarkStyle 
      onClick={clickHandler}
    >
      <BookMarkSvg fill={click ? "#4FAAFF" : "#fff"}/>
    </BookmarkStyle>
  )
  
}
