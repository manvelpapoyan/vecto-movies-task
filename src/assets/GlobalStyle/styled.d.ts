import { BreakpointsType } from './breakpoints';
import { ColorsType } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    breakpoints: BreakpointsType;
  }
}
