import React from 'react'
import * as S from './style';
import { useRouter } from 'next/navigation'
import moment from 'moment'
import Bookmark from '../../Button/Bookmark'
import { CardType } from './Card.stories'

export default function Card({postId,status,gameType,location,title,meetingDateTime,meetingMemberNum,meetingDeadline,bookmarkStatus}: CardType) {
  const router = useRouter();
  return (
    <S.CardStyle onClick={()=>router.push(`/detail/${postId}`)}>

      <S.Flex>
        <S.Tag color="recruit">{status}</S.Tag>
        <S.Tag color="ball">{gameType}</S.Tag>
        <S.Tag color="region">{location}</S.Tag>
      </S.Flex>
      
      <S.Title>{title}</S.Title>

      <S.Detail>
        <li>
          <p>시간</p>
          <p>{meetingDateTime}시</p>
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
        <span>모집 마감일 {moment(meetingDeadline).format("YYYY.MM.DD")}</span>
        <Bookmark 
          postid={"1"} 
          status={bookmarkStatus}
        />
      </S.Date>
    </S.CardStyle>
  )
}
