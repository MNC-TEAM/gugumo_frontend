import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  display: flex;
  align-items: center;
  color : ${({theme})=>theme.color.Primary};
  font-size: ${({theme})=>theme.fontSize.buttonMedium};
  font-weight: ${({theme})=>theme.fontWeight.medium};
  border: 1px solid #4FAAFF;
  background: ${({theme})=>theme.color.OnPrimary};
  border-radius: 4px;
  padding: ${9.5/16}em 1em;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width : 820px) {
    font-size: 14px;
  }
`;