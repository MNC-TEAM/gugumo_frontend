import React, { useState } from 'react'
import { BookmarkStyle } from './style'
import BookMarkSvg from "@asset/icon/bookmark.svg";

export default function Bookmark({status} : {status : boolean}) {

  const [click,setClick] = useState(status);

  const clickHandler :React.MouseEventHandler<HTMLButtonElement> = (e)=>{
    e.stopPropagation();
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
