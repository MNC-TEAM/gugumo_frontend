import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  button {
    padding: 0;
    margin: 0;
    border: 0;
    background: none;
    font-family: inherit;
    /* all: unset; */
  }

  *::-webkit-scrollbar {width: 8px;}
  *::-webkit-scrollbar-thumb {background-color: #4FAAFF; border-radius: 10px;}

`;

export const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width:1280px) {
    padding: 0px calc((36*2) / 1200 * 100%);
  }

  @media screen and (max-width:480px) {
    padding: 0px 15px;
  }

`;