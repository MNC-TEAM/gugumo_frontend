"use client"
import styled from "styled-components";

export const Wrap = styled.div`
    padding: 150px 0;
    width: 95%;
    margin: 0 auto;
`;

export const Box = styled.div`
    padding: 54px 133px 56px;
    background: ${({theme})=>theme.color.Surface};
    max-width: 565px;
    margin: 0 auto;
    border-radius: 12px;
`;

export const Title = styled.h1`
    font-size: ${({theme})=>theme.fontSize.titleSemibold};
    font-weight: ${({theme})=>theme.fontWeight.semibold};
    text-align: center;
    color: ${({theme})=>theme.color.Primary};
    margin-bottom: 50px;
`;

export const Layout = styled.div`

    & + & {
        margin-top: 58px;
    }    

    > p {
        font-size: ${({theme})=>theme.fontSize.buttonSemibold};
        font-weight: ${({theme})=>theme.fontWeight.semibold};
        color: ${({theme})=>theme.color.Primary};
        margin-bottom: 20px;
    }

`;

export const LayoutBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 19px;
`;

export const GameBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Service = styled.div`
    background: ${({theme})=>theme.color.Primary};
`;

export const All = styled.div`
    padding: 19px 25px;
`;

export const Argee = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ArgeeCheck = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
    div {
        width: 19px;
        height: 19px;
        border-radius: 4px;
        background: #fff;
    }
    p {
        font-size: ${({theme})=>theme.fontSize.buttonMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
        color: ${({theme})=>theme.color.OnPrimary};
    }
`;

export const ArgeeList = styled.div`
    padding: 19px 25px; 
    border-top: 1px solid ${({theme})=>theme.color.OnPrimary};

    li {
        + li {
            margin-top: 16px;
        }
    }

`;

export const ArgeeLink = styled.div`
    font-size: 12px;
    color: ${({theme})=>theme.color.OnPrimary};
    text-decoration: underline;
    text-underline-position: under;
    cursor: pointer;
`;


export const ButtonList = styled.div`
    text-align: center;
    margin-top: 56px;
`;