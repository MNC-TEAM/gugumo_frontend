"use client";

import React from 'react'
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <>
        <GlobalStyle/>
        {children}
    </>
  )
}
