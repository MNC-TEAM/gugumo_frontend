import React from 'react'
import { CardStyle,Flex, Tag } from './style'

export default function Card() {
  return (
    <CardStyle>
      <Flex>
        <Tag color="recruit">모집중</Tag>
        <Tag color="ball">배드민턴</Tag>
        <Tag color="region">인천</Tag>
      </Flex>
      <h4>인천에서 배드민턴 같이 치실분 구합니다!</h4>
    </CardStyle>
  )
}
