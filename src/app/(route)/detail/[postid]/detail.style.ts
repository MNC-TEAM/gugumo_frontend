"use client";

import * as White from "@components/common/Button/White/White.style";
import styled from "styled-components";

export const DetailStyle = styled.main`
    padding: 108px 0 160px;
    @media screen and (max-width:820px) {
        padding: 39px 0 141px;
    }
`;


export const Title = styled.h1`
    font-size: 24px;
    font-weight: ${({theme})=>theme.fontWeight.semibold};
    margin-top: 33px;
    @media screen and (max-width:820px) {
        font-size: 18px;
        margin-top: 15px;
    }
`;

export const Top = styled.div`
    display: flex;
    align-items: center;
    margin-top: 28px;
    padding-bottom: 21px;
    font-size: 18px;
    font-weight: ${({theme})=>theme.fontWeight.medium};
    color: ${({theme})=>theme.color.OnBackgroundGray};
    border-bottom: 1px solid ${({theme})=>theme.color.Outline};
    justify-content: space-between;    
    @media screen and (max-width:820px) {
        font-size: 14px;
        margin-top: 9px;
    }
`;

export const TopFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    @media screen and (max-width:820px) {
        gap: 10.77px;
    }
`;

export const View = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    img {
        width: 18px;
    }
`;

export const BookFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${({theme})=>theme.color.Primary};
    p {
        font-size: 22px;
        font-weight: ${({theme})=>theme.fontWeight.medium};
    }
    @media screen and (max-width:820px) {
        p {
            font-size: 14px;
        }
    }
`;


export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    margin-top: 34px;
    gap: 20px;

    @media screen and (max-width: 820px) {
        margin-top: 17px;
        gap: 16px 0;
    }
    @media screen and (max-width: 550px) {
        grid-template-columns: repeat(1,1fr);
    }

`;

export const Col = styled.div<{$open? : boolean}>`
    display: grid;
    align-items: center;
    color: ${({theme})=>theme.color.OnSurface};
    font-size: 18px;
    font-weight: ${({theme})=>theme.fontWeight.medium};
    grid-template-columns: ${({$open})=>{
        if($open){
            return "136px 1fr";
        }else{
            return "102px 1fr";
        }
    }};
    gap: 12px;
    h4 {
        padding: ${12/24}em ${22/24}em;
        background: ${({theme})=>theme.color.Surface};
        text-align: center;
        box-sizing: border-box;
        white-space: nowrap;
        width: 100%;
        height: 41px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }
    a {
        width: 158px;
        height: 41px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({theme})=>theme.color.Primary};
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
    }
    @media screen and (max-width: 820px) {
        
        font-size: 14px;

        grid-template-columns: ${({$open})=>{
            if($open){
                return "104px 1fr";
            }else{
                return "82px 1fr";
            }
        }};

        a {
            width: 9em;
        }

    }
`;


export const Desc = styled.div`
    margin-top: 92px;
    min-height: 878px;
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
        min-height: 317px;
    }

`;


export const BtnList = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

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