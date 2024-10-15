import Image from 'next/image';

import { Container, ImageWrapper, SubTitle, Title } from './styled';

export interface IWineCard {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  type: string;
}

export default function WineCard({ name, image, type }: IWineCard) {
  return (
    <Container>
      <ImageWrapper>
        <Image src={image} alt={name} />
      </ImageWrapper>
      <Title>{name}</Title>
      <SubTitle>{type}</SubTitle>
    </Container>
  );
}
