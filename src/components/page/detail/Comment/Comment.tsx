"use client";
import * as S from "./Comment.style";
import axios from "axios";
import { useCommentList } from "@hooks/useComment";
import { useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import { useSession } from "next-auth/react";
import ReplyComment from "@components/page/detail/Comment/ReplyComment";
import CommentForm from "@components/page/detail/Comment/CommentForm";
import CommentEdit from "@components/page/detail/Comment/CommentEdit";
moment.locale("ko");

export default function Comment({postId} : {postId : string}) {

    const {status} = useSession();
    const {commentLength,parentComment,replyComment,mutate} = useCommentList(postId);
    const [commnetShow,setCommnetShow] = useState({
        commentId : 0,
        type : "edit"
    });

    const deleteCommentHandler = (commentId : number)=>{

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

    };

    const onReplyShowHandler = (commentId : number)=>{

        if(status !== "authenticated") {
            return alert('로그인을 해야합니다.');
        }

        if(commnetShow.commentId === commentId && commnetShow.type === "reply"){
            return setCommnetShow({
                commentId : 0,
                type : "reply"
            });    
        }

        setCommnetShow({
            commentId,
            type : "reply"
        });

    };

    const onEditShowHandler = (commentId : number)=>{
        if(status !== "authenticated") {
            return alert('로그인을 해야합니다.');
        }

        if(commnetShow.commentId === commentId && commnetShow.type === "edit"){
            return setCommnetShow({
                commentId : 0,
                type : "edit"
            });    
        }

        setCommnetShow({
            commentId,
            type : "edit"
        });

    };

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
                                            (commnetShow.commentId === el.commentId && commnetShow.type === "edit") ?
                                            <CommentEdit
                                                status={status}
                                                setEditShow={setCommnetShow}
                                                mutate={mutate}
                                                commentId={el.commentId}
                                                content={el.content}
                                            /> :
                                            <p>{el.content}</p>     
                                        }
                                    </S.CommentContent>
                                </S.Comment>
                            </S.CommentBase>

                            {
                                (commnetShow.commentId === el.commentId && commnetShow.type === "reply") &&
                                <ReplyComment 
                                    postId={postId} 
                                    status={status} 
                                    parentId={el.commentId}
                                    mutate={mutate}
                                    setReplyShow={setCommnetShow}
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
                                                                    (commnetShow.commentId === reply.commentId && commnetShow.type === "edit") ?
                                                                    <CommentEdit
                                                                        status={status}
                                                                        setEditShow={setCommnetShow}
                                                                        mutate={mutate}
                                                                        commentId={reply.commentId}
                                                                        content={reply.content}
                                                                    /> :
                                                                    <p>{reply.content}</p>     
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
    );
}