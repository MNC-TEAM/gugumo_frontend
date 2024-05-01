import React from 'react'
import { ButtonStyle } from './style'

export default function Tag({label,onClick,active}: TagTypes) {
  return (
    <ButtonStyle onClick={onClick} $active={active}>{label}</ButtonStyle>
  )
}
