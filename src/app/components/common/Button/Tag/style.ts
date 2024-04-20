import styled from "styled-components";

export const ButtonStyle = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 8px 28px;
  border-radius: 100px;
  border: 1px solid #4FAAFF;
  white-space: nowrap;
  color: #4FAAFF;
  transition: .4s;
  transition-property: background,color;
  &:hover {
    background: #4FAAFF;
    color: #fff;
  }
`;