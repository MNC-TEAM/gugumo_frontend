"use client"
import Primary from "@components/common/Button/Primary/Primary";
import * as S from "./Comment.style";
import moment from "moment";
import { useForm } from "react-hook-form";
import axios from "axios";

export default async function Comment({postId} : {postId : string}) {

    const {register,handleSubmit} = useForm();

    const onCommentHanlder = async (event : any)=>{
        const {content} = event;
        const {data} = await axios.post('/api/post/comment',{
            postId,
            content
        });
        const {status,message} = data;

        if(status === "fail"){
            return alert(message);
        }else{
            alert('등록이 완료 되었습니다.');
        }

    }

  return (
    <>
        <S.CommentLength>
            댓글<span>0</span>
        </S.CommentLength>

        <S.CommentFormBase>
            <S.UserIcon/>
            <S.CommentForm onSubmit={handleSubmit(onCommentHanlder)}>
                <form>
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
                <li>
                    <S.UserIcon/>
                    <S.Comment>
                        <S.Name>
                            <dl>
                                <dt>김지유</dt>
                                <dd>1시간전</dd>
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
                        <p>댓글 내용입니다.</p>
                    </S.Comment>
                </li>
            </S.CommentList>
        </S.CommentListBase>
    </>
  )
}
