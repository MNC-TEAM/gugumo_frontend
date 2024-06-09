import styled from "styled-components";

export const NotFoundStyle = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;

    h1 {
        font-size: 49px;
        font-weight: 500;
        font-family: "Pretendard";
        color: ${({theme})=>theme.color.Primary};
        margin-top: 28px;
    }

    dl {
        margin-top: 40px;
        width: 422px;
        dt {
            font-size: ${({theme})=>theme.fontSize.titleMedium};
            font-weight: ${({theme})=>theme.fontSize.titleMedium};
        }
        dd {
            font-size: 18px;
            line-height: normal;
            color: ${({theme})=>theme.color.OnBackgroundGray};
            margin-top: 25px;
        }
    }
`;


export const Flex = styled.div`
    display: flex;
    margin-top: 100px;
    gap: 18px;

    button {
        width: 88px;
        height: 47px;
        border: 1px solid ${({theme})=>theme.color.Primary};
        border-radius: 4px;
        color: ${({theme})=>theme.color.Primary};
        font-size: ${({theme})=>theme.fontSize.buttonSemibold};
        font-weight: ${({theme})=>theme.fontSize.buttonSemibold};
        cursor: pointer;
        transition: 0.4s;
        transition-property: color,background;

        &:hover {
            color: ${({theme})=>theme.color.Background};
            background: ${({theme})=>theme.color.Primary};
        }

    }

`;