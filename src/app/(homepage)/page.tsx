'use client';

import Header from '@/components/header';
import WinesSection from '@/components/winesSection';

import { Container, StyledSection } from './styled';

export default function Page() {
  return (
    <Container>
      <Header />

      <StyledSection>
        <WinesSection />
      </StyledSection>
    </Container>
  );
}
