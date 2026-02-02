import React from 'react';
import { styled } from 'styled-components';
import { OvenBrandHero, OvenBrandProblems, OvenBrandFAQ } from '../../components/OvenBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';

const OvenThermador: React.FC = () => {
  return (
    <Container id='ap'>
      <OvenBrandHero 
        brandName="Thermador"
        description="Expert Thermador oven repair in Thousand Oaks and Ventura County. We specialize in Thermador's luxury cooking appliances including professional-grade wall ovens, ranges, and steam ovens. Certified technicians, genuine parts, and exceptional service."
      />
      <Partners />
      <OvenBrandProblems brandName="Thermador" />
      <OvenBrandFAQ brandName="Thermador" />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default OvenThermador;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;

  @media (max-width: 767px) {
    gap: 40px;
    padding: 0 12px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    padding: 0 24px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 1024px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) and (max-width: 1439px) {
    max-width: 1280px;
    padding: 0 48px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 64px;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 120px;
  }
`;
