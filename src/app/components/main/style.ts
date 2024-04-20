import Link from "next/link";
import styled from "styled-components";

export const SearchFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RecruitStyle = styled.div`
  display: flex;
  gap: 20px;
  flex: 0.6;
  button {
    all: unset;
    cursor: pointer;
    white-space: nowrap;
    font-size: 28px;
    font-weight: 500;
    color: #A4A4A4;

    &.active {
      color: #000;
      font-weight: 600;
    }

  }
`;

export const Search = styled.form`
  flex: 1;
  height: 49px;
  position: relative;
  background: #F4F5F8;
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
  color : #A4A4A4;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap ;
  gap: 10px;
  margin-top: 11px;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 8px 28px;
  border-radius: 100px;
  border: 1px solid #4FAAFF;
  white-space: nowrap;
  color: #4FAAFF;
  transition: .4s;
  transition-property: background,color;
  &:hover {
    background: #4FAAFF;
    color: #fff;
  }
`;


export const Wrap = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
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
  img {
    margin-right: 4px;
  }
`;