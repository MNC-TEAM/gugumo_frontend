import styled from "styled-components";

export const Logo = styled.div`
    margin-bottom: 41px;
    @media screen and (max-width:820px) {
        width: 81px;
        margin: 0 auto 20px;
    }
`;

export const BackModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    z-index: 9999;
`;

export const StyledModal = styled.div`
    z-index: 100;
    width : 90%;
    max-width: 422px;
    position: fixed;
    height : max-content;
    overflow : visible;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background : #fff;
    padding : 35px 62px 33px;
    box-sizing : border-box;
    border-radius : 12px;
    border : 0;
    text-align : center;
    background: #fff;
    animation: modal .4s forwards;

    @keyframes modal {
        0% {
            transform: translate(-50%, -50%) scale(0);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @media screen and (max-width:820px) {
        max-width: 302px;
        padding : 35px 44px 33px;
    }

`;