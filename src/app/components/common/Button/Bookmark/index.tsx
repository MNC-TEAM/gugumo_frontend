import React, { useState } from 'react'
import { BookmarkStyle } from './style'
import BookMarkSvg from "@asset/icon/bookmark.svg";
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { onLogin } from '@/store/features/modal/modal';

export default function Bookmark({postid,status} : {postid : number, status : boolean}) {

  const user = useAppSelector(state=>state.user);
  const dispatch = useAppDispatch();

  const [bookmarkStatus,setBookmarkStatus] = useState(status);
  
  const bookMarkHandler :React.MouseEventHandler<HTMLButtonElement> = (e)=>{
    e.stopPropagation();

    if(!user){
      alert('로그인을 하셔야합니다.');
      return dispatch(onLogin());
    }

    if(!status){

      axios.post('/api/post/bookmark',{
        postId : postid
      },{
        headers : {
          Authorization : user
        }
      })
      .then((res)=>{
        const {status} = res.data;
        if(status === "success"){
          setBookmarkStatus(true);
        }
      })
      .catch(err=>{
        console.log('서버 에러');
      });

    }else{

      axios.delete('/api/post/bookmark',{
        params : {
          post_id : postid
        },
        headers : {
          Authorization : user
        }
      })
      .then((res)=>{
        const {status} = res.data;
        if(status === "success"){
          setBookmarkStatus(false);
        }
      })
      .catch(err=>{
        console.log('서버 에러');
      });

    }

  }

  return (
    <BookmarkStyle onClick={bookMarkHandler}>
      <BookMarkSvg fill={bookmarkStatus ? "#4FAAFF" : "#fff"}/>
    </BookmarkStyle>
  )
  
}
