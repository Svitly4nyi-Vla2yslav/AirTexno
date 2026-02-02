import React from 'react';
import {
  Container,
  Title,
  Description,
  ContentWrapper,
  ButtonRow,
  PrimaryButton,
  SecondaryButton,
  ButtonText,
  FeaturesList,
  FeatureItem,
  TabletContainer,
} from '../DryerLG/LGDryerHero.styled';
import { ReviewsWidget } from '../ReviewsWidget/ReviewsWidget';

interface OvenBrandHeroProps {
  brandName: string;
  description?: string;
}

export const OvenBrandHero: React.FC<OvenBrandHeroProps> = ({ 
  brandName,
  description 
}) => {
  const defaultDescription = `Professional ${brandName} oven repair services in Thousand Oaks and Ventura County. Our expert technicians specialize in ${brandName} ovens, ranges, and cooking appliances. We provide fast, reliable repairs with genuine parts and experienced service.`;

  return (
    <Container>
      <TabletContainer>
        <ContentWrapper>
          <Title>
            <span>{brandName} Oven</span> Repair <span>in Thousand Oaks & Ventura County</span>
          </Title>

          <ReviewsWidget />

          <Description>
            {description || defaultDescription}
          </Description>

          <FeaturesList>
            <FeatureItem>
              <span>🔧</span>
              <p>Certified {brandName} technicians</p>
            </FeatureItem>
            <FeatureItem>
              <span>⏱️</span>
              <p>Same-day service available</p>
            </FeatureItem>
            <FeatureItem>
              <span>🚚</span>
              <p>Genuine {brandName} parts from our warehouse</p>
            </FeatureItem>
          </FeaturesList>

          <ButtonRow>
            <PrimaryButton to='/contact#ap'>
              <ButtonText>Request Service</ButtonText>
            </PrimaryButton>
            <SecondaryButton>
              <a href='tel:+18055002705'>📞 (805) 500-2705</a>
            </SecondaryButton>
          </ButtonRow>
        </ContentWrapper>
      </TabletContainer>
    </Container>
  );
};
