import styled from "styled-components";

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
export const BannerImg = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;