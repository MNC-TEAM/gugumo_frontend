import styled from "styled-components";

export const Modal = styled.div`
    border: 1px solid ${({theme})=>theme.color.Primary};
    background: ${({theme})=>theme.color.Background};
    width: 239px;
    min-height: 176px;
    border-radius: 8px;
    padding: 18px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 29px;
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    font-size: ${({theme})=>theme.fontSize.bodyMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};

    h4 {
        text-align: center;
    }

`;

export const ButtonDiv = styled.div`
    display: flex;
    gap: 7px;
`;

export const Button = styled.button<{$close? : boolean}>`
    background: ${({theme,$close})=>{
        if($close){
            return theme.color.OnPrimary;
        }else{
            return theme.color.Primary;
        }
    }};
    color: ${({theme,$close})=>{
        if($close){
            return theme.color.Primary;
        }else{
            return theme.color.OnPrimary;
        }
    }};
    border: 1px solid ${({theme,$close})=>{
        if($close){
            return theme.color.Primary;
        }else{
            return theme.color.OnPrimary;
        }
    }};
    font-size: ${({theme})=>theme.fontSize.buttonSemibold};
    font-weight: ${({theme})=>theme.fontWeight.semibold};
    padding: ${6/16}em 1em;
    border-radius: ${4/16}em;
    cursor: pointer;
`;