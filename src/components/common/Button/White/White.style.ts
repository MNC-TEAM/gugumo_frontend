import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color : ${({theme})=>theme.color.Primary};
  background: ${({theme})=>theme.color.OnPrimary};
  font-size: ${({theme})=>theme.fontSize.buttonMedium};
  font-weight: ${({theme})=>theme.fontWeight.medium};
  border: 1px solid #4FAAFF;
  border-radius: 4px;
  padding: ${9.5/16}em 1em;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width : 820px) {
    font-size: 14px;
  }

  transition: all .4s;
  transition-property: color,background;

  &:hover {
    color : ${({theme})=>theme.color.OnPrimary};
    background: ${({theme})=>theme.color.Primary};
  }

`;