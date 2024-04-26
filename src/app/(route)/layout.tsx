"use client";

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import Login from '../components/auth/Login';
import Sign from '../components/auth/Sign';
import { GlobalStyle } from '@/styles/global';

export default function layout({children} : {children : React.ReactNode}) {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      <Login/>
      <Sign/>
        {children}
      <Footer/>
    </ThemeProvider>
  )
  
}