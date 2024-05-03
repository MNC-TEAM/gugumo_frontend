import styled from "styled-components";

export const MainStyle = styled.main`
  padding: 80px 0 85px;
`;

export const Wrap = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SearchFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 44px;

  h4 {
    font-size: ${({theme})=>theme.fontSize.titleMedium};
    font-weight: ${({theme})=>theme.fontWeight.titleMedium};
    color: ${({theme})=>theme.color.OnBackground};
  }

`;

export const RecruitStyle = styled.div`
  display: flex;
  gap: 21px;
`;

export const RecruitButton = styled.button<{$active : boolean}>`
  all: unset;
  cursor: pointer;
  white-space: nowrap;
  font-size: ${({theme})=>theme.fontSize.titleMedium};
  font-weight: ${(props)=>{
    const {theme,$active} = props;
    if($active){
      return theme.fontWeight.titleSemibold;
    }else{
      return theme.fontWeight.titleMedium;
    }
  }};
  color: ${(props)=>{
    const {theme,$active} = props;

    if($active){
      return theme.color.OnBackground;
    }else{
      return theme.color.OnSurface;
    }

  }};
`;


export const Search = styled.form`
  width: 498px;
  height: 49px;
  position: relative;
  background: ${({theme})=>theme.color.Surface};
  border-radius: 1000px;
  display: block;

  input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 2em;
    border: 0;
    background: none;
    outline: 0;
    font-family: "Pretendard";
  }

  button {
    all: unset;
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

`;

export const Tag = styled.div`
  margin-top: 18px;
`;

export const SmallText = styled.p`
  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 600;
  color : ${({theme})=>theme.color.OnSurface};
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap ;
  gap: 10px;
  margin-top: 11px;
`;

export const Layout = styled.div`
  background : #F4F5F8;
  margin-top: 58px;
  padding: 40px 50px 50px;
  border-radius: 12px;

  @media screen and (max-width:820px) {
    border-radius: 0;
    padding: 0;
    background: none;
  }

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 31.98px;
  margin-top: 31px;

  @media screen and (max-width:1280px) {
    grid-template-columns: repeat(3,1fr);
  }

  @media screen and (max-width:1024px) {
    grid-template-columns: repeat(2,1fr);
  }

  @media screen and (max-width:820px) {
    grid-template-columns: repeat(1,1fr);
  }

`;

export const Order = styled.div`
  display: flex;
  justify-content: flex-end;
  div {
    align-items: center;
    display: inline-flex;
    gap: 4px;
    cursor: pointer;
  }
`;