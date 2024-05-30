import styled from "styled-components";
import * as S from "../style";


export const Layout = styled(S.Layout)`
    padding: 78px ${53/1200*100}%;

    @media screen and (max-width:820px) {
        padding: 0;
    }

`;