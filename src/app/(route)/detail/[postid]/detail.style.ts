"use client";

import * as White from "@components/common/Button/White/White.style";
import { SKELETONCSS } from "@styles/global";
import styled, { css } from "styled-components";

export const DetailStyle = styled.main`
    padding: 108px 0 160px;
    @media screen and (max-width:820px) {
        padding: 39px 0 141px;
    }
`;


export const Title = styled.h1<{$skeleton : boolean}>`
    
    font-size: 24px;
    font-weight: ${({theme})=>theme.fontWeight.semibold};
    margin-top: 33px;
    line-height: normal;
    
    @media screen and (max-width:820px) {
        font-size: 18px;
        margin-top: 15px;
    }
    
    ${({$skeleton})=>$skeleton && css`
        height: 24px;
        ${SKELETONCSS}
    `}

`;


export const Desc = styled.div<{$isLoading : boolean}>`
    margin-top: 92px;
    min-height: 848px;
    width: 100%;
    padding: 36px 51px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: ${({theme})=>theme.fontWeight.medium};
    line-height: ${53/24};
    
    @media screen and (max-width:820px) {
        margin-top: 33px;
        padding: 11px 17px;
        font-size: 14px;
        min-height: 287px;
    }

    ${({$isLoading})=>{
        return $isLoading && css`${SKELETONCSS}`;
    }}

`;


export const BtnList = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;

    @media screen and (max-width:820px) {
        justify-content: flex-end;
        margin-top: 27px;
    }

`;

export const Btn = styled(White.Button)<{$type? : string}>`
    color: ${({theme,$type})=>{
        let type;
        switch($type){
            case "error":
                type = theme.color.OnError
                break;
            case "edit":
                type = theme.color.OnSurface
                break;
            default :
                type = theme.color.Primary
                break;
        }
        
        return type;
        
    }};
    border: 1px solid ${({theme,$type})=>{
        let type;
        switch($type){
            case "error":
                type = theme.color.Error
                break;
            case "edit":
                type = theme.color.Surface
                break;
            default :
                type = theme.color.Primary
                break;
        }
        return type;
    }};
    background: ${({theme,$type})=>{
        let type;
        switch($type){
            case "error":
                type = theme.color.Error
                break;
            case "edit":
                type = theme.color.Surface
                break;
            default :
                type = theme.color.OnPrimary
                break;
        }
        return type;
    }};
`;