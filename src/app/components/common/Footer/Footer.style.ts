import { Wrap } from "@/styles/global";
import styled from "styled-components";

export const FooterStyle = styled.footer`
    background: ${({theme})=>theme.color.Surface};
    height: 180px;

    @media screen and (max-width:820px) {
        height: auto;
        padding: 17px 0 30px;
    }

`;

export const Wrapper = styled(Wrap)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media screen and (max-width:820px) {
        display: block;
    }

`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    @media screen and (max-width:820px) {
        flex-direction: column;
        align-items: flex-start;
    }

`;

export const CopyBox = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width:820px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 14px;

        img {
            width: 62px;
        }

    }

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

    @media screen and (max-width:820px) {
        display: flex;
        flex-direction: column;
        text-align: right;
        p {
            margin-top: 3px;
            br {
                display: none;
            }
            + p {
                order: -1;
                margin-top: 0;
            }
        }
    }

`;

export const Service = styled.div`
    display: flex;
    gap: 72px;
    font-size: ${({theme})=>theme.fontSize.captionMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    color: ${({theme})=>theme.color.OnSurface};

    button {
        cursor: pointer;
    }

    @media screen and (max-width:820px) {
        order: -1;
        gap: 0;
        justify-content: space-between;
        width: 100%;
    }
   
`;