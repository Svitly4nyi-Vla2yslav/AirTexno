// HeaderHero.tsx
import React from 'react';
import {
  HeroContainer,
  HeroImage,
  ContentWrapper,
  TextBlock,
  HeroTitle,
  HeroSubtitle,
} from './Hero.styled';
import HeroImages from '../../../assets/icons/about/HeroImage2About.png';

export const Hero: React.FC = () => {
  return (
    <HeroContainer id='ap'>
      <HeroImage src={HeroImages} alt='Hero Image' />

      <ContentWrapper>
        <TextBlock>
          <HeroSubtitle>About Our Company and Team</HeroSubtitle>
          <HeroTitle>Fast, affordable, and trusted service</HeroTitle>
        </TextBlock>
      </ContentWrapper>
    </HeroContainer>
  );
};
