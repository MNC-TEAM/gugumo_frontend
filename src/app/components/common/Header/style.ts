import { Wrap } from "@/styles/global";
import styled from "styled-components";

export const HeaderStyle = styled.header`
    margin-top: 40px;
    position: relative;
    z-index: 22;

    @media screen and (max-width : 820px) {
        margin-top: 47px;
    }

`;

export const Logo = styled.div`
    width: 172px;
    @media screen and (max-width : 820px) {
        width: 91px;
    }
`;

export const Wrapper = styled(Wrap)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LoginStyle = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 79px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: ${({theme})=>theme.color.Primary};
    color: #fff;
    font-size: ${({theme})=>theme.fontSize.buttonSemibold};
    font-weight: ${({theme})=>theme.fontWeight.semibold};
    border-radius: 4px;
    cursor: pointer;

    @media screen and (max-width: 820px) {
        width: 74px;
        height: 35px;
    }

`;


export const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 26px;
    img {
        cursor: pointer;
    }

    button {
        all: unset;
        cursor: pointer;
    }

    @media screen and (max-width : 820px) {
        gap: 8px;
        img {
            width: 24px;
        }
    }

`;


export const UserMenu = styled.div`
    position: relative;
    ul {
        position: absolute;
        right: 0;
        top: 100%;
        padding: 20px 30px;
        border: 1px solid ${({theme})=>theme.color.Primary};
        font-size: ${({theme})=>theme.fontSize.captionMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
        border-radius: 4px;
        white-space: nowrap;
        text-align: center;
        background: ${({theme})=>theme.color.Background};
        margin-top: 10px;
        li {
            + li {
                margin-top: 12px;
            }
            a,button {
                color : ${({theme})=>theme.color.OnSurface};
            }
        }
    }

`;