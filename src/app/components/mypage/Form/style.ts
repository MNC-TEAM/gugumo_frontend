import styled from "styled-components";
import { WhiteButton } from "../../common/Button/WhiteBtn/style";

export const Form = styled.form`
    
    margin-top: 62px;

    & + & {
        margin-top: 42px;
    }

    ${WhiteButton} {
        margin-top: 24px;
    }

    @media screen and (max-width : 820px) {

        & + & {
            margin-top: 26px;
        }

        ${WhiteButton} {
            margin: 20px 0 0 auto;
        }
    }

`;

export const Layout = styled.div`
    
    display: flex;
    align-items: center;
    gap: 142px;
    border-radius: 8px;
    background: ${({theme})=>theme.color.Surface};
    padding: 59px ${194/1200*100}% 59px ${137/1200*100}%;

    h4 {
        font-size: ${({theme})=>theme.fontSize.buttonSemibold};
        font-weight: ${({theme})=>theme.fontWeight.semibold};
        white-space: nowrap;
    }

    @media screen and (max-width : 1024px) {
        
        padding: 59px 5% 59px;
        gap: 71px;

    }

    @media screen and (max-width : 820px) {
        
        display: block;
        background: none;
        padding: 0;

    }

`;

export const InputLayout = styled.div`
    min-width: 0;
    flex: 1;
    p {
        font-size: ${({theme})=>theme.fontSize.buttonMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
        color: #000;
    }
    div {
        display: flex;
        gap: 18px;
        margin-top: 12px;
        input {
            height: 70px;
            border-radius: 8px;
            background: ${({theme})=>theme.color.Background};
            font-size: ${({theme})=>theme.fontSize.buttonMedium};
            font-weight: ${({theme})=>theme.fontWeight.medium};
            padding: 0 ${28/16}em;
            box-sizing: border-box;
            border: 0;
            outline: 0;
            width: 100%;
            font-family: "Pretendard";
            min-width: 0;

            &::placeholder {
                color: ${({theme})=>theme.color.OnSurface};
            }

        }
        button {
            all: unset;
            flex: 0 0 auto;
            width: 119px;
            border-radius: 8px;
            background: ${({theme})=>theme.color.Primary};
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            cursor: pointer;
        }
    }

    @media screen and (max-width:820px) {

        margin-top : 24px;

        p {
            font-size : 14px;
        }
        div {
            input {
                background: ${({theme})=>theme.color.Surface};
                height: 50px;
                font-size: 14px;
            }
            button {
                font-size: 16px;
                width: auto;
                padding: 0 ${23/16}em;
            }
        }
    }

`;

export const InputFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 42px;
    flex: 1;

    /* > div {
        input {
            width: 630px;
        }
    } */

    @media screen and (max-width:820px) {
        gap: 22px;

        ${InputLayout} {
            margin: 0;
            &:nth-of-type(1) {
                margin-top: 26px; 
            }
        }

    }

`;