"use client"
import React, { useState } from 'react'
import { BookmarkStyle } from './style'
import BookMarkSvg from "@asset/icon/bookmark.svg";
import axios from 'axios';
import { BookmarkType } from '@components/common/Button/Bookmark/Bookmark.stories';
import { useAppDispatch, useAppSelector } from '@store/hook';

export default function Bookmark(
  {postid,status,bookmarkCount,setBookmarkCount} : 
  BookmarkType
) {

  const user = useAppSelector(state=>state.user);
  const dispatch = useAppDispatch();

  const [bookmarkStatus,setBookmarkStatus] = useState(status);
  
  const bookMarkHandler :React.MouseEventHandler<HTMLButtonElement> = (e)=>{
    e.stopPropagation();

    if(!user){
      alert('로그인을 하셔야합니다.');
    }

    if(!bookmarkStatus){

      axios.post('/api/post/bookmark',{
        postId : postid
      })
      .then((res)=>{
        const {status} = res.data;
        if(status === "success"){
          setBookmarkStatus(true);
          if(setBookmarkCount && bookmarkCount !== undefined){
            setBookmarkCount(bookmarkCount+1);
          }
        }
      })
      .catch(err=>{
        console.log('서버 에러');
      });

    }else{

      axios.delete('/api/post/bookmark',{
        params : {
          post_id : postid
        }
      })
      .then((res)=>{
        const {status} = res.data;
        if(status === "success"){
          setBookmarkStatus(false);
          if(setBookmarkCount && bookmarkCount !== undefined){
            setBookmarkCount(bookmarkCount-1);
          }
        }
      })
      .catch(err=>{
        console.log('서버 에러');
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
