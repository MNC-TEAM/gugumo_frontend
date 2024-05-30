import styled from "styled-components";

interface TagProps {
  color? : "recruit" | "ball" | "region",
  $status : string
}

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
          return theme.color.Background;
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