import styled from "styled-components";

export const WrtieStyle = styled.main`
    padding: 89px 0 144px;
`;

export const Wrap = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    p {
        display: flex;
        width : 34px;
        height: 34px;
        border-radius: 1000px;
        background: ${({theme})=>theme.color.Primary};
        color: #fff;
        align-items: center;
        justify-content: center;
    }

    h3 {
        font-size: ${({theme})=>theme.fontSize.titleMedium};
        font-weight: ${({theme})=>theme.fontWeight.titleMedium};
    }

`;

export const Gird = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 30px;
    margin-top: 34px;
`;

export const InputStyle = styled.div`
    label {
        font-size: ${({theme})=>theme.fontSize.buttonMedium};
        font-weight: ${({theme})=>theme.fontWeight.buttonMedium};
        padding: 0 ${6/18}em;
    }
`;


export const InputBox = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 64px;
    position: relative;
    background: ${({theme})=>theme.color.Surface};
    img {
        position: absolute;
        right: 16.5px;
        top: 50%;
        transform: translateY(-50%);
    }
    select,input {
        outline: none;
        border: 0;
        background: none;
        width: 100%;
        height: 100%;
        font-size: ${({theme})=>theme.fontSize.bodyMedium};
        font-weight: ${({theme})=>theme.fontWeight.bodyMedium};
        padding: 0 ${14/16}em;
        font-family: "Pretendard";
        color: ${({theme})=>theme.color.OnBackground};
    }

    select {
        appearance: none;
        cursor: pointer;
    }

`;


export const DescBox = styled.div`
    margin-top: 87px;
    > div:nth-of-type(1) {
        margin-bottom: 34px;
    }
`;

export const DescInputStyle = styled.div`

    &:nth-of-type(3) {
        margin-top: 30px;
    }

    label {
        font-size: 18px;
        font-weight: 500;
        padding: 0 ${6/18}em;
    }

    input,textarea {
        outline: none;
        border: 0;
        padding: 0;
        display: block;
        width: 100%;
        background: ${({theme})=>theme.color.Surface};
        border-radius: 8px;
        margin-top: 12px;
        font-family: "Pretendard";
        font-size: ${({theme})=>theme.fontSize.bodyMedium};
        font-weight: ${({theme})=>theme.fontWeight.bodyMedium};
    }

    input {
        height: 57px;
        padding: 0 ${14/16}em;
    }

    textarea {
        height: 485px;
        padding: ${14/16}em;
    }

`;


export const Button = styled.button`
    all: unset;
    font-size: ${({theme})=>theme.fontSize.buttonSemibold};
    font-weight: ${({theme})=>theme.fontWeight.buttonSemibold};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 53px auto 0;
    width: ${95/18}em;
    height: ${49/18}em;
    border-radius: ${4/18}em;
    color: ${({theme})=>theme.color.Primary};
    border: 1px solid ${({theme})=>theme.color.Primary};
    cursor: pointer;
    transition: .4s;
    transition-property: color,background;

    &:hover {
        background: ${({theme})=>theme.color.Primary};
        color: #fff;
    }
`;