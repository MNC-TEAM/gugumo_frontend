import styled from "styled-components";

export const CloseStyle = styled.button`
    all: unset;
    position: absolute;
    right: 16px;
    top: 18px;
    cursor: pointer;
`;

export const TitleStyle = styled.h5`

    font-family: "Pretendard";
    color: #4FAAFF;
    font-weight: 600;
    font-size: 18px;
    
`;

export const Form = styled.form`
    button {
        margin-top: 25px;
    }
`;

export const InputBox = styled.div`

    margin-top: 23px;

    > div + div {
        margin-top: 7px;
    }

    /* input {
        outline: 0;
        border: 0;
        width: 100%;
        height: 45px;
        border-radius: 8px;
        padding: 0 ${14/16*1}em;
        box-sizing: border-box;
        border: 1px solid ${({theme})=>theme.color.Outline};
        font-family: "Pretendard";
        font-size: ${({theme})=>theme.fontSize.bodyMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};

        &::placeholder {
            color: ${({theme})=>theme.color.OnBackgroundGray};
        }

        + input {
            margin-top: 7px;
        }

    } 

    @media screen and (max-width:820px) {
        input {
            height: 36px;
            font-size: 14px;
        }
    }

    */

`;


export const SignButton = styled.button`
    all: unset;
    color: ${({theme})=>theme.color.Primary};
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 13px;
    margin-top: ${38/13*1}em;
    cursor: pointer;

    @media screen and (max-width : 820px) {
        margin-top: 10px;
    }

`;