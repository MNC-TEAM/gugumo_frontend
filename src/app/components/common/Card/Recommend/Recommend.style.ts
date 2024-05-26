import styled from "styled-components";
import * as C from "../Card.style";

export const Detail = styled(C.Detail)`
    li {
        transition: color .4s;
        color: ${({theme})=>theme.color.Primary};
        p {
            + p {
                transition: border .4s;
                border-color: ${({theme})=>theme.color.Primary};
            }
        }
    }
`;

export const Date = styled(C.Date)`
    border-top: 1px solid ${({theme})=>theme.color.Primary};
    span {
        transition: color .4s;
        color: ${({theme})=>theme.color.Primary};
    }
    svg {
        transition: stroke .4s;
    }
`;


export const CardLayout = styled.div`
    background: #DBEBFF;
    border: 1px solid ${({theme})=>theme.color.SubColor4};
    padding: 19px 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all.4s;
    transition-property: border,background;

    &:hover {
        border-color: ${({theme})=>theme.color.OnSubColor1};
        background: ${({theme})=>theme.color.Primary};

        ${C.Title}{
            color: ${({theme})=>theme.color.Surface};
        }

        ${Detail} {
            li {
                color: ${({theme})=>theme.color.Surface};
                p {
                    + p {
                        border-color: ${({theme})=>theme.color.Surface};
                    }
                }
            }
        }

        ${Date} {
            border-color: ${({theme})=>theme.color.Surface};
            span {
                color: ${({theme})=>theme.color.Surface};
            }
            svg {
                stroke: ${({theme})=>theme.color.Surface};
            }
        }

    }

`;