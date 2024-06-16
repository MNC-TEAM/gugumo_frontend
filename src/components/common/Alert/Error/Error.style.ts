import styled from "styled-components";

export const BackModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: rgba(000,000,000,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Modal = styled.div`
    border: 1px solid ${({theme})=>theme.color.Error};
    background: ${({theme})=>theme.color.Background};
    width: auto;
    min-height: 176px;
    border-radius: 8px;
    padding: 18px 25px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 29px;

    transform: translate(0%, 25%);
    opacity: 0;
    transition: .4s;
    transition-property: opacity,transform;

    &.active {
        opacity: 1;
        transform: translate(0%, 0%);
    }

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

export const Button = styled.button`
    background: ${({theme})=>theme.color.Error};
    color: ${({theme})=>theme.color.OnError};
    font-size: ${({theme})=>theme.fontSize.buttonSemibold};
    font-weight: ${({theme})=>theme.fontWeight.semibold};
    padding: ${6/16}em 1em;
    border-radius: ${4/16}em;
    cursor: pointer;
`;