'use client';

import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100dvh;
  overflow-y: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow: auto;
`;

export const StyledSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  box-sizing: border-box;
  scroll-snap-align: start;
`;
