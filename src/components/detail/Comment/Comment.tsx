"use client"

import * as S from "./Comment.style";
import axios from "axios";
import { useCommentList } from "@hooks/useComment";
import { useCallback, useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import { useSession } from "next-auth/react";
import ReplyComment from "@components/detail/Comment/ReplyComment";
import CommentForm from "@components/detail/Comment/CommentForm";
import CommentEdit from "@components/detail/Comment/CommentEdit";
moment.locale("ko");

export default function Comment({postId} : {postId : string}) {

    const {status} = useSession();
    const {commentLength,parentComment,replyComment,mutate} = useCommentList(postId);
    const [replyShow,setReplyShow] = useState(0);
    const [editShow,setEditShow] = useState(0);

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

    },[status,mutate]);

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

    };

    const onEditShowHandler = (commendId : number)=>{

        if(status !== "authenticated") {
            return alert('로그인을 해야합니다.');
        }

        if(editShow === commendId){
            return setEditShow(0);
        }

        if(editShow >= 0){
            setEditShow(commendId);            
        }else{
            setEditShow(0);
        }

    }

    return (
        <>
            <S.CommentLength>
                댓글<span>{commentLength}</span>
            </S.CommentLength>

            <CommentForm
                postId={postId}
                mutate={mutate}
                status={status}
            />

            <S.CommentListBase>
                {
                    parentComment.map((el)=>(
                        <S.CommentList key={el.commentId}>

                            <S.CommentBase>
                                <S.UserIcon style={{backgroundImage : 'url(/asset/image/user/user.png)'}}/>
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
                                                        <button onClick={()=>onEditShowHandler(el.commentId)}>수정</button>
                                                        <button onClick={()=>deleteCommentHandler(el.commentId)}>삭제</button>
                                                    </>
                                                )
                                            }
                                        </S.EditList>
                                    </S.Name>
                                    <S.CommentContent>
                                        {
                                            editShow !== el.commentId 
                                            ?
                                                <p>{el.content}</p> 
                                            :
                                                <CommentEdit
                                                    status={status}
                                                    setEditShow={setEditShow}
                                                    mutate={mutate}
                                                    commentId={el.commentId}
                                                />
                                        }
                                    </S.CommentContent>
                                </S.Comment>
                            </S.CommentBase>

                            {
                                replyShow === el.commentId && 
                                <ReplyComment 
                                    postId={postId} 
                                    status={status} 
                                    parentId={el.commentId}
                                    mutate={mutate}
                                    setReplyShow={setReplyShow}
                                />
                            }

                            {
                                <S.ReplyBase>
                                    {
                                        replyComment.map((reply)=>{
                                            if(reply.parentCommentId === el.commentId){
                                                return (
                                                    <S.CommentBase key={reply.commentId}>
                                                        <S.UserIcon style={{backgroundImage : 'url(/asset/image/user/user.png)'}}/>
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
                                                                                <button onClick={()=>onEditShowHandler(reply.commentId)}>수정</button>
                                                                                <button onClick={()=>deleteCommentHandler(reply.commentId)}>삭제</button>
                                                                            </>
                                                                        )
                                                                    }
                                                                </S.EditList>
                                                            </S.Name>
                                                            <S.CommentContent>
                                                                {
                                                                    reply.commentId !== editShow 
                                                                    ?
                                                                        <p>{reply.content}</p>
                                                                    :
                                                                        <CommentEdit
                                                                            status={status}
                                                                            setEditShow={setEditShow}
                                                                            mutate={mutate}
                                                                            commentId={reply.commentId}
                                                                        />
                                                                }
                                                            </S.CommentContent>
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