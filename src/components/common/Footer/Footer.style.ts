"use client"
import { Wrap } from "@styles/global";
import styled from "styled-components";

export const FooterStyle = styled.footer`
    background: ${({theme})=>theme.color.Surface};
    height: 180px;

    @media screen and (max-width:820px) {
        height: auto;
        padding: 28px 0 43px;
    }

`;

export const Wrapper = styled(Wrap)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media screen and (max-width:820px) {
        display: block;
    }

`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    @media screen and (max-width:820px) {
        flex-direction: column;
        align-items: flex-start;
    }

`;

export const CopyBox = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width:820px) {
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        margin-top: 19px;

        img {
            width: 99px;
        }

    }

`;

export const Copy = styled.div`
    p {
        color: #4FAAFF;
        font-weight: 500;
        font-size: 11px;
        + p {
            margin-top: 10px;
        }
    }

    @media screen and (max-width:820px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-top: 5px;
        p {
            margin-top: 5px;
            br {
                display: none;
            }
            + p {
                order: -1;
                margin-top: 0;
            }
        }
    }

`;

export const Service = styled.div`
    display: flex;
    gap: 72px;
    font-size: ${({theme})=>theme.fontSize.captionMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    color: ${({theme})=>theme.color.OnSurface};

    button {
        cursor: pointer;
        color: inherit;
    }

    @media screen and (max-width:820px) {
        order: -1;
        gap: 0;
        justify-content: space-between;
        width: 100%;
        font-size: 12px;
    }
   
`;