import React from 'react'
import { ButtonStyle } from './style'

interface TagTypes {
  /**
   * 버튼안에 들어갈 텍스트를 적습니다.
   */
  label : string,
  /**
   * 버튼을 클릭할시 발생하는 이벤트를 넣습니다.
  */
  onClick? : React.MouseEventHandler<HTMLButtonElement>
}

export default function Tag({label,onClick}: TagTypes) {
  return (
    <ButtonStyle onClick={onClick}>{label}</ButtonStyle>
  )
}
