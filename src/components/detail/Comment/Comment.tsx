"use client"

import Primary from "@components/common/Button/Primary/Primary";
import * as S from "./Comment.style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useCommentList } from "@hooks/useComment";
import { useCallback } from "react";
import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");

export default function Comment({postId} : {postId : string}) {

    const {register,handleSubmit,setValue} = useForm();
    const {data : comment,mutate} = useCommentList(postId);

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
                setValue('content',"");
                mutate();
            }
        });

    },[postId]);

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
                                <div>
                                    <S.UserIcon/>
                                    <S.Comment>
                                        <S.Name>
                                            <dl>
                                                <dt>{el.author}</dt>
                                                <dd>{moment(el.createdDateTime).startOf('hour').fromNow()}</dd>
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
                                </div>

                                <S.CommentList>
                                    <li>
                                        <div>
                                            <S.UserIcon/>
                                            <S.Comment>
                                                <S.Name>
                                                    <dl>
                                                        <dt>123</dt>
                                                        <dd>123</dd>
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
                                                <p>123</p>
                                            </S.Comment>
                                        </div>
                                    </li>
                                </S.CommentList>

                            </li>
                        ))
                    }
                </S.CommentList>
            </S.CommentListBase>
        </>
    )
}