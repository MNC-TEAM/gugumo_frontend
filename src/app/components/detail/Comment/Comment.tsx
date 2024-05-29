import Primary from "@/app/components/common/Button/Primary/Primary";
import * as S from "./Comment.style";
import { useEffect } from "react";
// import moment from "moment";

export default async function Comment() {

    useEffect(()=>{
        console.log(1);
    },[]);

  return (
    <>
        <S.CommentLength>
            댓글<span>0</span>
        </S.CommentLength>

        <S.CommentFormBase>
            <S.UserIcon/>
            <S.CommentForm>
                <form>
                    <textarea placeholder="댓글을 입력해주세요"/>
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
                                <dt>정하은</dt>
                                {/* <dd>{moment(elm.createdDateTime).format("YYYY-MM-DD")}</dd> */}
                            </dl>
                            <S.EditList>
                                <button>답글</button>
                                <button>수정</button>
                                <button>삭제</button>
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
