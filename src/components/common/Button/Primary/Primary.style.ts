"use client";

import styled from "styled-components";

export const Button = styled.button`
    font-size: ${({theme})=>theme.fontSize.buttonSemibold};
    font-weight: ${({theme})=>theme.fontWeight.semibold};
    color: ${({theme})=>theme.color.OnPrimary};
    background: ${({theme})=>theme.color.Primary};
    font-family: "Pretendard";
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;

    @media screen and (max-width:820px) {
        font-size: 14px;
    }

`;