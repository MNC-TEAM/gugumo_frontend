import styled from "styled-components";

export const modalStyle: ReactModal.Styles = {
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
    },
};

export const CloseStyle = styled.button`
    all: unset;
    position: absolute;
    right: 16px;
    top: 18px;
    cursor: pointer;
`;

export const Form = styled.form`
    button {
        margin-top: 25px;
    }
`;

export const TitleStyle = styled.h5`

    font-family: "Pretendard";
    color: #4FAAFF;
    font-weight: 600;
    font-size: 18px;
    margin-top: 41px;

`;

export const SignButton = styled.button`
     all: unset;
    color: #4FAAFF;
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 13px;
    margin-top: ${38/13*1}em;
    cursor: pointer;
`;

export const InputBox = styled.div`

    margin-top: 23px;

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
        font-weight: ${({theme})=>theme.fontWeight.bodyMedium};

        &::placeholder {
            color: ${({theme})=>theme.color.OnBackgroundGray};
        }

        + input {
            margin-top: 7px;
        }

    }

`;

export const SnsBox = styled.div`
    margin-top: 18px;
    color: #A5A5A5;
    p {
        font-size: 13px;
        font-weight: 500;
        font-family: "Pretendard";
    }
`;

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 7px;
    button {
        all: unset;
        width: 30px;
        height: 30px;
        border-radius: 100px;
        background: #acf;
        cursor: pointer;
    }
`;