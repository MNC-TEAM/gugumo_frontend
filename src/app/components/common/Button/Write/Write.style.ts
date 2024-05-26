import Link from "next/link";
import styled from "styled-components";

export const Button = styled(Link)`
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

    @media screen and (max-width:820px) {
        font-size: 14px;
    }

`;