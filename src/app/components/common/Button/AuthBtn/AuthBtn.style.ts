import styled from "styled-components";
import { AuthBtnProps } from "./AuthBtn.stories";

export const Button = styled.button<AuthBtnProps>`
    font-size: ${({theme})=>theme.fontSize.captionRegular};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    border: 1px solid ${({theme})=>theme.color.Primary};
    padding: 7px 11px;
    border-radius: 6px;
    color: ${({active,theme})=>{
        if(!active){
            return theme.color.Primary;
        }else{
            return theme.color.OnPrimary;
        }
    }};
    background: ${({active,theme})=>{
        if(!active){
            return theme.color.OnPrimary;
        }else{
            return theme.color.Primary;
        }
    }};
    transition: .4s;
    transition-property: color,background;
    cursor: pointer;
    &:hover {
        color: ${({theme})=>theme.color.OnPrimary};
        background: ${({theme})=>theme.color.Primary};
    }
`;