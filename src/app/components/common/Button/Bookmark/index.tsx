import React, { useState } from 'react'
import { BookmarkStyle } from './style'
import BookMarkSvg from "@asset/icon/bookmark.svg";

export default function Bookmark({status} : {status : boolean}) {

  return (
    <BookmarkStyle>
      <BookMarkSvg fill={status ? "#4FAAFF" : "#fff"}/>
    </BookmarkStyle>
  )
  
}
