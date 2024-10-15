'use client';

import { ReactNode } from 'react';
import { ThemeProvider as Theme } from 'styled-components';

import GlobalStyle from '@/assets/GlobalStyle';

import theme from '../assets/GlobalStyle/Theme';

const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <Theme theme={theme}>
    <GlobalStyle />
    {children}
  </Theme>
);

export default ThemeProvider;
