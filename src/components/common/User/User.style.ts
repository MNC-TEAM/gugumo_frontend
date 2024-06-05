import styled from "styled-components";

export const User = styled.div`
    border-radius: 1000px;
    background-color: ${({theme})=>theme.color.Surface};
    background-position: center;
    background-size: 75% 75%;
    background-repeat: no-repeat;
    width: 104px;
    &::after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }

    @media screen and (max-width:820px) {
        width: 78px;
    }
`;