import axios from "axios";
import * as S from "./Comment.style";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import Primary from "@components/common/Button/Primary/Primary";

interface CommentFormType {
    status : "authenticated" | "loading" | "unauthenticated";
    postId : string;
    mutate : any;
}

export default function CommentForm({status,postId,mutate} : CommentFormType) {

    const {register,handleSubmit,setValue} = useForm();

    const onCommentHanlder = useCallback((event : any)=>{

        if(status !== "authenticated") {
            return alert('로그인을 해야합니다.');
        }

        const {content} = event;

        if(content === ""){
            return alert('댓글을 입력해주세요.');
        }

        const body = {
            postId,
            content,
        }

        axios.post('/api/meeting/comment/new',body)
        .then(({data})=>{
            const {status,message} = data;
            if(status === "fail"){
                return alert(message);
            }else{
                alert('등록이 완료 되었습니다.');
                setValue('content',"");
                mutate();
            }
        });

    },[postId,status,mutate,setValue]);

  return (
    <S.CommentFormBase>
        <S.UserIcon/>
        <S.CommentForm>
            <form onSubmit={handleSubmit(onCommentHanlder)}>
                <textarea 
                    placeholder="댓글을 입력해주세요"
                    {...register('content',{maxLength: 1000, minLength : 1})} 
                />
                <Primary type="submit">댓글 등록하기</Primary>
            </form>
        </S.CommentForm>
    </S.CommentFormBase>
  )
}
