import styled from "styled-components";

export const CardStyle = styled.div`
  padding: 23px;
  background: #FFFFFF;
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


export const Detail = styled.ul`
  margin-top: 35px;
  li {
    display: flex;
    color: #878787;
    + li {
      margin-top: 5px;
    }
    p {
      padding-right: 10px;
      + p {
        border-left: 1px solid #878787;
        padding-left: 10px;
        padding-right: 0;
      }
    }
  }
`;


export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid #D9D9D9;
  gap: 10px;
  span {
    white-space: nowrap;
    font-size: 13px;
    font-weight: 500;
    color: #878787;
  }

  button {
    all: unset;
  }

`;