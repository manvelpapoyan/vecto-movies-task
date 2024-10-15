'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 113px;
  padding-bottom: 8px;
  background: ${({ theme }) => theme.colors.background_2};
`;

export const Title = styled.h1`
  margin: 40px 0;
  @media (${({ theme }) => theme.breakpoints.m9}) {
    white-space: nowrap;
    letter-spacing: 0;
    margin: 16px 0;
  }
`;
