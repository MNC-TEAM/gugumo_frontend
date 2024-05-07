import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  :root {
    
    --Primary : #4FAAFF;
    --OnPrimary : #FFFFFF;
    --Surface : #F4F5F8;
    --OnSurface : #878787;
    --OnBackgroundGray : #A5A5A5;
    --Background : #FFFFFF;
    --OnBackground : #000000;
    --Error : #FF4444;
    --OnError : #FFFFFF;
    --Outline : #D9D9D9;
    --SubColor1 : #BFE0FF;
    --OnSubcolor1 : #4378FF;
    --SubColor2 : #D2FFAE;
    --OnSubcolor2 : #54A900;
    --SubColor3 : #FDC9AF;
    --OnSubcolor3 : #FF7127;

    --titleMediumBSize : 24px;
    --titleSemiboldSize : 24px;
    --titleMediumSize : 24px;
    --buttonSemiboldSize : 16px;
    --buttonMediumSize : 18px;
    --bodyMediumSize : 16px;
    --captionMediumSize : 13px;
    --captionRegularSize : 13px;

    --titleMediumBWeight : 500;
    --titleSemiboldWeight : 600;
    --titleMediumWeight : 500;
    --buttonSemiboldWeight : 600;
    --buttonMediumWeight : 500;
    --bodyMediumWeight : 500;
    --captionMediumWeight : 500;
    --captionRegularWeight : 400;

  }

  ${reset};

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    margin: 0;
    border: 0;
    background: none;
    font-family: inherit;
    /* all: unset; */
  }

`;


export const Wrap = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
`;