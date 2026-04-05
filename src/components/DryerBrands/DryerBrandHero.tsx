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

interface DryerBrandHeroProps {
  brandName: string;
  description: string;
  image1: string;
  image2: string;
  features?: string[];
}

export const DryerBrandHero: React.FC<DryerBrandHeroProps> = ({
  brandName,
  description,
  image1,
  image2,
  features,
}) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const defaultFeatures = [
    `Brand-specific diagnostics for ${brandName} dryer units`,
    'Same-day service available in Ventura County',
    'OEM parts from our own warehouse',
  ];

  const featureList = features || defaultFeatures;

  return (
    <Container>
      <TabletContainer>
        <ContentWrapper>
          <Title>
            <span>{brandName} Dryer</span> Repair{' '}
            <span>in Thousand Oaks & Ventura County</span>
          </Title>

          <ReviewsWidget />

          <Description>{description}</Description>

          <FeaturesList>
            {featureList.map((feature, index) => (
              <FeatureItem key={index}>
                <span>{index === 0 ? '🔧' : index === 1 ? '⏱️' : '🚚'}</span>
                <p>{feature}</p>
              </FeatureItem>
            ))}
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

        {isDesktop && (
          <ImageContainer>
            <Image src={image1} alt={`${brandName} Dryer Repair Service`} loading='lazy' />
            <Image src={image2} alt={`${brandName} Dryer Professional Repair`} loading='lazy' />
          </ImageContainer>
        )}
      </TabletContainer>

      {!isDesktop && (
        <ImageContainer>
          <Image src={image1} alt={`${brandName} Dryer Repair Service`} loading='lazy' />
          <Image src={image2} alt={`${brandName} Dryer Professional Repair`} loading='lazy' />
        </ImageContainer>
      )}
    </Container>
  );
};
