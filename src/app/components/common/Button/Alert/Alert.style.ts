import styled from "styled-components";

export const Button = styled.button`
    font-size: ${({theme})=>theme.fontSize.buttonSemibold};
    font-weight: ${({theme})=>theme.fontWeight.semibold};
    color: ${({theme})=>theme.color.OnError};
    background: ${({theme})=>theme.color.Error};
    font-family: "Pretendard";
    padding: 6px 16px;
    border-radius: 4px;
    cursor: pointer;
`;