import React from 'react'
import * as S from "./Input.style";
import {InputType} from "./Input.stories";

export default function Input({children} : InputType) {
  return (
    <S.Box>{children}</S.Box>
  )
}
