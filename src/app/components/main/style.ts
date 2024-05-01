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