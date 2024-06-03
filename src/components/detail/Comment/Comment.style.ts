"use client"
import styled from "styled-components";

export const CommentLength = styled.div`
    display: flex;
    gap: 3px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 147px;
    span {
        color: ${({theme})=>theme.color.OnSurface};
    }
`;

export const UserIcon = styled.div`
    width: 73px;
    height: 73px;
    border-radius: 1000px;
    background: ${({theme})=>theme.color.Surface};

    @media screen and (max-width: 820px) {
        width: 32px;
        height: 32px;
    }

`;


export const CommentFormBase = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 32px;
    @media screen and (max-width:820px) {
        gap: 12px;
    }
`;

export const CommentForm = styled.div`
    flex: 1;
    text-align: right;
    textarea {
        box-sizing: border-box;
        width: 100%;
        outline: 0;
        border: 0;
        resize: none;
        display: block;
        height: 108px;
        border-radius: 12px;
        background: ${({theme})=>theme.color.Surface};
        padding: calc(17/16*1em) calc(19/16*1em);
        font-size: 16px;
        font-weight: 600;
        font-family: "Pretendard";
        &::placeholder {
           color : ${({theme})=>theme.color.OnBackgroundGray};
        }
    }
    button {
        margin-top: 23px;
    }

    @media screen and (max-width:820px) {
        textarea {
            height: 64px;
            font-size: 14px;
        }
        button {
            margin-top: 8px;
        }
    }

`;



export const CommentList = styled.div``;

export const CommentListBase = styled.div`
    border-top: 6px solid ${({theme})=>theme.color.Surface};
    margin-top: 51px;
    padding-top: 60px;

    ${CommentList} {
        + ${CommentList} {
            margin-top: 50px;
        }
    }

    @media screen and (max-width:820px) {
     
        ${CommentList} {
            + ${CommentList} {
                margin-top: 25px;
            }
        }
        
    }

`;

export const CommentBase = styled.div`
    display: flex;
    gap: 21px;
`;

export const Comment = styled.div`
    flex: 1;
    p {
        
        font-size: 18px;
        font-weight: 500;
        min-height: 66px;
    }

    @media screen and (max-width:820px) {
        p {
            margin-top: 14px;
            font-size: 14px;
            min-height: 44px;
        }
    }

`;

export const CommentContent = styled.div`
    margin-top: 16px;
    @media screen and (max-width:820px) {
        margin-top: 14px;
    }
`;


export const Name = styled.div`
    display: flex;
    justify-content: space-between;

    dl {
        display: flex;
        align-items: center;
        gap: 10px;
        dt {
            font-size: 18px;
            color: ${({theme})=>theme.color.Primary};
            font-weight: bold;
        }
        dd {
            font-size: 13px;
            color: ${({theme})=>theme.color.OnBackgroundGray};
            font-weight: 400;
        }
    }

    @media screen and (max-width:820px) {
        dl {
            dt {
                font-size: 14px;
            }
            dd {
                font-size: 13px;
            }
        }
    }

    @media screen and (max-width:480px) {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

`;

export const EditList = styled.div`
    display: flex;
    gap: 20px;
    button {
        font-size: 13px;
        color: ${({theme})=>theme.color.OnBackgroundGray};
        cursor: pointer;
    }

    @media screen and (max-width:820px) {
        gap: 10px;
        margin-left: auto;
    }

`;


export const ReplyBase = styled.div`
    margin-left: 120px;
    margin-top: 20px;

    ${CommentBase}{
        + ${CommentBase} {
            margin-top: 25px;
        }
    }

    @media screen and (max-width:820px) {
        margin-left: 15%;
    }

`;