"use client";

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/global';
import { theme } from '../../styles/theme';
import Login from '../components/auth/Login';
import Sign from '../components/auth/Sign';

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