import styled from "styled-components";

export const Link = styled.a`
    width: ${252/24}em;
    height: ${53/24}em;
    font-size: ${({theme})=>theme.fontSize.titleMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    background: ${({theme})=>theme.color.Primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
    gap: 2px;

    @media screen and (max-width:820px) {
        font-size: 12px;
    }

`;