import React from 'react'
import { CardStyle,Date,Detail,Flex, Tag } from './style'
import { useRouter } from 'next/navigation'
import moment from 'moment'
import Bookmark from '../../Button/Bookmark'
import { CardType } from './Card.stories'

export default function Card({postId,status,gameType,location,title,meetingDateTime,meetingMemberNum,meetingDeadline,bookmarkStatus}: CardType) {
  const router = useRouter();
  return (
    <CardStyle onClick={()=>router.push(`/detail/${postId}`)}>

      <Flex>
        <Tag color="recruit">{status}</Tag>
        <Tag color="ball">{gameType}</Tag>
        <Tag color="region">{location}</Tag>
      </Flex>
      
      <h4>{title}</h4>

      <Detail>
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
      </Detail>

      <Date>
        <span>모집 마감일 {moment(meetingDeadline).format("YYYY.MM.DD")}</span>
        <Bookmark status={bookmarkStatus}/>
      </Date>
    </CardStyle>
  )
}
