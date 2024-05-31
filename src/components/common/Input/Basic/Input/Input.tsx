"use client"

import * as S from "./Input.style";

export default function Input({children,error} : {children : React.ReactNode,error? : string}) {
  return (
    <>
        <S.Box $error={error}>{children}</S.Box>
        {error && <S.Error>{error}</S.Error>}
    </>
  )
}
