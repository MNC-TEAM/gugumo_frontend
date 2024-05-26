import styled from "styled-components";

export const Box = styled.div`
    padding: 0 26px;
    height: 56px;
    background: ${({theme})=>theme.color.Background};
    position: relative;
    display: flex;
    gap: 18px;
    input {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border: 0;
        font-family: "Pretendard";
        font-size: ${({theme})=>theme.fontSize.bodyMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
        padding: 0 ${26/16}em;
        outline: 0;
    }
`;