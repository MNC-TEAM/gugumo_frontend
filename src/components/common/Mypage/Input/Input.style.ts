import styled from "styled-components";

export const Box = styled.div`
    padding: 0;
    height: 56px;
    background: ${({theme})=>theme.color.Background};
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    width: 100%;
    input {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border: 0;
        font-family: "Pretendard";
        font-size: ${({theme})=>theme.fontSize.bodyMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
        padding: 0 ${26/16}em;
        outline: 0;
        background: none;

        &::placeholder {
            color: ${({theme})=>theme.color.OnSurface};
        }

    }

    @media screen and (max-width:820px) {
        height: 50px;
        background: ${({theme})=>theme.color.Surface};

        input {
            font-size: 14px;
        }

    }

`;

export const Error = styled.p`
    margin-top: 1em;
    font-size: 14px;
    color: ${({theme})=>theme.color.Error};
`;