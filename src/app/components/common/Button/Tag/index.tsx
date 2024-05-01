import React from 'react'
import { ButtonStyle } from './style'
import { TagTypes } from './Tag.stories'

export default function Tag({label,onClick,active}: TagTypes) {
  return (
    <ButtonStyle onClick={onClick} $active={active}>{label}</ButtonStyle>
  )
}
