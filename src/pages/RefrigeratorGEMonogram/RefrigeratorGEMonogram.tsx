import React from 'react';
import { styled } from 'styled-components';
import { RefrigeratorBrandHero, RefrigeratorBrandProblems, RefrigeratorBrandFAQ } from '../../components/RefrigeratorBrands';
import {InlineLink} from '../../components/DryerLG/LGDryerHero.styled';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import {Container as InlineLink} from '../../components/DryerLG/LGDryerHero.styled';
import image1 from '../../assets/brands/refrigerator/ge-monogram/r_gem_01.jpg';
import image2 from '../../assets/brands/refrigerator/ge-monogram/r_gem_02.jpg';

const RefrigeratorGEMonogram: React.FC = () => {
  return (
    <Container id='ap'>
      <RefrigeratorBrandHero 
        brandName="GE Monogram"
        description="If your GE Monogram refrigerator is not cooling, leaking water, making unusual noise, or showing error codes, you need a technician who understands high-end built-in refrigeration. At <Inlinelink to="/about">Airtexno Appliance Repair</InlineLink>, we specialize in diagnosing GE Monogram refrigerator and freezer problems with a technician-first approach: confirm the root cause, explain it clearly, and repair it for long-term reliability. We serve Thousand Oaks and nearby Ventura County cities with convenient in-home service for built-in units so you do not need to move the appliance or risk cabinet damage."
        image1={image1}
        image2={image2}
      />
      <Partners />
      <RefrigeratorBrandProblems brandName="GE Monogram" />
      
      <Section>
        <SectionContainer>
          <SectionTitle>Why Homeowners Choose <InlineLink to="/about">Airtexno</InlineLink> for GE Monogram Repair</SectionTitle>
          <ServiceList $single>
            <ServiceItem>Brand-specific experience with high-end built-in refrigeration</ServiceItem>
            <ServiceItem>Structured diagnostics to avoid replacing parts at random</ServiceItem>
            <ServiceItem>Clear explanation of findings before repairs begin</ServiceItem>
            <ServiceItem>Repairs designed for long-term reliability</ServiceItem>
            <ServiceItem>Convenient scheduling and respectful in-home service</ServiceItem>
            <ServiceItem>Guidance on maintenance practices that help reduce future failures</ServiceItem>
            <ServiceItem>Careful, clean work around cabinetry, floors, and surrounding appliances</ServiceItem>
          </ServiceList>
          <SectionDescription>
            Many symptoms look similar from the outside. For example, a "not cooling" complaint may be caused by an airflow restriction, a fan failure, a sensor/control issue, or a sealed-system problem. If the refrigerator is rapidly warming, repeatedly clicking, or actively leaking, schedule diagnosis soon to reduce the risk of food loss or water damage. Same-Day service available.
          </SectionDescription>
        </SectionContainer>
      </Section>
          
      <Section>
        <SectionContainer>
          <SectionTitle>Service Area</SectionTitle>
          <ServiceList>
            <ServiceItem>Thousand Oaks</ServiceItem>
            <ServiceItem>Westlake Village</ServiceItem>
            <ServiceItem>Newbury Park</ServiceItem>
            <ServiceItem>Agoura Hills</ServiceItem>
            <ServiceItem>Camarillo</ServiceItem>
            <ServiceItem>Moorpark</ServiceItem>
            <ServiceItem>Simi Valley</ServiceItem>
            <ServiceItem>Oak Park</ServiceItem>
          </ServiceList>
        </SectionContainer>
      </Section>

      <RefrigeratorBrandFAQ brandName="GE Monogram" />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default RefrigeratorGEMonogram;

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
