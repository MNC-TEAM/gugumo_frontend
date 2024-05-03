import Link from "next/link";
import styled from "styled-components";

export const WriteStyle = styled(Link)<{$align : "left" | "center" | "right"}>`
  text-decoration: none;
  display: flex;
  align-items: center;
  color : #4FAAFF;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #4FAAFF;
  background: #FFFFFF;
  border-radius: 4px;
  width: 127px;
  height: 52px;
  justify-content: center;
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
`;

export const WhiteButton = styled.button<{$align : "left" | "center" | "right"}>`
  text-decoration: none;
  display: flex;
  align-items: center;
  color : #4FAAFF;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #4FAAFF;
  background: #FFFFFF;
  border-radius: 4px;
  width: 127px;
  height: 52px;
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
`;