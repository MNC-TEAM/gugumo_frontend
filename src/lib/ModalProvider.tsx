"use client"
import Login from '@/app/components/auth/Login';
import Sign from '@/app/components/auth/Sign';
import { useAppSelector } from '@/store/hook';
import React from 'react'

export default function ModalProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const modalState = useAppSelector((state)=>state.modal);
    return (
        <>
            {children}
            { modalState.login && <Login/> }
            { modalState.signup && <Sign/> }
        </>
    )
}
