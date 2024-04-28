import React from 'react';
import type { Preview } from "@storybook/react";
import {reset} from "styled-reset";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import {theme} from "../src/styles/theme";
import StoreProvider from "../src/store/Providers";

const GlobalStyle = createGlobalStyle`
  
  ${reset}

  @font-face {
    font-family: "Pretendard";
    src: url("../src/app/fonts/PretendardVariable.woff2");
    font-weight: 45 920;;
    font-display: swap;
  }

  body {
    font-family: "Pretendard";
  }

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