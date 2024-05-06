import styled from "styled-components";

export const MypageStyle = styled.main`
    padding: 155px 0 93px;

    @media screen and (max-width: 820px) {
        padding: 23px 0 107px;
    }
`;

export const Title = styled.h1`
    color: ${({theme})=>theme.color.OnBackground};
    font-size: ${({theme})=>theme.fontSize.titleMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    display: flex;
    align-items: center;
    gap: 15px;
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
    margin-top: 133px;
    button {
        all: unset;
        text-align: center;
        cursor: pointer;
        color: ${({theme})=>theme.color.OnBackgroundGray};
        font-size: ${({theme})=>theme.fontSize.buttonMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
        border-bottom: 1px solid ${({theme})=>theme.color.OnBackgroundGray};
        padding: 0 5px 2px;
    }

    @media screen and (max-width : 820px) {
        margin-top: 88px;
    }

`;