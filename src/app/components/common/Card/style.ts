import styled from "styled-components";

export const CardStyle = styled.div`
  padding: 23px;
  background: #F6F6F6;
  border: 1px solid #D9D9D9;
  border-radius: 6px;
  cursor: pointer;

  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: ${21/16};
    margin-top: 14px;
  }

`;

export const Flex = styled.div`
  display: flex;
  gap: 5px;
`;

interface TagProps {
  color? : "recruit" | "ball" | "region"
}

export const Tag = styled.div<TagProps>`
  background: ${({color})=>{
    switch(color){
      case "ball":
        return "#D2FFAE";
      case "recruit":
        return "#BFE0FF";
      case "region":
        return "#FDC9AF";
      default :
        return "#BFE0FF"
    }
  }};
  color: ${({color})=>{
    switch(color){
      case "ball" :
        return "#54A900";
      case "recruit" :
        return "#4378FF";
      case "region" :
        return "#FF6414";
      default :
        return "#4378FF";
    }
  }};
  padding: 4px 6px;
  white-space: nowrap;
  border-radius: 4px;
  font-size: 13px;
`;