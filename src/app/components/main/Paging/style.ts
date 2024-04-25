import Link from "next/link";
import styled from "styled-components";

// 따로 구분하기
export const Flex = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

export const LinkStyle = styled(Link)<{active? : boolean}>`
    text-decoration: none;
    color: ${({active,theme})=>{
        if(active){
            return theme.color.Primary;
        }else{
            return theme.color.OnBackground;
        }
    }};
    font-size: ${({theme})=>theme.fontSize.captionRegular};
    font-weight: ${({theme})=>theme.fontWeight.captionRegular};
`;