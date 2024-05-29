"use client"

import Login from '@/app/components/auth/Modal/Login';
import { useAppSelector } from '@/store/hook';
import React from 'react'
import styled from 'styled-components';
import { BaseModalBackground, ModalProvider } from 'styled-react-modal';

const SpecialModalBackground = styled(BaseModalBackground)`
  background: none;
`

export default function ModalContext({
    children,
}: {
    children: React.ReactNode;
}) {
    const modalState = useAppSelector((state)=>state.modal);
    return (
        <ModalProvider backgroundComponent={SpecialModalBackground}>
            {children}
            { modalState.login && <Login/> }
        </ModalProvider>
    )
}
