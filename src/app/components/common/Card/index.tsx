import React from 'react'
import { CardStyle,Date,Detail,Flex, Tag } from './style'

export default function Card() {
  return (
    <CardStyle>
      <Flex>
        <Tag color="recruit">모집중</Tag>
        <Tag color="ball">배드민턴</Tag>
        <Tag color="region">인천</Tag>
      </Flex>
      
      <h4>인천에서 배드민턴 같이 치실 분 구합니다!</h4>

      <Detail>
        <li>
          <p>시간</p>
          <p>09시</p>
        </li>
        <li>
          <p>요일</p>
          <p>토요일</p>
        </li>
        <li>
          <p>인원</p>
          <p>2명</p>
        </li>
      </Detail>

      <Date>
        <span>모집 마감일 24.05.11</span>
        <button>
          <img src="/asset/icon/bookmark.svg" alt="" />
        </button>
      </Date>

    </CardStyle>
  )
}
