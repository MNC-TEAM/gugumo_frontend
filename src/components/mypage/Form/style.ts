import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
`;

export const Form = styled.form`
    
    margin-top: 62px;

    & + & {
        margin-top: 42px;
    }

    @media screen and (max-width : 820px) {

        margin-top: 43px;

        & + & {
            margin-top: 26px;
        }

    }

`;

export const Layout = styled.div`
    
    display: flex;
    align-items: center;
    gap: 41px;
    border-radius: 4px;
    background: ${({theme})=>theme.color.Surface};
    padding: 59px ${53/1200*100}%;

    h4 {
        font-size: ${({theme})=>theme.fontSize.buttonSemibold};
        font-weight: ${({theme})=>theme.fontWeight.semibold};
        white-space: nowrap;
    }

    @media screen and (max-width : 1024px) {
        padding: 59px 5% 59px;
    }

    @media screen and (max-width : 820px) {
        
        display: block;
        background: none;
        padding: 0;

    }

`;

export const Label = styled.label`
    font-size: ${({theme})=>theme.fontSize.buttonMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    color: #000;

    @media screen and (max-width:820px) {
        font-size : 14px;
    }

`;

export const InputLayout = styled.div`
    min-width: 0;
    flex: 1;

    ${Flex}{
        display: flex;
        gap: 18px;
    }

    > div{
        margin-top: 12px;
        max-width: 630px;
    }


    @media screen and (max-width:820px) {

        margin-top : 24px;
        ${Flex} {
            gap: 10px;
        }
        > div {
            max-width: none;
        }
    }

`;

export const InputFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 42px;
    flex: 1;

    /* > div {
        input {
            width: 630px;
        }
    } */

    @media screen and (max-width:820px) {
        gap: 22px;

        ${InputLayout} {
            margin: 0;
            &:nth-of-type(1) {
                margin-top: 26px; 
            }
        }

    }

`;

export const Btn = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    @media screen and (max-width:820px) {
        justify-content: center;
    }

`;