import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 95%;
`;

export const FooterStyle = styled.footer`
    background: ${({theme})=>theme.color.Surface};
    height: 180px;
`;


export const Flex = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 10px;
`;

export const Copy = styled.div`
    p {
        color: #4FAAFF;
        font-weight: 500;
        font-size: 13px;
        + p {
            margin-top: 10px;
        }
    }
`;

export const Service = styled.div`
   display: flex;
   gap: 72px;
   font-size: ${({theme})=>theme.fontSize.captionMedium};
   font-weight: ${({theme})=>theme.fontWeight.captionMedium};
   color: ${({theme})=>theme.color.OnSurface};
   button {
    all: unset;
    font-weight: 500;
    font-size: 13px;
    cursor: pointer;
   }
`;