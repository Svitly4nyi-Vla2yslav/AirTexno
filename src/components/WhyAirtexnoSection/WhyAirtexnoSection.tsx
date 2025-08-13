import React from 'react';
import {
  Section,
  StyledImage,
  SubTitle,
  TextWrapper,
  Title,
} from './WhyAirtexnoSection.styled';
import WhyAirtexnoImage1 from "../../assets/icons/WhyAirtexnoImage.png" // Adjust the path as necessary
import { ImageSection } from '../ServicesSection/ServicesSection.styled';
import { WhyAirtexnoTextContainer1 } from './WhyAirtexnoTextContainer1';

const WhyAirtexnoSection: React.FC = () => {
  return (
    <Section>
      <TextWrapper>
        <SubTitle>why airtexno</SubTitle>
        <Title>GET YOUR APPLIANCE FIXED QUICKLY, SAME DAY</Title>
      </TextWrapper>
      <ImageSection>
        <StyledImage src={WhyAirtexnoImage1} alt="Why Airtexno Image 1" />
        <WhyAirtexnoTextContainer1 />
      </ImageSection>
    </Section>
  );
};

export default WhyAirtexnoSection;
