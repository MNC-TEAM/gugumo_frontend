import Link from "next/link";
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
`;


export const SignButton = styled(Link)`
    display: inline-block;
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