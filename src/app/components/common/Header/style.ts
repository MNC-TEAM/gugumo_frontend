import Link from "next/link";
import styled from "styled-components";

export const HeaderStyle = styled.header`
    height: 80px;
    margin-top: 45px;
`;

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const LoginStyle = styled(Link)`
    width: 79px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: #4FAAFF;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    border-radius: 4px;
`;