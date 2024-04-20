import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;

export const FooterStyle = styled.footer`
    background: #DDEFFF;
    height: 180px;
`;


export const Flex = styled.div`
    display: flex;
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
   button {
    all: unset;
    font-weight: 500;
    font-size: 13px;
   }
`;