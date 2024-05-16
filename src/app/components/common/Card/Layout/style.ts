import styled from "styled-components";

interface TagProps {
  color? : "recruit" | "ball" | "region",
  $status? : string
}

export const CardStyle = styled.div`
  padding: 19px 16px;
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 8px;
  cursor: pointer;

  @media screen and (max-width:820px) {
    background: ${({theme})=>theme.color.Surface};
  }

`;

export const Title = styled.h4`
  font-weight: ${({theme})=>theme.fontWeight.medium};
  font-size: ${({theme})=>theme.fontSize.bodyMedium};
  line-height: ${21/16};
  margin-top: 11px;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  height: calc(41/16*1em);
`;

export const Flex = styled.div`
  display: flex;
  gap: 5px;
`;

export const Tag = styled.div<TagProps>`
  background: ${({theme,color,$status})=>{
    switch(color){
      case "ball":
        return "#D2FFAE";
      case "recruit":
        if($status === "END"){
          return theme.color.OnSurface;
        }else{
          return "#BFE0FF";
        }
      case "region":
        return "#FDC9AF";
      default :
        return "#BFE0FF"
    }
  }};
  color: ${({theme,color,$status})=>{
    switch(color){
      case "ball" :
        return "#54A900";
      case "recruit" :
        if($status === "END"){
          return theme.color.OnSurface;
        }else{
          return "#4378FF";
        }
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
  margin-top: 32px;
  font-size: ${({theme})=>theme.fontSize.captionRegular};
  li {
    display: flex;
    color: ${({theme})=>theme.color.OnBackgroundGray};
    + li {
      margin-top: 4px;
    }
    p {
      padding-right: 9px;
      + p {
        border-left: 1px solid ${({theme})=>theme.color.OnBackgroundGray};
        padding-left: 9px;
        padding-right: 0;
      }
    }
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 9.5px;
  margin-top: 9.5px;
  border-top: 1px solid #D9D9D9;
  gap: 7px;
  span {
    white-space: nowrap;
    font-size: ${({theme})=>theme.fontSize.captionMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    color: ${({theme})=>theme.color.OnBackgroundGray};
  }
  button {
    all: unset;
  }
`;