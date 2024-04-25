"use client";

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';

export default function layout({children} : {children : React.ReactNode}) {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
        {children}
      <Footer/>
    </ThemeProvider>
  )

}