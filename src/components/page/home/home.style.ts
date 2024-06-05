import styled, { css } from "styled-components";

export const Wrap = styled.div`
    max-width: 1024px;
    width: 95%;
    margin: 0 auto;
`;

export const HomeVisualTrack = styled.div`
    height: 856px;
    background: url('/asset/image/home/track.jpg') no-repeat center/cover;
    position: relative;
`;

export const HomeVisualDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: url('/asset/image/home/visual.png') no-repeat center/cover;
    width: 100%;
    height: 100%;
    z-index: 2;
`;


export const HomeWave = styled.div`
    overflow: hidden;
    background: #0085FF;
    padding: 22px 0;
    display: flex;

    div {
        flex: 0 0 auto;
        padding: 0 ${55/2}px;
        animation: wave 2s infinite linear;
    }

    @keyframes wave {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-100%);
        }
    }
`;


export const HomeKeyword = styled.div`
    padding: 182px 0 243px;
    position: relative;
    overflow: hidden;
`;

export const HomeKeywordImage = styled.div<{$type : "one" | "two" | "three"}>`
    position: absolute;
    ${({$type})=>{
        let style;
        switch($type){
            case "one" :
                style = css`
                    left: 91px;
                    bottom: 21px;
                `;
                break;
            case "two" :
                style = css`
                    left: 333px;
                    bottom: 20px;
                `;
                break;
            case "three" :
                style = css`
                    right: 55.46px;
                    bottom: 19.74px;
                `;
                break;
        }
        return style;
    }}
`;

export const HomeKeywordMegaphoneBase = styled.div<{$right? : Boolean}>`
    position: relative;
    & + & {
        margin-top: 85px;
    }
    ${({$right})=> $right ? css` text-align : right; ` : ""}
`;

export const HomeKeywordMegaphoneText = styled.div`
    padding: 22.5px 45px;
    border-radius: 1000px;
    border: 1px solid #4FAAFF;
    font-family: "Pretendard";
    font-size: 22px;
    color: #4FAAFF;
    display: inline-block;
    span {
        font-weight: bold;
    }
`;

export const HomeKeywordMegaphone = styled.div<{$right? : Boolean}>`
    position: absolute;
    
    ${({$right})=>{
        if($right){
            return  css`
                right: 0;
                top: 50%;
                transform: translate(60%,-50%);
            `;
        }else{
            return  css`
                left: 0;
                top: 50%;
                transform: translate(-60%,-50%);
            `;
        }
    }}

`;


export const HomeService = styled.div`
    padding: 149px 0 230px;
    background: #0F7FFF;
`;

export const HomeServiceDot = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    div {
        width: 13px;
        height: 13px;
        background: #fff;
        border-radius: 1000px;
    }
`;

export const HomeServiceTitle = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'KNUTRUTHTTF';
    font-size: 39px;
    margin-top: 35px;
`;

export const HomeServiceCardBase = styled.div`
    display: grid;
    align-items: flex-start;
    grid-template-columns: repeat(2,1fr);
    margin-top: 138px;
    gap: 30px;
`;


export const HomeServiceCardNum = styled.div`
    position: relative;
    background: url('/asset/image/home/Ellipse.png') no-repeat center;
    width: 128.65px;
    height: 118.53px;
    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 52px;
        font-family: 'Black Han Sans';
        color: #fff;
    }
`;

export const HomeServiceCard = styled.div`
    background: #fff;
    padding: 55px 31px;
    border-radius: 27px;
    position: relative;

    &::before,
    &::after {
        position: absolute;
        width: 12px;
        height: 12px;
        background: #4FAAFF;
        content: '';
        border-radius: 1000px;
    }

    &::before {
        top: 31.54px;
        left: 27.36px;
    }

    &::after {
        top: 31.54px;
        right: 27.36px;
    }

    p {
        margin-top: 14px;
        line-height: ${53/29};
        font-size: 29px;
        color: #53ACFF;
        padding-left: 37px;
        box-sizing: border-box;
        span {
            color: #0F7FFF;
            font-weight: bold;
        }
    }

    &:nth-of-type(2) {
        margin-top: 180px;
    }

    &:nth-of-type(3) {
        margin-top: -80px;
    }

    &:nth-of-type(4) {
        margin-top: 90px;
    }

    &:nth-of-type(even){
        ${HomeServiceCardNum} {
            margin-left: auto;
        }
    }

`;





export const LinkBase = styled.div`
    margin-top: 213px;
    text-align: center;
    dl {
        dt {
            font-size: 39px;
            font-family: 'KNUTRUTHTTF';
            color: #fff;
        }
        dd {
            margin-top: 15px;
        }
    }
    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        width: 324px;
        height: 102px;
        border-radius: 22px;
        font-size: 32px;
        font-weight: 900;
        color: #4FAAFF;
        margin-top: 50px;
    }
`;