import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    font-size: ${({theme})=>theme.fontSize.buttonMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    color: ${({theme})=>theme.color.OnPrimary};
    background: ${({theme})=>theme.color.Primary};
    width: ${109/16}em;
    height: ${56/16}em;;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${8/16}em;
`;