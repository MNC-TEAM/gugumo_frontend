"use client";
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Login from '../components/auth/Login';
import Sign from '../components/auth/Sign';
import { useAppSelector } from '@/store/hook';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

export default function layout({children} : {children : React.ReactNode}) {

  const modalState = useAppSelector((state)=>state.modal);

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      {children}
      <Footer/>
      { modalState.login && <Login/> }
      { modalState.signup && <Sign/> }
    </ThemeProvider>
  )
  
}