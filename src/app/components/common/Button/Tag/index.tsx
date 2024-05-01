import React from 'react'
import { ButtonStyle } from './style'
import { TagTypes } from './Tag.stories'

export default function Tag({label,onClick,onHover}: TagTypes) {
  return (
    <ButtonStyle 
      onClick={onClick}
      onHover={onHover}
    >{label}</ButtonStyle>
  )
}
