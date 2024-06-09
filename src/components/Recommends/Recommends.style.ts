import styled from "styled-components";
import { css } from "styled-components";

export const RecommendLayout = styled.div`

  margin-top: 65px;

  h3 {
    font-size: 24px;
    font-weight: bold;
    color: ${({theme})=>theme.color.Primary};
  }

  .flex {
    margin-top: 43px;
    display: flex;
    align-items: center;
    gap: 43px;
  }

  @media screen and (max-width:1280px) {
    
    .flex {
      gap: 23px;
    }

  }

  @media screen and (max-width:820px) {
    
    margin-top: 33px;

    h3 {
      font-size: 18px;
    }

    .flex {
      margin-top: 22px;
    }

  }
  
`;


export const Button = styled.button<{$type? : "next"}>`
  width: 39px;
  height: 39px;
  border-radius: 1000px;
  flex: 0 0 auto;
  border: 1px solid ${({theme})=>theme.color.Primary};
  flex: 0 0 auto;
  cursor: pointer;
  color: ${({theme})=>theme.color.Primary};
  font-size: 21px;
  position: relative;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    ${({$type})=>{
      if($type === "next"){
        return css`transform: translate(-50%,-50%) scaleX(-1);`;
      }
    }}
  }

  @media screen and (max-width:1280px) {
    width : 32px;
    height : 32px;
    img {
      width : 60%;
    }
  }

  @media screen and (max-width:820px) {
    display: none;
  }

`;