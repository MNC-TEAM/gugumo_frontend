import { BookMarkSkeleton } from "@components/common/Card/Card.style";
import * as S from "./detail.style";
import moment from "moment";
import Bookmark from "@components/common/Button/Bookmark";
import ViewIcon from "@asset/icon/view.svg";
import { DetailDataType } from "@/types/meeting";

interface DetailTopStateT {
    isLoading : boolean;
    detail? : DetailDataType;
    bookmarkCount : number;
    setBookmarkCount : any;
}

export default function DetailTop({isLoading,detail,bookmarkCount,setBookmarkCount} : DetailTopStateT) {
  return (
    <S.Top>
            
        <S.TopFlex>
            {
                isLoading ?
                <><S.TopFlexPSkeleton/><S.TopFlexPSkeleton/></>
                :
                <>
                    <p>{detail?.data.author !== "" ? detail?.data.author : "탈퇴한 유저"}</p>
                    <p>{moment(detail?.data.createdDateTime).format('YYYY-MM-DD')}</p>
                </>
            }
            <S.View>
                {
                    isLoading ? 
                    <S.ViewIconSkeleton/>
                    :
                    <>
                        <ViewIcon stroke="#A5A5A5"/>
                        {detail?.data.viewCount}
                    </>
                }
            </S.View>
        </S.TopFlex>

        <S.BookFlex>
            {
                isLoading ?
                <BookMarkSkeleton/>
                :
                <>
                    <Bookmark
                        postid={detail?.data.postId as number} 
                        status={detail ? detail.data.bookmarked  : false} 
                        bookmarkCount={bookmarkCount}
                        setBookmarkCount={setBookmarkCount}
                    />
                    <p>{bookmarkCount}</p>
                </>
            }
        </S.BookFlex>

    </S.Top>
  )
}
