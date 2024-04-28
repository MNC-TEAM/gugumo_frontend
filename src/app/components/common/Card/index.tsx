import React from 'react'
import { CardStyle,Date,Detail,Flex, Tag } from './style'
import { useRouter } from 'next/navigation'
import moment from 'moment'
import Bookmark from '../Button/Bookmark'

interface CardType {
  /**
   * 게시글 번호를 입력합니다.
  */
  postId : number
  /**
   * 모집중, 모집완료 등 상태창을 넣습니다.
  */
  status : string
  /**
   * 구기종목의 타입을 지정합니다.
  */
  gameType : string
  /**
   * 지역을 지정합니다.
  */
  location : string
  /**
   * 게시글 제목을 입력합니다.
  */
  title : string
  /**
   * 요일을 선택합니다.
  */
  meetingDateTime : string
  /**
   * 멤버수를 지정합니다.
  */
  meetingMemberNum : number
  /**
   * 날짜를 밀리초형식으로 입력합니다.
  */
  meetingDeadline : number
  /**
   * 북마크상태를 가져옵니다. 
  */
  bookmarkStatus : boolean
}

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
