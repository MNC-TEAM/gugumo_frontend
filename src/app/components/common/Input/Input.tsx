import React, { InputHTMLAttributes } from 'react'
import * as S from "./style";

interface InputType extends InputHTMLAttributes<HTMLInputElement>{
  error? : string;
  register: any;
}

export function Input({type,placeholder,error,register} : InputType){
  return (
    <S.InputStyle>
      <input type={type} placeholder={placeholder} {...register} />
      {
        error && <p>{error}</p>
      }
    </S.InputStyle>
  )
}