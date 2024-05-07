import styled from "styled-components";

interface ButtonStyleType{
  $active : boolean
}

export const ButtonStyle = styled.button<ButtonStyleType>`
  all: unset;
  cursor: pointer;
  font-size: ${({theme})=>theme.fontSize.buttonMedium};
  font-weight: ${({theme})=>theme.fontWeight.medium};
  padding: ${8/16}em ${28/16}em;
  border-radius: 100px;
  border: 1px solid ${({theme})=>theme.color.Primary};
  white-space: nowrap;
  color: ${(props)=>{
    if(!props.$active) {
      return props.theme.color.Primary;
    }else{
      return props.theme.color.OnPrimary;
    }
  }};
  background: ${(props)=>{
    if(props.$active) {
      return props.theme.color.Primary;
    }
  }};
  transition: .4s;
  transition-property: background,color;
  &:hover {
    background: ${({theme})=>theme.color.Primary};
    color: #fff;
  }

  @media screen and (max-width:820px) {
    font-size: 14px;
  }

`;