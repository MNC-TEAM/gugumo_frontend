import styled, { css } from "styled-components";

export const InputCss = css`
    outline: none;
    border: 0;
    background: none;
    width: 100%;
    height: 100%;
    font-size: ${({theme})=>theme.fontSize.buttonMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    padding: 0 ${14/16}em;
    font-family: "Pretendard";
    color: ${({theme})=>theme.color.OnBackground};
    box-sizing: border-box;

    @media screen and (max-width:820px) {
        font-size: 14px;
    }

`;

export const Box = styled.div`
    width: 100%;
    height: 64px;
    border-radius: 8px;
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
        right: 16px;
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