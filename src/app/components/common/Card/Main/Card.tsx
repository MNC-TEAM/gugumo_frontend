import React from 'react'
import * as S from './Card.style';
import * as C from "../Card.style";
import { useRouter } from 'next/navigation'
import moment from 'moment'
import Bookmark from '@/app/components/common/Button/Bookmark';
import { CardType } from './Card.stories'
import { STATUS,GAMETYPE, LOCATION } from '@/app/constant/meetingQuery';

export default function Card(
{postId,status,gameType,location,title,meetingDateTime,meetingMemberNum,meetingDeadline,bookmarkStatus}
: 
CardType
) {
  const router = useRouter();
  return (
    <S.CardStyle 
      onClick={()=>router.push(`/detail/${postId}`)}
    >
      <S.Flex>
        <S.Tag 
          color="recruit" 
          $status={status}>{STATUS[status]}</S.Tag>
        <S.Tag 
          color="ball"
        >{GAMETYPE[gameType]}</S.Tag>
        <S.Tag 
          color="region"
        >{LOCATION[location]}</S.Tag>
      </S.Flex>
      
      <C.Title>{title}</C.Title>

      <C.Detail>
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
      </C.Detail>

      <C.Date>
        <span>모집 마감일 {meetingDeadline}</span>
        <Bookmark 
          postid={postId}
          status={bookmarkStatus}
        />
      </C.Date>
    </S.CardStyle>
  )
}