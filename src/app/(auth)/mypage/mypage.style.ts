import styled from "styled-components";

export const MypageStyle = styled.main`
    padding: 120px 0 93px;

    @media screen and (max-width: 820px) {
        padding: 38px 0 120px;
    }
`;

export const Wrap = styled.div`
    max-width: 1200px;
    padding: 0 2.5%;
    margin: 0 auto;

    @media screen and (max-width:820px) {
        box-sizing: border-box;
        & + & {
            border-top: 6px solid ${({theme})=>theme.color.Surface};
        }
    }

`;

export const Prev = styled.button`
    @media screen and (min-width:821px) {
        display: none;
    }
`;


export const Title = styled.h1`
    color: ${({theme})=>theme.color.OnBackground};
    font-size: ${({theme})=>theme.fontSize.titleMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 10px;

    button {
        display: none;
        cursor: pointer;
    }

    @media screen and (max-width : 820px) {
        font-size: 18px;
        button {
            display: block;
        }
    }

`;

export const UserDelete = styled.div`
    text-align: center;
    margin-top: 83px;
    button {
        all: unset;
        text-align: center;
        cursor: pointer;
        color: ${({theme})=>theme.color.OnBackgroundGray};
        font-size: ${({theme})=>theme.fontSize.buttonMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
        border-bottom: 1px solid ${({theme})=>theme.color.OnBackgroundGray};
        padding: 0 ${5/16}em 2px;
    }

    @media screen and (max-width : 820px) {
        margin-top: 88px;
        button {
            font-size: 12px;
        }
    }

`;


