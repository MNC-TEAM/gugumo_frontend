import Link from "next/link";
import styled from "styled-components";

export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    padding: ${7/16}em 1em;
    font-size: ${({theme})=>theme.fontSize.buttonSemibold};
    font-weight: ${({theme})=>theme.fontWeight.semibold};
    color: ${({theme})=>theme.color.Primary};
    background: ${({theme})=>theme.color.OnPrimary};
    border: 1px solid ${({theme})=>theme.color.Primary};
    border-radius: 4px;
    gap: 4px;
    cursor: pointer;
    text-decoration: none;
    transition: .4s;
    transition-property: color,background;

    svg {
        transition: filter .4s;
    }

    @media screen and (max-width:820px) {
        font-size: 14px;
    }

    &:hover {
        color: ${({theme})=>theme.color.OnPrimary};
        background: ${({theme})=>theme.color.Primary};
        svg {
            filter: brightness(0) invert(1);
        }
    }

`;