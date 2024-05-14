import Link from "next/link";
import styled from "styled-components";

export const WriteStyle = styled(Link)<{$align : "left" | "center" | "right"}>`
  text-decoration: none;
  display: flex;
  align-items: center;
  color : #4FAAFF;
  font-size: ${({theme})=>theme.fontSize.buttonMedium};
  font-weight: ${({theme})=>theme.fontWeight.medium};
  border: 1px solid #4FAAFF;
  background: #FFFFFF;
  border-radius: 4px;
  width: ${127/18}em;
  height: ${52/18}em;
  justify-content: center;
  cursor: pointer;
  margin: ${(props)=>{
    const {$align} = props;
    if($align === "left"){
      return "0 auto 0 0";
    }
    if($align === "right"){
      return "0 0 0 auto";
    }
    if($align === "center"){
      return "0 auto 0";
    }
  }};
  img {
    margin-right: 4px;
  }

  @media screen and (max-width : 820px) {
    
    font-size: 14px;

  }
`;