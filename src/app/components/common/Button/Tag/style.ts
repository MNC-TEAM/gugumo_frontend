import styled from "styled-components";
interface ButtonStyleType{
  $active : boolean
}

export const ButtonStyle = styled.button<ButtonStyleType>`
  all: unset;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 8px 28px;
  border-radius: 100px;
  border: 1px solid #4FAAFF;
  white-space: nowrap;
  color: ${(props)=>{
    if(!props.$active) {
      return "var(--Primary)";
    }else{
      return "var(--OnPrimary)";
    }
  }};
  background: ${(props)=>{
    if(props.$active) {
      return 'var(--Primary)';
    }
  }};
  transition: .4s;
  transition-property: background,color;
  &:hover {
    background: #4FAAFF;
    color: #fff;
  }
`;