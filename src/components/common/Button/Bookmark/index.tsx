"use client"
import React, { useEffect, useState } from 'react'
import { BookmarkStyle } from './style'
import BookMarkSvg from "@asset/icon/bookmark.svg";
import axios from 'axios';
import { BookmarkType } from '@components/common/Button/Bookmark/Bookmark.stories';
import { useSession } from 'next-auth/react';

export default function Bookmark(
  {postid,status,bookmarkCount,setBookmarkCount} : 
  BookmarkType
) {

  const {status : session} = useSession();

  const [bookmarkStatus,setBookmarkStatus] = useState(status);

  useEffect(()=>{
    setBookmarkStatus(status);
  },[status]);

  const bookMarkHandler :React.MouseEventHandler<HTMLButtonElement> = (e)=>{
    e.stopPropagation();
    
    if(session !== "authenticated"){
      return alert('로그인을 해야합니다.');
    }

    if(!bookmarkStatus){

      axios.post('/api/meeting/bookmark',{postId : postid})
      .then((res)=>{
        const {status} = res.data;
        if(status === "success"){
          setBookmarkStatus(true);
          if(setBookmarkCount && bookmarkCount !== undefined){
            setBookmarkCount(bookmarkCount+1);
          }
        }
      });

    }else{

      axios.delete(`/api/meeting/bookmark/${postid}`)
      .then((res)=>{
        const {status} = res.data;
        if(status === "success"){
          setBookmarkStatus(false);
          if(setBookmarkCount && bookmarkCount !== undefined){
            setBookmarkCount(bookmarkCount-1);
          }
        }
      });

    }

  }

  return (
    <BookmarkStyle 
      onClick={bookMarkHandler}
    >
      <BookMarkSvg 
        stroke="#4FAAFF"
        fill={bookmarkStatus ? "#4FAAFF" : "none"}
      />
    </BookmarkStyle>
  )
  
}