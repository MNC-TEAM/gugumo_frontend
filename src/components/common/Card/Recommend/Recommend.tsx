import * as S from "./Recommend.style";
import * as C from "../Card.style";
import moment from "moment";
import { useRouter } from "next/navigation";
import { CardType } from "@components/common/Card/Main/Card.stories";
import Tag from "@components/common/Atom/Tag/Tag";
import Bookmark from "@components/common/Button/Bookmark";

export default function Recommend(
  {postId,status,gameType,location,title,meetingDateTime,meetingMemberNum,meetingDeadline,bookmarkStatus}
  : 
  CardType
) {

  const router = useRouter();

  return (
    <S.CardLayout onClick={()=>router.push(`/detail/${postId}`)}>
      <C.TopFlex>
          <Tag color="recruit" status={status}/>
          <Tag color="ball" gameType={gameType}/>
          <Tag color="region" location={location}/>
      </C.TopFlex>
      <C.Title>{title}</C.Title>
      <S.Detail>
        <li>
          <p>시간</p>
          <p>{moment(meetingDateTime).format("YYYY-MM-DD HH")}시</p>
        </li>
        <li>
          <p>요일</p>
          <p>토요일</p>
        </li>
        <li>
          <p>인원</p>
          <p>{meetingMemberNum}명</p>
        </li>
      </S.Detail>

      <S.Date>
        <span>모집 마감일 {meetingDeadline}</span>
        <Bookmark
          postid={postId}
          status={bookmarkStatus}
        />
      </S.Date>
    </S.CardLayout>
  )
}
