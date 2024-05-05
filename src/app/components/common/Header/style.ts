import styled from "styled-components";

export const HeaderStyle = styled.header`
    margin-top: 40px;
    position: relative;
    z-index: 222;
`;

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const LoginStyle = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 79px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: ${({theme})=>theme.color.Primary};
    color: #fff;
    font-size: ${({theme})=>theme.fontSize.buttonSemibold};
    font-weight: ${({theme})=>theme.fontWeight.buttonSemibold};
    border-radius: 4px;
    cursor: pointer;
`;


export const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 26px;
    img {
        cursor: pointer;
    }

    button {
        all: unset;
        cursor: pointer;
    }

`;


export const UserMenu = styled.div`
    position: relative;
    ul {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 100%;
        padding: 20px 30px;
        border: 1px solid ${({theme})=>theme.color.Primary};
        font-size: ${({theme})=>theme.fontSize.captionMedium};
        font-weight: ${({theme})=>theme.fontWeight.captionMedium};
        border-radius: 4px;
        white-space: nowrap;
        text-align: center;
        background: ${({theme})=>theme.color.Background};
        li {
            + li {
                margin-top: 12px;
            }
            a,button {
                color : ${({theme})=>theme.color.OnSurface};
            }
        }
    }

`;