import { SKELETONCSS } from "@styles/global";
import styled, { css } from "styled-components";

export const Top = styled.div`

    display: flex;
    align-items: center;
    margin-top: 28px;
    padding-bottom: 21px;
    font-size: 18px;
    font-weight: ${({theme})=>theme.fontWeight.medium};
    color: ${({theme})=>theme.color.OnBackgroundGray};
    border-bottom: 1px solid ${({theme})=>theme.color.Outline};
    justify-content: space-between;    
    flex-wrap: wrap;
    gap: 5px;
    
    @media screen and (max-width:820px) {
        font-size: 14px;
        margin-top: 9px;
    }

`;

export const TopFlex = styled.div<{$skeleton? : boolean}>`
    display: flex;
    align-items: center;
    gap: 18px;

    @media screen and (max-width:820px) {
        gap: 10.77px;
    }

`;

export const TopFlexPSkeleton = styled.p`
    height: 24px;
    width: 150px;
    ${SKELETONCSS}
    @media screen and (max-width:820px) {
        width: 75px;
    }
`;


export const View = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    img {
        width: 18px;
    }
`;


export const ViewIconSkeleton = styled.div`
    width: 24px;
    height: 24px;
    ${SKELETONCSS}
`;


export const BookFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${({theme})=>theme.color.Primary};
    p {
        font-size: 22px;
        font-weight: ${({theme})=>theme.fontWeight.medium};
    }
    @media screen and (max-width:820px) {
        p {
            font-size: 14px;
        }
    }
`;



// DetailGrid
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    margin-top: 34px;
    gap: 20px;

    @media screen and (max-width: 820px) {
        margin-top: 17px;
        gap: 16px 0;
    }
    @media screen and (max-width: 550px) {
        grid-template-columns: repeat(1,1fr);
    }

`;

export const Col = styled.div<{$open? : boolean}>`
    display: grid;
    align-items: center;
    color: ${({theme})=>theme.color.OnSurface};
    font-size: 18px;
    font-weight: ${({theme})=>theme.fontWeight.medium};
    grid-template-columns: ${({$open})=>{
        if($open){
            return "136px 1fr";
        }else{
            return "102px 1fr";
        }
    }};
    gap: 12px;

    h4 {
        padding: ${12/24}em ${22/24}em;
        background: ${({theme})=>theme.color.Surface};
        text-align: center;
        box-sizing: border-box;
        white-space: nowrap;
        width: 100%;
        height: 41px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }

    @media screen and (max-width: 820px) {
        
        font-size: 14px;

        grid-template-columns: ${({$open})=>{
            if($open){
                return "104px 1fr";
            }else{
                return "82px 1fr";
            }
        }};

    }

`;

export const OpenTalk = styled.a`
    width: 158px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme})=>theme.color.Primary};
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    @media screen and (max-width: 820px) {
        width: 9em;
    }
`;

export const OpenTalkSkeleton = styled.div`
    width: 158px;
    height: 41px;
    ${SKELETONCSS}

    @media screen and (max-width: 820px) {
        width: 128px;
    }

`;

export const ColSkeletonP = styled.p`
    width: 50%;
    height: 100%;
    ${SKELETONCSS}

    @media screen and (max-width: 820px) {
        width: 100%;
    }

`;