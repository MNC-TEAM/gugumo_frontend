import Modal from "styled-react-modal";

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
    padding : 61px 62px 29px;
    box-sizing : border-box;
    border-radius : 12px;
    border : 0;
    text-align : center;
    background: #fff;

    @media screen and (max-width:820px) {
        max-width: 332px;
        padding : 61px 53px 29px;
    }

`;