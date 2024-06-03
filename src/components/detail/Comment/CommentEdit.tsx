import * as S from "./Comment.style";
import Primary from '@components/common/Button/Primary/Primary';
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

interface CommentFormType {
    status : "authenticated" | "loading" | "unauthenticated";
    setEditShow : any;
    mutate : any;
    commentId : number;
}

export default function CommentEdit({commentId,status,setEditShow,mutate} : CommentFormType) {

    const {register,handleSubmit,setValue} = useForm();

    const onEditCommentHandler = (event : any)=>{

        if(status !== "authenticated") {
            return alert('로그인을 해야합니다.');
        }

        const {content} = event;

        axios.patch(`/api/meeting/comment/reply/${commentId}`,{
            content : content
        })
        .then(({data})=>{
            const {status,message} = data;
            if(status === "fail"){
                return alert(message);
            }else{
                alert('수정이 완료 되었습니다.');
                setValue('content',"");
                setEditShow(0);
                mutate();
            }
        });

    }

  return (
    <S.CommentForm>
        <form onSubmit={handleSubmit(onEditCommentHandler)}>
            <textarea 
                placeholder="댓글을 수정해주세요"
                {...register('content',{ maxLength: 1000, minLength : 1})} 
            />
            <Primary type="submit">댓글 수정하기</Primary>
        </form>
    </S.CommentForm>
  )
}
