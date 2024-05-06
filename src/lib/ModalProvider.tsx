"use client"

import Login from '@/app/components/auth/Modal/Login';
import Sign from '@/app/components/auth/Modal/Sign';
import { useAppSelector } from '@/store/hook';
import React from 'react'
import { ModalProvider } from 'styled-react-modal';

export default function ModalContext({
    children,
}: {
    children: React.ReactNode;
}) {
    const modalState = useAppSelector((state)=>state.modal);
    return (
        <ModalProvider>
            {children}
            { modalState.login && <Login/> }
            { modalState.signup && <Sign/> }
        </ModalProvider>
    )
}
