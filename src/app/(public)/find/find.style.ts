"use client";
import * as I from "@components/common/Input/Basic/Input/Input.style";
import styled from "styled-components";

export const FindMain = styled.main`
    padding: 108px 0;
`;

export const FindBox = styled.div`
    width: 90%;
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
        @media screen and (max-width:820px) {
            font-size: 14px;
        }
    }

    button {
        width: ${138/16}em;
        height: ${47/16}em;
        color: ${({theme})=>theme.color.OnPrimary};
        background-color: ${({theme})=>theme.color.Primary};
        font-size: ${({theme})=>theme.fontSize.buttonMedium};
        border-radius: 8px;
        margin: 16px auto 0;
        display: block;
        cursor: pointer;
    }

    @media screen and (max-width:820px) {

        padding: 54px 5% 57px;
        background: none;

        ${I.Box}{
            height: 50px;
        }

        form {
            margin-top: 48px;
        }

        dl {
            dt {
                font-size: 20px;
            }
            dd {
                font-size: 14px;
                word-break: keep-all;
            }
        }

        button {
            width: 108px;
            height: 43px;
            font-size: 16px;
            margin-top: 19px;
        }

    }

`;