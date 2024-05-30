import * as G from "@styles/global";
import styled from "styled-components";

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