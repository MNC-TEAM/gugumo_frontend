import * as G from "@styles/global";
import styled, { css } from "styled-components";

interface HeaderType {
    $postion? : boolean
}

export const HeaderStyle = styled.header<HeaderType>`
    margin-top: 40px;
    width: 100%;
    position: ${({$postion})=>{
        if($postion) {
            return "absolute"
        }else{
            return "relative";
        }
    }};
    z-index: 22;

    @media screen and (max-width : 820px) {
        position: relative;
        margin-top: 32px;
    }

`;

export const Logo = styled.div<HeaderType>`
    width: 172px;
    filter: ${({$postion})=> $postion ? "brightness(0) invert(1)" : ""};
    @media screen and (max-width : 820px) {
        width: 91px;
        filter : none;
    }
`;

export const Wrapper = styled(G.Wrap)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LoginStyle = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 74px;
    height: 35px;
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
        width: 69px;
        height: 28px;
        font-size: 14px;
    }

`;


export const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 26px;

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


export const Alarm = styled.div`
    position: relative;
`;

export const AlarmBox = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    width: 342px;
    /* height: 334px; */
    border-radius: 8px;
    background: ${({theme})=>theme.color.Background};
    box-shadow: 0 4px 16.7px rgba(000,000,000,0.1);
    padding: 22px 30px;
    box-sizing: border-box;
    max-height: 334px;
    overflow-y: auto;
`;

export const AlarmBoxFlex = styled.div`
    display: flex;
    justify-content: space-between;

    h4 {
        color: ${({theme})=>theme.color.Primary};
        font-size: ${({theme})=>theme.fontSize.buttonSemibold};
        font-weight: 600;
    }

    button {
        font-size: 13px;
        color: ${({theme})=>theme.color.OnSurface};
        font-weight: bold;
    }
`;

export const AlarmBoxDay = styled.div`
    margin-top: 23px;
    > p {
        margin-left: 3px;
        font-size: ${({theme})=>theme.fontSize.captionRegular};
        color: ${({theme})=>theme.color.OnSurface};
    }
`;

export const AlarmBoxList = styled.ul<{$status? : boolean}>`
    margin-top: 8px;
    li {
        display: flex;
        white-space: nowrap;
        gap: 8px;
        background: ${({theme})=>theme.color.Surface};
        padding: 14px 12px;
        border-radius: 4px;
        align-items: center;
        cursor: pointer;
        + li {
            margin-top: 8px;
        }
        span {
            color: ${({theme})=>theme.color.Primary};
            background: ${({theme})=>theme.color.Background};
            font-size: 13px;
            padding: 3px 8.5px; 
            border-radius: 1000px;
        }
        p {
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: ${({theme})=>theme.fontSize.captionRegular};
        }
        button {
            img {
                vertical-align: middle;
            }
        }
    }

    ${({$status})=>{
        if($status) return css`
            li {
                background : #F5F5F5;
                span {
                    background: ${({theme})=>theme.color.Outline};
                    color: ${({theme})=>theme.color.OnSurface};
                }
            }
        `;
    }}

`;