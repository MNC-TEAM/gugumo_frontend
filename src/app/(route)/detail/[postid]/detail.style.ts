import Link from "next/link";
import styled from "styled-components";

export const DetailStyle = styled.main`
    padding: 80px 0 160px;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

    h1 {
        font-size: ${({theme})=>theme.fontSize.titleSemibold};
        font-weight: ${({theme})=>theme.fontWeight.semibold};
    }
    
`;

export const BookFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({theme})=>theme.color.Primary};
    p {
        font-size: ${({theme})=>theme.fontSize.titleMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
    }
`;


export const Top = styled.div`
    display: flex;
    align-items: center;
    gap: 21px;
    margin-top: 25px;
    font-size: ${({theme})=>theme.fontSize.titleMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    color: ${({theme})=>theme.color.OnBackgroundGray};
    padding-bottom: 21px;
    border-bottom: 1px solid ${({theme})=>theme.color.Outline};
`;

export const View = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    img {
        width: 36px;
    }
`;


export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    margin-top: 67px;
    gap: 26px 0px;
`;

export const Col = styled.div`
    display: flex;
    align-items: center;
    color: ${({theme})=>theme.color.OnSurface};
    font-size: ${({theme})=>theme.fontSize.titleMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    gap: ${23/24}em;
    h4 {
        padding: ${12/24}em ${22/24}em;
        background: ${({theme})=>theme.color.Surface};
        min-width: ${127/24}em;
        text-align: center;
        box-sizing: border-box;
    }

    a {
        width: ${252/24}em;
        height: ${53/24}em;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({theme})=>theme.color.Primary};
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
    }

`;


export const Desc = styled.div`
    margin-top: 82px;
    height: 911px;
    width: 100%;
    padding: 57px;
    box-sizing: border-box;
    font-size: ${({theme})=>theme.fontSize.titleMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    line-height: ${53/24};
`;


export const LinkStyle = styled(Link)`
    all: unset;
    font-size: ${({theme})=>theme.fontSize.buttonSemibold};
    font-weight: ${({theme})=>theme.fontWeight.semibold};
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