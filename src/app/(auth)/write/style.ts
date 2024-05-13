import {Button as PrevStyle} from "@/app/components/common/Button/Prev/Prev.style";
import styled, { css } from "styled-components";

const InputCss = css`
    outline: none;
    border: 0;
    background: none;
    width: 100%;
    height: 100%;
    font-size: ${({theme})=>theme.fontSize.bodyMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    padding: 0 ${14/16}em;
    font-family: "Pretendard";
    color: ${({theme})=>theme.color.OnBackground};
    box-sizing: border-box;

    @media screen and (max-width:820px) {
        font-size: 14px;
    }

`;

export const WrtieStyle = styled.main`
    padding: 89px 0 144px;

    @media screen and (min-width:821px) {
        ${PrevStyle} {
            display: none;
        }
    }

    @media screen and (max-width:820px) {
        padding: 32.83px 0 59px;
    }

`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    p {
        display: flex;
        flex: 0 0 auto;
        width : 34px;
        height: 34px;
        border-radius: 1000px;
        background: ${({theme})=>theme.color.Primary};
        font-size: ${({theme})=>theme.fontSize.titleSemibold};
        font-weight: ${({theme})=>theme.fontWeight.semibold};
        color: #fff;
        align-items: center;
        justify-content: center;
    }

    h3 {
        font-size: ${({theme})=>theme.fontSize.titleMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
    }

    @media screen and (max-width:820px) {
        margin-top: 9.35px;
        gap: 8px;

        p {
            width: 23px;
            height: 23px;
            font-size: 18px;
        }

        h3 {
            font-size: 18px;
        }

    }

`;

export const Gird = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 30px;
    margin-top: 34px;

    @media screen and (max-width: 820px) {
        grid-template-columns: repeat(1,1fr);
        gap: 11px;
        margin-top: 22px;
    }

`;

export const InputStyle = styled.div`
    min-width: 0;
    > label,
    > p {
        font-size: ${({theme})=>theme.fontSize.buttonMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
        padding: 0 ${6/18}em;

        @media screen and (max-width:820px) {
            font-size: 14px;
        }

    }
`;

export const InputBox = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 64px;
    position: relative;
    background: ${({theme})=>theme.color.Surface};

    select,input {
       ${InputCss}
    }

    select {
        appearance: none;
        cursor: pointer;
    }

    svg,img {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
    }

    .react-calendar {
        position: absolute;
        top: 100%;
        z-index: 5;
    }

    @media screen and (max-width:820px) {
        height: 45.25px;
    }

`;


export const CalendarBox = styled.div`
    ${InputCss}
    display: flex;
    align-items: center;
`;

export const DescBox = styled.div`
    margin-top: 87px;
    > div:nth-of-type(1) {
        margin-bottom: 34px;
    }

    @media screen and (max-width:820px) {
        margin-top: 58px;
    }

`;

export const DescInputStyle = styled.div`

    &:nth-of-type(3) {
        margin-top: 30px;
    }

    label {
        font-size: 18px;
        font-weight: 500;
        padding: 0 ${6/18}em;
    }

    input,textarea {
        outline: none;
        border: 0;
        padding: 0;
        display: block;
        width: 100%;
        background: ${({theme})=>theme.color.Surface};
        border-radius: 8px;
        margin-top: 12px;
        font-family: "Pretendard";
        font-size: ${({theme})=>theme.fontSize.bodyMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
        box-sizing: border-box;
    }

    input {
        height: 57px;
        padding: 0 ${14/16}em;
    }

    textarea {
        height: 485px;
        padding: ${14/16}em;
        resize: none;
    }

    @media screen and (max-width:820px) {
        label {
            font-size: 14px;
        }

        input,textarea {
            font-size: 14px;
        }

        input {
            height: 45.25px;
        }

        textarea {
            height: 194px;
        }

    }

`;

export const Button = styled.button`
    all: unset;
    font-size: ${({theme})=>theme.fontSize.buttonSemibold};
    font-weight: ${({theme})=>theme.fontWeight.semibold};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 53px auto 0;
    width: ${95/18}em;
    height: ${49/18}em;
    border-radius: ${4/18}em;
    color: ${({theme})=>theme.color.Primary};
    border: 1px solid ${({theme})=>theme.color.Primary};
    cursor: pointer;
    transition: .4s;
    transition-property: color,background;

    &:hover {
        background: ${({theme})=>theme.color.Primary};
        color: #fff;
    }
`;


// 모임 요일
export const DaysGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-width: 0;
    margin-top: 10px;
    gap: 10px;
    justify-content: flex-start;
`;
export const DaysCheckbox = styled.div<{$active : boolean}>`
    
    flex: none;
    width: calc(70/16*1em);
    height: calc(59/16*1em);
    border-radius: calc(8/16*1em);
    font-size: ${({theme})=>theme.fontSize.buttonMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    color : ${({theme,$active})=>{
        if($active){
            return theme.color.OnPrimary;
        }else{
            return theme.color.OnSurface;
        }
    }};
    background : ${({theme,$active})=>{
        if($active){
            return theme.color.Primary;
        }else{
            return theme.color.Surface;
        }
    }};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transition: all.4s;
    transition-property: color,background;

    &:hover {
        color : ${({theme})=>theme.color.OnPrimary};
        background : ${({theme})=>theme.color.Primary};
    }


    @media screen and (max-width:820px) {
        font-size: 14px;
    }

`;