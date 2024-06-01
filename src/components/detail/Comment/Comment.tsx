"use client"

import Primary from "@components/common/Button/Primary/Primary";
import * as S from "./Comment.style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useCommentList } from "@hooks/useComment";
import { useCallback } from "react";

export default function Comment({postId} : {postId : string}) {

    const {register,handleSubmit} = useForm();

    const onCommentHanlder = useCallback((event : any)=>{

        const {content} = event;

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
            }
        });

    },[postId]);

    const {data : comment} = useCommentList(postId);

    return (
        <>
            <S.CommentLength>
                댓글<span>{comment && comment.data.length >= 0 ? comment.data.length : 0}</span>
            </S.CommentLength>

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

            <S.CommentListBase>
                <S.CommentList>
                    {
                        comment && comment.data.map((el)=>(
                            <li>
                                <S.UserIcon/>
                                <S.Comment>
                                    <S.Name>
                                        <dl>
                                            <dt>{el.author}</dt>
                                            <dd>{el.createdDateTime}</dd>
                                        </dl>
                                        <S.EditList>
                                            <button>답글</button>
                                            {
                                                true && (
                                                    <>
                                                        <button>수정</button>
                                                        <button>삭제</button>
                                                    </>
                                                )
                                            }
                                        </S.EditList>
                                    </S.Name>
                                    <p>{el.content}</p>
                                </S.Comment>
                            </li>
                        ))
                    }
                </S.CommentList>
            </S.CommentListBase>
        </>
    )
}
