'use client';
import Image from 'next/image';

import { Container, LogoWrapper, PositionBox } from './styled';

export default function Header() {
  return (
    <PositionBox>
      <Container>
        <LogoWrapper></LogoWrapper>
      </Container>
    </PositionBox>
  );
}
