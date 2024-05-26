import styled from "styled-components";
import * as A from "../AuthBtn/AuthBtn.style";

export const Box = styled.div<{$error? : string}>`
    height: 45px;
    border-radius: 8px;
    border: 1px solid ${({$error,theme})=>{
        if($error){
            return theme.color.Error;
        }else{
            return theme.color.Outline;
        }
    }};
    position: relative;
    overflow: hidden;
    input {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        min-width: 0;
        outline: 0;
        border: 0;
        padding: 0 ${12/16}em;
        font-size: ${({theme})=>theme.fontSize.bodyMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
        font-family: "Pretendard";
        color: ${({$error,theme})=>{
            if($error){
                return theme.color.Error;
            }
        }};
    }

    ${A.Button}{
        position: absolute;
        right: 9px;
        top: 50%;
        transform: translateY(-50%);
        border-color: ${({$error,theme})=>{
            if($error){
                return theme.color.Error;
            }
        }};
        color: ${({$error,theme})=>{
            if($error){
                return theme.color.Error;
            }
        }};
    }

`;


export const Error = styled.p`
    font-size: ${({theme})=>theme.fontSize.captionRegular};
    font-weight: ${({theme})=>theme.fontWeight.regular};
    color: ${({theme})=>theme.color.Error};
`;