import React from 'react';
import type { Preview } from "@storybook/react";
import {reset} from "styled-reset";
import {createGlobalStyle} from "styled-components";

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
      <>
        <GlobalStyle/>
        <Story />
      </>
    ),
  ],
};

export default preview;