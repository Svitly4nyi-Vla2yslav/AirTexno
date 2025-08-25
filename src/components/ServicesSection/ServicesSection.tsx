import React from 'react';
import ServicesImage from '../../assets/icons/ServicesImage.png'; // Adjust the path as necessary
import {
  Section,
  SmallText,
  ContentWrapper,
  ServiceBlock,
  TitleRow,
  TitleBlue,
  Title,
  ServiceImage,
  InfoBlock,
  InfoText,
  ButtonText,
  Button,
  Number,
  ButtonRow,
  ButtonTextBlack,
  ButtonTextWhite,
  Container,
  Description,
  HeaderWrapper,
  PrimaryButton,
  SecondaryButton,
  TextBlock,
  ImageSection,
  TitleCard,
} from './ServicesSection.styled';
import { useMediaQuery } from 'react-responsive';

const ServicesSection: React.FC = () => {
  const isDeckstop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <Section>
      <SmallText>Our Service</SmallText>
      <ContentWrapper>
        <ServiceBlock>
          <TitleRow>
            <Number>01.</Number>
            <TitleBlue>Appliance Care & Tune-Ups</TitleBlue>
          </TitleRow>
          <Title>Professional Installations</Title>
          <Title>Fast & Reliable Emergency Repairs</Title>
          {isDeckstop && (
            <InfoBlock>
              <InfoText>Do you want to know more about our service?</InfoText>
              <Button>
                <ButtonText>Learn more</ButtonText>
              </Button>
            </InfoBlock>
          )}
        </ServiceBlock>
        <ImageSection>
          <ServiceImage src={ServicesImage} alt='Services Image' />
          <Container>
            <HeaderWrapper>
              <TitleRow>
                <TitleCard>Preventive Care</TitleCard>
              </TitleRow>
              <TextBlock>
                <Description>
                  Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps
                  your appliances working smoothly, prevents costly breakdowns, and extends their
                  lifespan. We take the time to inspect and fine-tune your appliances, so they
                  perform at their best and last longer.
                </Description>
              </TextBlock>
            </HeaderWrapper>
            <ButtonRow>
              <PrimaryButton>
                <ButtonTextWhite>Contact Us</ButtonTextWhite>
              </PrimaryButton>
              <SecondaryButton>
                <a href='tel:+18055002705'>
                  <ButtonTextBlack>Call Us</ButtonTextBlack>
                </a>
              </SecondaryButton>
            </ButtonRow>
          </Container>
        </ImageSection>
        {!isDeckstop && (
          <InfoBlock>
            <InfoText>Do you want to know more about our service?</InfoText>
            <Button>
              <ButtonText>Learn more</ButtonText>
            </Button>
          </InfoBlock>
        )}
      </ContentWrapper>
    </Section>
  );
};

export default ServicesSection;
