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
} from './Hero.styled';
import HeroImages from '../../assets/icons/Hero Image.png';
import { TransparentButton } from '../Header/Header.styled';
import AutoVerticalSwiper from './Swipper';
import { useMediaQuery } from 'react-responsive';

export const Hero: React.FC = () => {
   const isDeckstop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <HeroContainer>
      <HeroImage src={HeroImages} alt='Hero Image' />
    {isDeckstop &&  (<AutoVerticalSwiper />)}
      <ContentWrapper>
        <TextBlock>
          <HeroTitle>Your Local Appliance Repair &amp; Maintenance Specialists</HeroTitle>
          <HeroSubtitle>
            We provide reliable appliance repair services, so your fridge, oven, or washer works
            like new — and you can get back to your day.
          </HeroSubtitle>
        </TextBlock>

        <ButtonGroup>
          <PrimaryButton to='/contact#ap'>Contact Us</PrimaryButton>
          <TransparentButton>
            <a href='tel:+18055002705'> Call Us</a>
          </TransparentButton>
        </ButtonGroup>
      </ContentWrapper>
    </HeroContainer>
  );
};
