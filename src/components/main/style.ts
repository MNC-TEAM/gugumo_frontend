import styled from "styled-components";
import * as G from "@styles/global";

export const Wrap = styled(G.Wrap)`

  & + & {
    margin-top: 100px;
  }

  @media screen and (max-width:820px){
    & + & {
      padding-top: 32px;
      margin-top: 32px;
      border-top: 6px solid ${({theme})=>theme.color.Surface};
    }
  }
  
`;
export const DesktopIMG = styled.img`
  @media screen and (max-width:820px) {
    display: none;
  }
`;
export const MobileIMG = styled.img`
  @media screen and (min-width:821px) {
    display: none;
  }
`;

export const MainStyle = styled.main`
  padding: 50px 0 170px;
  @media screen and (max-width:820px) {
    padding: 23px 0 121px;
  }
`;

export const BannerImg = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;

export const SearchFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media screen and (max-width:820px) {
    
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;

  }

`;

export const RecruitStyle = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (max-width:820px) {
    gap: 21px;
  }

`;

export const RecruitButton = styled.button<{$active : boolean}>`
  all: unset;
  cursor: pointer;
  white-space: nowrap;
  font-size: 24px;
  font-weight: ${(props)=>{
    const {theme,$active} = props;
    if($active){
      return theme.fontWeight.semibold;
    }else{
      return theme.fontWeight.medium;
    }
  }};
  color: ${(props)=>{
    const {theme,$active} = props;
    if($active){
      return theme.color.Primary;
    }else{
      return theme.color.OnSurface;
    }
  }};

  @media screen and (max-width:820px) {
    font-size: 18px;
  }

`;

export const Search = styled.form`
  width: 492px;
  height: 43px;
  position: relative;
  background: ${({theme})=>theme.color.Surface};
  border-radius: 8px;
  display: block;

  input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 ${14/19}em;
    border: 0;
    background: none;
    outline: 0;
    font-family: "Pretendard";
    font-size: ${({theme})=>theme.fontSize.buttonMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
  }

  button {
    all: unset;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (max-width:820px) {
    width: 100%;
    order: -1;
    height: 34px;

    input {
      font-size: 13px;
    }

    button {
      width: 20px;
    }

  }

`;

export const Tag = styled.div`
  margin-top: 36px;
  & + & {margin-top: 18px;}

  @media screen and (max-width:820px) {
    margin-top: 25px;
    & + & {margin-top: 15px;}
  }
`;

export const SmallText = styled.p`
  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 600;
  color : ${({theme})=>theme.color.OnSurface};
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 11px;

  @media screen and (max-width : 820px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 4px;
  }

`;

export const Layout = styled.div`
  background : #F4F5F8;
  margin-top: 53px;
  padding: 39px 70px 49px;
  border-radius: 12px;

  @media screen and (max-width:820px) {
    border-radius: 0;
    padding: 0;
    background: none;
    margin-top: 38px;
  }

`;

export const Order = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  font-size: 13px;
  
  div {
    display: inline-block;
    position: relative;
    p {
      display: flex;
      align-items: center;
      gap: 5.5px;
      cursor: pointer;
      svg {
        font-size: 14px;
        color: ${({theme})=>theme.color.OnSurface};
      }
    }
  }

  ul {
    position: absolute;
    top: 100%;
    background: ${({theme})=>theme.color.Background};
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    text-align: center;
    padding: 20px 15px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid ${({theme})=>theme.color.Surface};

    li {
      cursor: pointer;
      + li {
        margin-top: 0.7em;
      }
    }

  }

  @media screen and (max-width:820px) {
    
    div {
      p {
        color: ${({theme})=>theme.color.OnSurface};
      }
    }

  }

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 30px;
  margin-top: 28px;

  @media screen and (max-width:1280px) {
    grid-template-columns: repeat(3,1fr);
  }

  @media screen and (max-width:1024px) {
    grid-template-columns: repeat(2,1fr);
  }

  @media screen and (max-width:820px) {
    grid-template-columns: repeat(1,1fr);
    gap: 13px;
    margin-top: 10px;
  }

`;

export const White = styled.div`
  margin-top: 28px;
  text-align: right;
  @media screen and (max-width:820px) {
    margin-top: 13px;
  }
`;

export const Paging = styled.div`
  margin-top: 42px;
  @media screen and (max-width:820px) {
    margin-top: 50px;
  }
`;