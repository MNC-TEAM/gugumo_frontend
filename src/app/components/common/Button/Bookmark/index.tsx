import React, { useState } from 'react'
import { BookmarkStyle } from './style'
import BookMarkSvg from "@asset/icon/bookmark.svg";
import axios from 'axios';
import { useAppSelector } from '@/store/hook';

export default function Bookmark({postid,status} : {postid : number, status : boolean}) {

  const user = useAppSelector(state=>state.user);

  const [bStatus,setBStatus] = useState(status);
  
  const bookMarkHandler :React.MouseEventHandler<HTMLButtonElement> = (e)=>{
    e.stopPropagation();

    if(!user){
      return alert('로그인을 하셔야합니다.');
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
          setBStatus(true);
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
          setBStatus(false);
        }
      })
      .catch(err=>{
        console.log('서버 에러');
      });

    }

  }

  return (
    <BookmarkStyle onClick={bookMarkHandler}>
      <BookMarkSvg fill={bStatus ? "#4FAAFF" : "#fff"}/>
    </BookmarkStyle>
  )
  
}
