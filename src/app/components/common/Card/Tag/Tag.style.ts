import styled from "styled-components";
import { TagProps } from "./Tag.stories";

export const TagStyle = styled.div<TagProps>`
  background: ${({color})=>{
    switch(color){
        case "recruit":
            return "var(--SubColor1)";
        case "recruitEnd":
            return "var(--OnSurface)";
        case "ball":
            return "var(--SubColor2)";
        case "region":
            return "var(--SubColor3)";
    }
  }};
  color: ${({color})=>{
    switch(color){
        case "recruit" :
            return "var(--OnSubcolor1)";
        case "recruitEnd":
            return "var(--Background)";
        case "ball" :
            return "var(--OnSubcolor2)";
        case "region" :
            return "var(--OnSubcolor3)";
    }
  }};
  padding: 4px 6px;
  white-space: nowrap;
  border-radius: 4px;
  font-size: var(--captionMedium);
`;