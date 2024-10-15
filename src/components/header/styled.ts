'use client';
import styled from 'styled-components';
export const PositionBox = styled.div`
  position: relative;
`;

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 113px;
  background: rgba(242, 242, 242, 0.1);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;
