import styled, { css } from "styled-components";

export const Alarm = styled.div`
    position: relative;
    > img {
        cursor: pointer;
    }
`;

export const AlarmBox = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    width: 342px;
    /* height: 334px; */
    border-radius: 8px;
    background: ${({theme})=>theme.color.Background};
    box-shadow: 0 4px 16.7px rgba(000,000,000,0.1);
    padding: 22px 30px;
    box-sizing: border-box;
    max-height: 334px;
    overflow-y: auto;

    @media screen and (max-width:820px) {
        width: 272px;
        max-height: 264px;
        right: 0;
        transform: translateX(25%);
    }

`;

export const AlarmBoxFlex = styled.div`
    display: flex;
    justify-content: space-between;

    h4 {
        color: ${({theme})=>theme.color.Primary};
        font-size: ${({theme})=>theme.fontSize.buttonSemibold};
        font-weight: 600;
    }

    button {
        font-size: 13px;
        color: ${({theme})=>theme.color.OnSurface};
        font-weight: bold;
    }
`;

export const AlarmBoxDay = styled.div`
    margin-top: 23px;
    > p {
        margin-left: 3px;
        font-size: ${({theme})=>theme.fontSize.captionRegular};
        color: ${({theme})=>theme.color.OnSurface};
    }
`;

export const AlarmBoxList = styled.ul<{$status? : boolean}>`
    margin-top: 8px;
    li {
        display: flex;
        white-space: nowrap;
        gap: 8px;
        background: ${({theme})=>theme.color.Surface};
        padding: 14px 12px;
        border-radius: 4px;
        align-items: center;
        cursor: pointer;
        + li {
            margin-top: 8px;
        }
        span {
            color: ${({theme})=>theme.color.Primary};
            background: ${({theme})=>theme.color.Background};
            font-size: 13px;
            padding: 3px 8.5px; 
            border-radius: 1000px;
        }
        p {
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: ${({theme})=>theme.fontSize.captionRegular};
        }
        button {
            img {
                vertical-align: middle;
            }
        }
    }

    ${({$status})=>{
        if($status) return css`
            li {
                background : #F5F5F5;
                span {
                    background: ${({theme})=>theme.color.Outline};
                    color: ${({theme})=>theme.color.OnSurface};
                }
            }
        `;
    }}

`;