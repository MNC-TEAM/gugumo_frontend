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
`;


export const CommentFormBase = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 52px;
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
`;

export const CommentListBase = styled.div`
    border-top: 6px solid ${({theme})=>theme.color.Surface};
    margin-top: 51px;
    padding-top: 60px;
`;
export const CommentList = styled.ul`
    li {
        display: flex;
        gap: 21px;
        + li {
            margin-left: 120px;
            margin-top: 20px;
        }
    }
`;

export const Comment = styled.div`
    flex: 1;
    p {
        margin-top: 16px;
        font-size: 18px;
        font-weight: 500;
        min-height: 66px;
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

`;

export const EditList = styled.div`
    display: flex;
    gap: 20px;
    button {
        font-size: 13px;
        color: ${({theme})=>theme.color.OnBackgroundGray};
        cursor: pointer;
    }
`;