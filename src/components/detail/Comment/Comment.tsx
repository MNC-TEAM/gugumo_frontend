"use client"

import Primary from "@components/common/Button/Primary/Primary";
import * as S from "./Comment.style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useCommentList } from "@hooks/useComment";
import { useCallback, useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import { useSession } from "next-auth/react";
moment.locale("ko");

export default function Comment({postId} : {postId : string}) {

    const {status} = useSession();
    const {register,handleSubmit,setValue} = useForm();
    const {commentLength,parentComment,replyComment,mutate} = useCommentList(postId);
    const [replyShow,setReplyShow] = useState(0);

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

    },[postId,status]);

    const deleteCommentHandler = useCallback((commentId : number)=>{

        if(status !== "authenticated") {
            return alert('로그인을 해야합니다.');
        }

        if(confirm('정말 삭제하시겠습니까?')){

            axios.delete(`/api/meeting/comment/reply/${commentId}`)
            .then(({data})=>{
                const {status,message} = data;
                if(status === "fail"){
                    return alert(message);
                }else{
                    alert('삭제가 완료 되었습니다.');
                    mutate();
                }
            });

        }

    },[status])

    const onReplyCommentHandler = (event : any)=>{

        const {reply,parentId} = event;

        const body = {
            postId,
            content : reply,
            parentCommentId : parentId
        };

        axios.post('/api/meeting/comment/new',body)
        .then(({data})=>{
            const {status,message} = data;
            if(status === "fail"){
                return alert(message);
            }else{
                alert('등록이 완료 되었습니다.');
                setValue('reply',"");
                setReplyShow(0);
                mutate();
            }
        });

    };

    const onReplyShowHandler = (commendId : number)=>{

        if(status !== "authenticated") {
            return alert('로그인을 해야합니다.');
        }

        if(replyShow === commendId){
            return setReplyShow(0);
        }

        if(replyShow >= 0){
            setReplyShow(commendId);            
        }else{
            setReplyShow(0);
        }

    }

    return (
        <>
            <S.CommentLength>
                댓글<span>{commentLength}</span>
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
                {
                    parentComment.map((el)=>(
                        <S.CommentList>
                            <S.CommentBase key={el.commentId}>
                                <S.UserIcon/>
                                <S.Comment>
                                    <S.Name>
                                        <dl>
                                            <dt>{el.author}</dt>
                                            <dd>{moment(el.createdDateTime).startOf('hour').fromNow()}</dd>
                                        </dl>
                                        <S.EditList>
                                            <button onClick={()=>onReplyShowHandler(el.commentId)}>답글</button>
                                            {
                                                el.yours && (
                                                    <>
                                                        <button>수정</button>
                                                        <button onClick={()=>deleteCommentHandler(el.commentId)}>삭제</button>
                                                    </>
                                                )
                                            }
                                        </S.EditList>
                                    </S.Name>
                                    {<p>{el.content}</p>}
                                </S.Comment>
                            </S.CommentBase>
                            {
                                replyShow === el.commentId &&
                                <S.ReplyBase>
                                    <S.CommentFormBase>
                                        <S.UserIcon/>
                                        <S.CommentForm>
                                            <form onSubmit={handleSubmit(onReplyCommentHandler)}>
                                                <input type="hidden" {...register('parentId',{value : el.commentId} )} />
                                                <textarea 
                                                    placeholder="댓글을 입력해주세요"
                                                    {...register('reply',{maxLength: 1000, minLength : 1})} 
                                                />
                                                <Primary type="submit">대댓글 등록하기</Primary>
                                            </form>
                                        </S.CommentForm>
                                    </S.CommentFormBase>
                                </S.ReplyBase>
                            }

                            {
                                <S.ReplyBase>
                                    {
                                        replyComment.map((reply)=>{
                                            
                                            if(reply.parentCommentId === el.commentId){
                                                return (
                                                    <S.CommentBase key={reply.commentId}>
                                                        <S.UserIcon/>
                                                        <S.Comment>
                                                            <S.Name>
                                                                <dl>
                                                                    <dt>{reply.author}</dt>
                                                                    <dd>{moment(reply.createdDateTime).startOf('hour').fromNow()}</dd>
                                                                </dl>
                                                                <S.EditList>
                                                                    {
                                                                        reply.yours && (
                                                                            <>
                                                                                <button>수정</button>
                                                                                <button onClick={()=>deleteCommentHandler(reply.commentId)}>삭제</button>
                                                                            </>
                                                                        )
                                                                    }
                                                                </S.EditList>
                                                            </S.Name>
                                                            <p>{reply.content}</p>
                                                        </S.Comment>
                                                    </S.CommentBase>
                                                )
                                            }

                                        })
                                    }
                                </S.ReplyBase>
                            }
                        </S.CommentList>
                    ))
                }
            </S.CommentListBase>
        </>
    )
}