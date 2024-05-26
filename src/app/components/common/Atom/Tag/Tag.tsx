import React from 'react'
import * as S from "./Tag.style";
import { GAMETYPE, LOCATION, STATUS } from '@/app/constant/meetingQuery';
import { TagType } from "./Tag.stories";

export default function Tag({status,gameType,location,color} : TagType) {
  return (
    <S.Tag 
      color={color}
      $status={status ? status : "RECRUIT"}
    >
      {
        status && STATUS[status]
      }
      {
        gameType && GAMETYPE[gameType]
      }
      {
        location && LOCATION[location]
      }
    </S.Tag>
  )
}
