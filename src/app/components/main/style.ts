import Link from "next/link";
import styled from "styled-components";

export const MainStyle = styled.main`
  padding: 32px 0 85px;
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

  h4 {
    font-size: ${({theme})=>theme.fontSize.titleMedium};
    font-weight: ${({theme})=>theme.fontWeight.titleMedium};
    color: ${({theme})=>theme.color.OnBackground};
  }

`;

export const RecruitStyle = styled.div`
  display: flex;
  gap: 21px;
  button {
    all: unset;
    cursor: pointer;
    white-space: nowrap;
    font-size: ${({theme})=>theme.fontSize.titleMedium};
    font-weight: ${({theme})=>theme.fontWeight.titleMedium};
    color: ${({theme})=>theme.color.OnSurface};

    &.active {
      color: ${({theme})=>theme.color.OnBackground};
      font-weight: 600;
    }

  }
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
  margin-top: 16px;
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

export const Button = styled.button<{active : boolean}>` // 나중에 리팩토링
  all: unset;
  cursor: pointer;
  font-size: ${({theme})=>theme.fontSize.buttonMedium};
  font-weight: ${({theme})=>theme.fontWeight.buttonMedium};
  padding: ${8/18}em ${28/18}em;
  border-radius: 100px;
  border: 1px solid ${({theme})=>theme.color.Primary};
  white-space: nowrap;
  color: ${({active,theme})=>{
    if(active){
      return "#fff"
    }else{
      return theme.color.Primary
    }
  }};
  background : ${({active,theme})=>{
    if(active){
      return theme.color.Primary;
    }else{
      return "#fff";
    }
  }};
  transition: .4s;
  transition-property: background,color;
  &:hover {
    background: ${({theme})=>theme.color.Primary};
    color: #fff;
  }
`;

export const Layout = styled.div`
  background : #F4F5F8;
  margin-top: 58px;
  padding: 40px 50px 50px;
  border-radius: 12px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 31.98px;
  margin-top: 31px;
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


// margin-bottom 페이징 마다 가져올수 있게 수정해야함
export const WriteLink = styled(Link)`
  color: inherit;
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
  margin-left: auto;
  margin-top: 24px;
  margin-bottom: 28px;
  img {
    margin-right: 4px;
  }
`;