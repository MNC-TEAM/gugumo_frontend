import styled from "styled-components";

export const Link = styled.a`
    width: ${252/24}em;
    height: ${53/24}em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme})=>theme.color.Primary};
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
`;