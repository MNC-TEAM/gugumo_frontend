import styled from "styled-components";

export const Div = styled.div<{$active : boolean}>`
    
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