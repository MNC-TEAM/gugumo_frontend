import React from 'react';
import type { Preview } from "@storybook/react";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import {theme} from "../src/styles/theme";
import StoreProvider from "../src/store/Providers";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: "Pretendard";
    src: url("../src/app/fonts/PretendardVariable.woff2");
    font-weight: 45 920;;
    font-display: swap;
  }

  ${reset};

  * {
    font-family: "Pretendard" !important;
  }

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
  }

  html::-webkit-scrollbar {width: 8px;}
  html::-webkit-scrollbar-thumb {background-color: #2f3542; border-radius: 10px;}

`;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Story />
        </ThemeProvider>
      </StoreProvider>
    ),
  ],
};

export default preview;