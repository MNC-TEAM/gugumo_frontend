import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";

export const CloseStyle = styled.button`
  all: unset;
  position: absolute;
  right: 16px;
  top: 18px;
  cursor: pointer;
`;

export const Desktop = styled.img`
  vertical-align: top;
  @media screen and (max-width:820px) {
    display: none;
  }
`;

export const Mobile = styled.img`
  vertical-align: top;
  @media screen and (min-width:821px) {
    display: none;
  }
`;

export const StyledModal = Modal.styled`
  z-index: 100;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing : border-box;
  border : 0;
  text-align : center;
  box-shadow: 0px 0px 20px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const SpecialModalBackground = styled(BaseModalBackground)`
  background: none;
`