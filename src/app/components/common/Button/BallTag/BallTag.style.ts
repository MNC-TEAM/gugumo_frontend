import styled from "styled-components";

export const Button = styled.button<{$active : boolean}>`
    width: 77px;
    border : 1px solid var(--Primary);
    box-sizing: border-box;
    border-radius: 1000px;
    position: relative;
    cursor: pointer;

    background: ${({theme,$active})=>{
        if($active){
            return theme.color.Primary;
        }
    }};

    &::after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }

    > div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
        color: ${({theme,$active})=>{
            if($active){
                return theme.color.OnPrimary;
            }else{
                return theme.color.Primary;
            }
        }};
        font-size: 14px;
        font-weight: var(--buttonMediumWeight);
    }

`;

export const Imgbox = styled.div`
    width: 35px;
    height: 35px;
    text-align: center;
`;