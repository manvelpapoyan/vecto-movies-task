'use client';

import { createGlobalStyle } from 'styled-components';

import { breakpoints } from './breakpoints';
import { colors } from './colors';

export { breakpoints, colors };

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }



  body {
    margin: 0;
    padding: 0;
    width: inherit;
    min-height: 100dvh;
    height: max-content;
    display: flex;
    flex-direction: column;
    font-family: 'Manrope';
    background: ${colors.black};

    overflow-x: hidden;

  input {
    -webkit-appearance: none;
    padding: 0;
    border: none;
    outline: none;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: ${colors.black};
  }

  button {
    color:inherit;
    font-family: 'Manrope';
    border: none;
    background: none;
  }

  a {
      font-family: 'Manrope';
      display: block;
      text-decoration: none;
      cursor: pointer;

    &:hover {
        color:${colors.black};
        text-decoration: none;
        cursor: pointer;
      }
    }

  }
`;

export default GlobalStyle;
