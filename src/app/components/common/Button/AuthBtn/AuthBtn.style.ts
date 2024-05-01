import styled from "styled-components";
import { AuthBtnProps } from "./AuthBtn.stories";

export const Button = styled.button<AuthBtnProps>`
    font-size: var(--captionRegularSize);
    font-weight: var(--captionMediumWeight);
    border: 1px solid var(--Primary);
    padding: 7px 11px;
    border-radius: 6px;
    color: ${({active})=>{
        if(!active){
            return "var(--Primary)";
        }else{
            return "var(--OnPrimary)";
        }
    }};
    background: ${({active})=>{
        if(!active){
            return "var(--OnPrimary)";
        }else{
            return "var(--Primary)";
        }
    }};
    transition: .4s;
    transition-property: color,background;
    cursor: pointer;
    &:hover {
        color: var(--OnPrimary);
        background: var(--Primary);
    }
`;