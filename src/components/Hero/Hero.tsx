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
import HeroImages from "../../assets/icons/Hero Image.png"


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
            We specialize in expert appliance repairs, bringing your home
            essentials back to life with care and precision — so your family can
            get back to what matters.
          </HeroSubtitle>
        </TextBlock>

        <ButtonGroup>
          <PrimaryButton>Contact Us</PrimaryButton>
          <SecondaryButton>Call Us</SecondaryButton>
        </ButtonGroup>
      </ContentWrapper>

   
    </HeroContainer>
  );
};
