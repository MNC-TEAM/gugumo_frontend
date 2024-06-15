import Image from "next/image";
import styled from "styled-components";

export const DesktopIMG = styled(Image)`
  @media screen and (max-width:820px) {
    display: none;
  }
`;

export const MobileIMG = styled(Image)`
  @media screen and (min-width:821px) {
    display: none;
  }
`;
export const BannerImg = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;