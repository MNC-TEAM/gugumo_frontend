import styled from "styled-components";

export const MypageStyle = styled.main`
    padding: 120px 0 117px;
`;

export const UserFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 42px;
`;

export const User = styled.div`
    text-align: center;
    div {
        border-radius: 1000px;
        background: ${({theme})=>theme.color.Surface};
        width: 156px;
        &::after {
            content: '';
            display: block;
            padding-bottom: 100%;
        }
    }
    button {
        all: unset;
        margin-top: 13px;
        font-size: ${({theme})=>theme.fontSize.buttonMedium};
        font-weight: ${({theme})=>theme.fontWeight.buttonMedium};
        color: ${({theme})=>theme.color.OnBackgroundGray};
    }
`;

export const UserName = styled.div`
    display: flex;
    align-items: center;
    gap: 19px;
    font-size: ${({theme})=>theme.fontSize.buttonMedium};
    font-weight: ${({theme})=>theme.fontWeight.buttonMedium};
    p {
        font-size: ${({theme})=>theme.fontSize.captionMedium};
        font-weight: ${({theme})=>theme.fontWeight.captionMedium};
        color: ${({theme})=>theme.color.OnSurface};
        border: 1px solid ${({theme})=>theme.color.OnSurface};
        padding: 8px 5px;
        border-radius: 1000px;
    }
`;


export const Layout = styled.div`
    display: flex;
    align-items: center;
    margin-top: 62px;
    gap: 142px;
    border-radius: 8px;
    background: ${({theme})=>theme.color.Surface};
    padding: 59px 194px 59px 137px;
    h4 {
        font-size: ${({theme})=>theme.fontSize.buttonSemibold};
        font-weight: ${({theme})=>theme.fontWeight.buttonSemibold};
        white-space: nowrap;
    }
`;

export const InputLayout = styled.div`
    p {
        font-size: ${({theme})=>theme.fontSize.buttonMedium};
        font-weight: ${({theme})=>theme.fontWeight.buttonMedium};
    }
    div {
        display: flex;
        gap: 18px;
        margin-top: 12px;
        input {
            height: 69px;
            border-radius: 8px;
            background: ${({theme})=>theme.color.Background};
            padding: 0 28px;
            box-sizing: border-box;
            border: 0;
            outline: 0;
            width: 493px;
            font-family: "Pretendard";
            font-size: ${({theme})=>theme.fontSize.buttonMedium};
            font-weight: ${({theme})=>theme.fontWeight.buttonMedium};
        }
        button {
            all: unset;
            width: 119px;
            border-radius: 8px;
            background: ${({theme})=>theme.color.Primary};
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            cursor: pointer;
        }
    }
`;


export const InputFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 42px;

    > div {
        input {
            width: 630px;
        }
    }
`;


export const Button = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 44px auto 0;
    width: 105px;
    height: 47px;
    border: 1px solid ${({theme})=>theme.color.Primary};
    color: ${({theme})=>theme.color.Primary};
    font-size: ${({theme})=>theme.fontSize.buttonSemibold};
    font-weight: ${({theme})=>theme.fontWeight.buttonSemibold};
    border-radius: 4px;
    cursor: pointer;
`;


export const UserDelete = styled.div`
    text-align: center;
    margin-top: 133px;
    button {
        all: unset;
        text-align: center;
        cursor: pointer;
        color: ${({theme})=>theme.color.OnBackgroundGray};
        font-size: ${({theme})=>theme.fontSize.buttonMedium};
        font-weight: ${({theme})=>theme.fontWeight.buttonMedium};
        border-bottom: 1px solid ${({theme})=>theme.color.OnBackgroundGray};
        padding-bottom: 2px;
    }
`;