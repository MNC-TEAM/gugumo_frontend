"use client";

import styled from "styled-components";

export const FindMain = styled.main`
    padding: 108px 0;
`;

export const FindBox = styled.div`
    max-width: 790px;
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 12px;
    padding: 54px 143px 57px;
    background: ${({theme})=>theme.color.Surface};
    font-family: "Pretendard";

    dl {
        text-align: center;
        color: ${({theme})=>theme.color.Primary};
        dt {
            font-size: ${({theme})=>theme.fontSize.titleSemibold};
            font-weight: 600;
        }
        dd {
            font-size: 14px;
            margin-top: ${25/14}em;
            line-height: 148%;
            span {
                font-weight: bold;
            }
        }
    }

    form {
        margin-top: 35px;
    }
    
    input {
        font-size: ${({theme})=>theme.fontSize.buttonMedium};
    }

    button {
        width: ${138/16}em;
        height: ${47/16}em;
        color: ${({theme})=>theme.color.OnPrimary};
        background-color: ${({theme})=>theme.color.Primary};
        font-size: ${({theme})=>theme.fontSize.buttonMedium};
        border-radius: 8px;
        margin: 1em auto 0;
        display: block;
        cursor: pointer;
    }

`;