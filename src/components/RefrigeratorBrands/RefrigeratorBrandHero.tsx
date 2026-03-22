import React from 'react';
import {
  Container,
  Title,
  Description,
  ContentWrapper,
  ImageContainer,
  Image,
  ButtonRow,
  PrimaryButton,
  SecondaryButton,
  ButtonText,
  FeaturesList,
  FeatureItem,
  TabletContainer,
} from '../DryerLG/LGDryerHero.styled';
import { useMediaQuery } from 'react-responsive';
import { ReviewsWidget } from '../ReviewsWidget/ReviewsWidget';

interface RefrigeratorBrandHeroProps {
  brandName: string;
  description?: string;
  image1?: string;
  image2?: string;
}

export const RefrigeratorBrandHero: React.FC<RefrigeratorBrandHeroProps> = ({ 
  brandName,
  description,
  image1,
  image2
}) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const defaultDescription = `Professional ${brandName} refrigerator repair services in Thousand Oaks and Ventura County. Our expert technicians specialize in ${brandName} refrigerators, freezers, and cooling systems. We provide fast, reliable repairs with genuine parts and experienced service.`;

  return (
    <Container>
      <TabletContainer>
        <ContentWrapper>
          <Title>
            <span>{brandName} Refrigerator</span> Repair <span>in </span>Thousand Oaks & Ventura County
          </Title>

          <ReviewsWidget />

          <Description>
            {description || defaultDescription}
          </Description>

          <FeaturesList>
            <FeatureItem>
              <span>🔧</span>
              <p>Brand-specific diagnostics for {brandName}</p>
            </FeatureItem>
            <FeatureItem>
              <span>⏱️</span>
              <p>Same-day service available in Ventura County</p>
            </FeatureItem>
            <FeatureItem>
              <span>🚚</span>
              <p>OEM parts from our own warehouse</p>
            </FeatureItem>
          </FeaturesList>

          <ButtonRow>
            <PrimaryButton to='/contact'>
              <ButtonText>Request Service</ButtonText>
            </PrimaryButton>
            <SecondaryButton>
              <a href='tel:+18055002705'>📞 (805) 500-2705</a>
            </SecondaryButton>
          </ButtonRow>
        </ContentWrapper>

        {isDesktop && image1 && image2 && (
          <ImageContainer>
            <Image src={image1} alt={`${brandName} Refrigerator Repair Service`} loading='lazy' />
            <Image src={image2} alt={`${brandName} Professional Repair`} loading='lazy' />
          </ImageContainer>
        )}
      </TabletContainer>

      {!isDesktop && image1 && image2 && (
        <ImageContainer>
          <Image src={image1} alt={`${brandName} Refrigerator Repair Service`} loading='lazy' />
          <Image src={image2} alt={`${brandName} Professional Repair`} loading='lazy' />
        </ImageContainer>
      )}
    </Container>
  );
};
