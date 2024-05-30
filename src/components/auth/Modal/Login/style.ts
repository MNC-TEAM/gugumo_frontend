import styled from "styled-components";
import Modal from "styled-react-modal";

export const Logo = styled.div`
    
    margin-bottom: 41px;

    @media screen and (max-width:820px) {
        width: 81px;
        margin: 0 auto 20px;
    }

`;

export const StyledModal = Modal.styled`
    z-index: 100;
    width : 90%;
    max-width: 422px;
    position: absolute;
    height : max-content;
    overflow : visible;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background : #fff;
    padding : 35px 62px 33px;
    box-sizing : border-box;
    border-radius : 12px;
    border : 0;
    text-align : center;
    background: #fff;

    @media screen and (max-width:820px) {
        max-width: 302px;
        padding : 35px 44px 33px;
    }

`;

/* export const modalStyle: ReactModal.Styles = {
    overlay: { // 바깥
      backgroundColor: " rgba(0, 0, 0, 0.38)",
      width: "100%",
      height: "100%",
      zIndex: "50",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: { // 안쪽
      zIndex: "100",
      width : "90%",
      maxWidth: "422px",
      position: "absolute",
      height : "max-content",
      overflow : "visible",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background : "#fff",
      padding : "35px 62px 33px",
      boxSizing : "border-box",
      borderRadius : 12,
      border : 0,
      textAlign : "center",
    }
}; */