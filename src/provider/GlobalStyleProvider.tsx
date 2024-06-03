"use client"
import { GlobalStyle } from '@styles/global'
import React from 'react'

export default function GlobalStyleProvider({children} : {children : React.ReactNode}) {
  return (
    <>
        <GlobalStyle/>
        {children}
    </>
  )
}
