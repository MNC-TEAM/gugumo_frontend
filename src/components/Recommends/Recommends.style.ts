import styled from "styled-components";

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
    > button {
      width: 39px;
      height: 39px;
      border-radius: 1000px;
      border: 1px solid ${({theme})=>theme.color.Primary};
      flex: 0 0 auto;
      cursor: pointer;
      color: ${({theme})=>theme.color.Primary};
      font-size: 21px;
      position: relative;
      svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }
  }

  @media screen and (max-width:820px) {
    
    margin-top: 33px;

    h3 {
      font-size: 18px;
    }

    .flex {
      margin-top: 22px;
      > button {
        display: none;
      }
    }

  }
  
`;