import React from 'react';
import styled from 'styled-components';

interface PhotoGalleryProps {
  brandName: string;
  photos: { src: string; alt: string }[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  brandName,
  photos,
}) => {
  if (photos.length === 0) return null;

  return (
    <Section>
      <Container>
        <Title>Our {brandName} Repair Work</Title>
        <Grid $count={photos.length}>
          {photos.map((photo, i) => (
            <ImageWrapper key={i}>
              <Image src={photo.src} alt={photo.alt} loading='lazy' />
            </ImageWrapper>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  padding: 4rem 1rem;
  background: white;

  @media (min-width: 1440px) {
    padding: 6rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 1.2;
  color: var(--blue-500);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const Grid = styled.div<{ $count: number }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (min-width: 768px) {
    grid-template-columns: ${({ $count }) =>
      $count <= 2 ? '1fr 1fr' : $count <= 3 ? '1fr 1fr 1fr' : '1fr 1fr 1fr'};
    gap: 16px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: ${({ $count }) =>
      $count <= 2
        ? '1fr 1fr'
        : $count <= 3
          ? '1fr 1fr 1fr'
          : $count <= 4
            ? '1fr 1fr 1fr 1fr'
            : '1fr 1fr 1fr 1fr'};
    gap: 20px;
  }
`;

const ImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;
