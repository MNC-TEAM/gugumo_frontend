import styled from "styled-components";

export const DetailStyle = styled.main`
    padding: 80px 0 160px;
    @media screen and (max-width:820px) {
        padding: 39px 0 191px;
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
    @media screen and (max-width:820px) {
        p {
            font-size: 14px;
        }
    }
`;

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    h1 {
        font-size: ${({theme})=>theme.fontSize.titleSemibold};
        font-weight: ${({theme})=>theme.fontWeight.semibold};
    }

    @media screen and (max-width:820px) {
        h1 {
            font-size: 18px;
        }
        ${BookFlex} {
            display: none;
        }
    }

`;

export const Top = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
    font-size: ${({theme})=>theme.fontSize.titleMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    color: ${({theme})=>theme.color.OnBackgroundGray};
    padding-bottom: 21px;
    border-bottom: 1px solid ${({theme})=>theme.color.Outline};
    justify-content: space-between;

    @media screen and (min-width:821px) {
        ${BookFlex} {
            display: none;
        }
    }
    
    @media screen and (max-width:820px) {
        font-size: 14px;
        margin-top: 9px;
    }
`;

export const TopFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 21px;
    @media screen and (max-width:820px) {
        gap: 10.77px;
    }
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

    @media screen and (max-width: 820px) {
        margin-top: 17px;
        gap: 16px 0;
    }
    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1,1fr);
    }

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
        white-space: nowrap;
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

    @media screen and (max-width: 1280px) {
        
        font-size: 20px;

    }

    @media screen and (max-width: 820px) {
        
        font-size: 14px;

        a {
            width: 9em;
        }

    }

`;


export const Desc = styled.div`
    margin-top: 82px;
    min-height: 911px;
    width: 100%;
    padding: 57px;
    box-sizing: border-box;
    font-size: ${({theme})=>theme.fontSize.titleMedium};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    line-height: ${53/24};

    @media screen and (max-width:820px) {
        margin-top: 33px;
        padding: 11px 17px;
        font-size: 14px;
        min-height: 317px;
    }

`;


export const BtnList = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
`;

export const Btn = styled.button<{$type? : string}>`
    font-size: ${({theme})=>theme.fontSize.buttonSemibold};
    font-weight: ${({theme})=>theme.fontWeight.semibold};
    color: ${({theme,$type})=>{
        let type;
        switch($type){
            case "error":
                type = theme.color.OnError
                break;
            case "edit":
                type = theme.color.OnSurface
                break;
            default :
                type = theme.color.Primary
                break;
        }
        
        return type;
        
    }};
    border: 1px solid ${({theme,$type})=>{
        let type;
        switch($type){
            case "error":
                type = theme.color.Error
                break;
            case "edit":
                type = theme.color.Surface
                break;
            default :
                type = theme.color.Primary
                break;
        }
        return type;
    }};
    background: ${({theme,$type})=>{
        let type;
        switch($type){
            case "error":
                type = theme.color.Error
                break;
            case "edit":
                type = theme.color.Surface
                break;
            default :
                type = theme.color.OnPrimary
                break;
        }
        return type;
    }};
    padding: 14px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: .4s;
    transition-property: background,color;
`;


/* export const LinkStyle = styled(Link)`
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
`; */