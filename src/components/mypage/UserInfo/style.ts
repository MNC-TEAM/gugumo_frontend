"use client"

import styled from "styled-components";

export const UserFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 29px;
    margin-top: 61px;
    
    @media screen and (max-width : 820px) {
        margin-top: 16px;
        gap: 23px;
        padding-bottom: 38px;
        flex-direction: column;
        align-items: center;
    }

`;

export const User = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;

    div {
        border-radius: 1000px;
        background: ${({theme})=>theme.color.Surface};
        width: 104px;
        &::after {
            content: '';
            display: block;
            padding-bottom: 100%;
        }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 14px;
        font-size: ${({theme})=>theme.fontSize.buttonMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
        color: ${({theme})=>theme.color.OnBackgroundGray};
    }

    @media screen and (max-width : 820px) {
        
        div {
            width: 78px;
        }

        button {
            margin-top: 12px;
            font-size: ${({theme})=>theme.fontSize.captionMedium};
            font-weight: ${({theme})=>theme.fontWeight.medium};
        }

    }

`;

export const UserName = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: ${({theme})=>theme.fontSize.buttonMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    transform: translateY(-12px);
    p {
        font-size: ${({theme})=>theme.fontSize.captionMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
        color: ${({theme})=>theme.color.OnSurface};
        border: 1px solid ${({theme})=>theme.color.OnSurface};
        padding: 5px 8px;
        border-radius: 1000px;
    }

    @media screen and (max-width : 820px) {
        gap: 7px;
        transform: translateY(0);
    }

`;