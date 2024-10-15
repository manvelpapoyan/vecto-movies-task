import styled from 'styled-components';

export const Container = styled.div`
  max-width: 334px;
  width: 100%;
  aspect-ratio: 34/63;
  background: ${({ theme }) => theme.colors.background_3};
  border-radius: 40px;
  padding: 12px;

  @media (${({ theme }) => theme.breakpoints.m9}) {
    aspect-ratio: 21/35;
  }
`;

export const Title = styled.h1`
  margin-top: 3%;
  line-height: 105%;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.red};
  margin-top: 2%;
  line-height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    aspect-ratio: 1/1.3;
    object-fit: cover;
    height: auto;
    border-radius: 28px;
  }
`;
