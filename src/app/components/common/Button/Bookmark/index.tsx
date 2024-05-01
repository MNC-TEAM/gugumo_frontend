import React from 'react'
import { BookmarkStyle } from './style'
import BookMarkSvg from "@asset/icon/bookmark.svg";
import axios from 'axios';

export default function Bookmark({postid,status} : {postid : string, status : boolean}) {

  const bookMarkHandler :React.MouseEventHandler<HTMLButtonElement> = (e)=>{
    e.stopPropagation();
    axios.post('localhost:8000',{postid})
    .then((res)=>{
      console.log(res);
    })
    .catch(err=>{
      alert(err);
    });
  }

  return (
    <BookmarkStyle onClick={bookMarkHandler}>
      <BookMarkSvg fill={status ? "#4FAAFF" : "#fff"}/>
    </BookmarkStyle>
  )
  
}
