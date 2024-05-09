import styled from "styled-components";
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


export const InputStyle = styled.div`
    & + & {
        margin-top: 15px;
    }
    input {
        outline: 0;
        border: 0;
        width: 100%;
        height: 45px;
        border-radius: 8px;
        padding: 0 ${14/16*1}em;
        box-sizing: border-box;
        border: 1px solid ${({theme})=>theme.color.Outline};
        font-family: "Pretendard";
        font-size: ${({theme})=>theme.fontSize.bodyMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};

        &::placeholder {
            color: ${({theme})=>theme.color.OnBackgroundGray};
        }

    }

    p {
        text-align: left;
        color : ${({theme})=>theme.color.Error};
        font-size : ${({theme})=>theme.fontSize.captionRegular};
        font-weight: ${({theme})=>theme.fontWeight.regular};
        padding-left: 6px;
        margin-top: 1px;
    }

    @media screen and (max-width:820px) {
        input {
            height: 36px;
            font-size: 14px;
        }
    }

`;