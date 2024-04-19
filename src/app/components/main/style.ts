import styled from "styled-components";

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