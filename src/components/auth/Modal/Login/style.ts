import styled from "styled-components";

export const BackModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: rgba(000,000,000,0.6);
`;

export const Logo = styled.div`
    width: 61px;
    margin: 0 auto 20px;
    @media screen and (max-width:820px) {
        width: 61px;
        margin: 0 auto 20px;
    }
`;

export const CloseStyle = styled.button`
    all: unset;
    position: absolute;
    right: 16px;
    top: 18px;
    cursor: pointer;
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
    transform: translate(-50%, -25%);
    background : #fff;
    padding : 35px 62px 33px;
    box-sizing : border-box;
    border-radius : 12px;
    border : 0;
    text-align : center;
    background: #fff;
    opacity: 0;
    transition: .4s;
    transition-property: opacity,transform;

    &.active {
        opacity: 1;
        transform: translate(-50%, -50%);
    }

    @media screen and (max-width:820px) {
        max-width: 302px;
        padding : 35px 24px 33px;
    }
`;


export const TitleStyle = styled.h5`

    font-family: "Pretendard";
    color: #4FAAFF;
    font-weight: 600;
    font-size: 18px;
    
`;

export const Form = styled.form`
    text-align: left;
    button {
        margin-top: 25px;
    }
`;

export const InputBox = styled.div`

    margin-top: 23px;

    > div + div {
        margin-top: 7px;
    }
`;

export const BtnList = styled.div`
    text-align: center;
`;

export const SignFind = styled.div`
    text-align: center;
    color: ${({theme})=>theme.color.Primary};
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 13px;
    margin-top: ${38/13*1}em;

    a {
        + a {
            padding-left: 5px;
            margin-left: 5px;
            position: relative;
            &::before {
                content: '';
                display: block;
                width: 1px;
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                background: ${({theme})=>theme.color.Primary};
            }
        }
    }

    @media screen and (max-width : 820px) {
        margin-top: 20px;
    }

`;



export const SnsBox = styled.div`
    margin-top: 20px;
    color: #A5A5A5;
    text-align: center;
    p {
        font-size: 13px;
        font-weight: 500;
        font-family: "Pretendard";
    }
`;

export const SnsBoxFlex = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 10px;
    button {
        all: unset;
        width: 30px;
        height: 30px;
        border-radius: 100px;
        background: #acf;
        cursor: pointer;
        background: url("/asset/image/auth/kakao.png") no-repeat center/cover;
    }
`;