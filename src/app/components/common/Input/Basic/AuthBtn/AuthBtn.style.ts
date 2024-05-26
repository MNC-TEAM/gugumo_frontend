import styled from "styled-components";

export const Button = styled.button<{$active? : boolean}>`
    border: 1px solid ${({theme})=>theme.color.Primary};
    font-size: ${({theme})=>theme.fontSize.captionRegular};
    font-weight: ${({theme})=>theme.fontWeight.regular};
    color: ${({theme,$active})=>{
        if($active){
            return theme.color.OnPrimary;
        }else{
            return theme.color.Primary;
        }
    }};
    background: ${({theme,$active})=>{
        if($active){
            return theme.color.Primary;
        }else{
            return theme.color.OnPrimary;
        }
    }};
    padding: ${7/13}em ${11/13}em;
    border-radius: ${6/13}em;
    cursor: pointer;
`;