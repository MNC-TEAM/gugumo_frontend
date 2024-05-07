import styled from "styled-components";

interface InputStyleType {
    focus? : boolean,
    error? : boolean
}

export const InputStyle = styled.div<InputStyleType>`

    p {
        color: ${({theme})=>theme.color.Error};
        font-size: ${({theme})=>theme.fontSize.captionRegular};
        font-weight: ${({theme})=>theme.fontWeight.regular};
        margin-top: 2px;
    }

`;


export const InputBox = styled.div<InputStyleType>`

    width: 299px;
    height: 45px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid ${({error,focus,theme})=>{
        if(error){
            return theme.color.Error;
        }else{
            if(focus) {
                return theme.color.Primary;
            }else{
                return theme.color.Outline;            
            }
        }
    }};

    input {
        font-size: ${({theme})=>theme.fontSize.bodyMedium};
        font-weight: ${({theme})=>theme.fontWeight.medium};
        outline: none;
        padding: 0 1em;
        box-sizing: border-box;
        position: absolute;
        border: 0;
        margin: 0;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        font-family: "Pretendard";
    }

`;