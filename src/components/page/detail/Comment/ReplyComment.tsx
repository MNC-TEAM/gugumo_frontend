import axios from "axios";
import * as S from "./Comment.style";
import { useForm } from "react-hook-form";
import Primary from "@components/common/Button/Primary/Primary";

interface ReplyCommentProps{
    status : "authenticated" | "loading" | "unauthenticated";
    parentId : number;
    postId : string;
    mutate : any;
    setReplyShow : any;
}

export default function ReplyComment({status,parentId,postId,mutate,setReplyShow} : ReplyCommentProps) {

    const {register,handleSubmit,setValue} = useForm();

    const onReplyCommentHandler = (event : any)=>{

        if(status !== "authenticated") {
            return alert('로그인을 해야합니다.');
        }

        const {content} = event;

        const body = {
            postId,
            content,
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

  return (
    <S.ReplyBase>
        <S.CommentForm>
            <form onSubmit={handleSubmit(onReplyCommentHandler)}>
                <textarea 
                    placeholder="댓글을 입력해주세요"
                    {...register('content',{maxLength: 1000, minLength : 1})} 
                />
                <Primary type="submit">댓글 등록하기</Primary>
            </form>
        </S.CommentForm>
    </S.ReplyBase>
  )
}
