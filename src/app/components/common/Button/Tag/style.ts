import styled, { css } from "styled-components";

interface ButtonStyleType{
  onHover? : boolean
}

export const ButtonStyle = styled.button<ButtonStyleType>`
  all: unset;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 8px 28px;
  border-radius: 100px;
  border: 1px solid var(--Primary);
  white-space: nowrap;
  color: ${({onHover})=>{
    if(!onHover) {
      return "var(--Primary)";
    }else{
      return "var(--OnPrimary)";
    }
  }};
  background: ${({onHover})=>{
    if(onHover) {
      return 'var(--Primary)';
    }
  }};
  transition: .4s;
  transition-property: background,color;
  &:hover {
    background: var(--Primary);
    color: #fff;
  }
`;