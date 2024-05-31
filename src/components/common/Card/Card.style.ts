import styled from "styled-components";

export const TopFlex = styled.div`
    display: flex;
    gap: 5px;
`;

export const Title = styled.h4`
  font-weight: ${({theme})=>theme.fontWeight.medium};
  font-size: ${({theme})=>theme.fontSize.bodyMedium};
  line-height: ${21/16};
  margin-top: 11px;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  height: calc(41/16*1em);
  transition: color .4s;
`;

export const Detail = styled.ul`
  margin-top: 32px;
  font-size: ${({theme})=>theme.fontSize.captionRegular};
  li {
    display: flex;
    color: ${({theme})=>theme.color.OnBackgroundGray};
    + li {
      margin-top: 4px;
    }
    p {
      padding-right: 9px;
      + p {
        border-left: 1px solid ${({theme})=>theme.color.OnBackgroundGray};
        padding-left: 9px;
        padding-right: 0;
      }
    }
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 9.5px;
  margin-top: 9.5px;
  border-top: 1px solid #D9D9D9;
  gap: 7px;
  span {
    white-space: nowrap;
    font-size: ${({theme})=>theme.fontSize.captionMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    color: ${({theme})=>theme.color.OnBackgroundGray};
  }
`;