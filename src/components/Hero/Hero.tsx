// HeaderHero.tsx
import React from 'react';
import {
  HeroContainer,
  HeroImage,
  ContentWrapper,
  TextBlock,
  HeroTitle,
  HeroSubtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from './Hero.styled';
import HeroImages from '../../assets/icons/Hero Image.png';

export const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroImage src={HeroImages} alt="Hero Image" />

      <ContentWrapper>
        <TextBlock>
          <HeroTitle>
            Your Local Appliance Repair &amp; Maintenance Specialists
          </HeroTitle>
          <HeroSubtitle>
            We provide reliable appliance repair services, so your fridge, oven,
            or washer works like new — and you can get back to your day.
          </HeroSubtitle>
        </TextBlock>

        <ButtonGroup>
          <PrimaryButton>Contact Us</PrimaryButton>
          <SecondaryButton> <a href="tel:+18055002705"> Call Us</a></SecondaryButton>
        </ButtonGroup>
      </ContentWrapper>
    </HeroContainer>
  );
};
