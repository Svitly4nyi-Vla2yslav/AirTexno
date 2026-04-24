import React from 'react';
import { styled } from 'styled-components';
import { RefrigeratorBrandHero, RefrigeratorBrandProblems, RefrigeratorBrandFAQ } from '../../components/RefrigeratorBrands';
import {InlineLink} from '../../components/DryerLG/LGDryerHero.styled';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import image1 from '../../assets/brands/refrigerator/ge-monogram/r_gem_01.jpg';
import image2 from '../../assets/brands/refrigerator/ge-monogram/r_gem_02.jpg';

const RefrigeratorGEMonogram: React.FC = () => {
  return (
    <Container id='ap'>
      <RefrigeratorBrandHero 
        brandName="GE Monogram"
        description="If your GE Monogram refrigerator is not cooling, leaking water, making unusual noise, or showing error codes, you need a technician who understands high-end built-in refrigeration. At Airtexno Appliance Repair, we specialize in diagnosing GE Monogram refrigerator and freezer problems with a technician-first approach: confirm the root cause, explain it clearly, and repair it for long-term reliability. We serve Thousand Oaks and nearby Ventura County cities with convenient in-home service for built-in units so you do not need to move the appliance or risk cabinet damage."
        image1={image1}
        image2={image2}
      />
      <Partners />
      <RefrigeratorBrandProblems
        brandName="GE Monogram"
        models={[
          "Built-in refrigerators and built-in freezers",
          "Integrated column refrigerators and column freezers",
          "Side-by-side built-in units",
          "Bottom-freezer and French-door configurations (model-dependent)",
          "Units with ice makers, water filters, and internal dispensers",
        ]}
        problems={[
          "Refrigerator warm / freezer warm / inconsistent temperatures",
          "Frost or ice buildup, poor airflow, or repeated defrost issues",
          "Ice maker not making ice, small cubes, slow production, or leaking",
          "Water leaks inside the unit or underneath (drain, inlet, or line issues)",
          "Unusual noises (fan noise, buzzing, vibration, clicking)",
          "Error codes, display issues, or intermittent operation",
          "Door not sealing, condensation, or moisture buildup",
          "Freezer not freezing / soft ice cream / food thawing",
          "Freezer temperature swings or inconsistent freezing",
          "Excessive frost in the freezer or freezer drawer",
          "Freezer door/drawer not sealing (frost, moisture, warm spots)",
        ]}
        problemsIntro="Many issues look similar from the outside. Correct testing is the fastest way to avoid unnecessary parts and repeat breakdowns."
        diagnostics={[
          { title: "Temperature and airflow verification", text: "We measure actual compartment temperatures and confirm airflow patterns." },
          { title: "Defrost and fan system checks", text: "We evaluate frost patterns, fans, and defrost components that affect airflow." },
          { title: "Sensor and control testing", text: "We test thermistors/sensors and control responses to confirm accurate operation." },
          { title: "Water and ice system inspection (when needed)", text: "We inspect drains, inlet valves, filters, and line routing." },
          { title: "Sealed system assessment (only when indicated)", text: "When symptoms point to compressor or refrigerant issues, we explain realistic repair options." },
          { title: "Freezer-specific checks", text: "We verify freezer airflow and frost patterns, test freezer temperature sensors/thermistors, inspect the evaporator fan and defrost system, and confirm proper door/drawer sealing. For units with ice makers, we also evaluate freezer temperature stability and water/ice components to ensure consistent ice production and reliable freezing." },
        ]}
        closingText="After diagnosis, you get clear recommendations and repair options based on reliability and total cost of ownership."
      />
      
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

      <RefrigeratorBrandFAQ
        brandName="GE Monogram"
        faqData={[
          { question: "Why is my GE Monogram refrigerator warm but the freezer seems okay (or the opposite)?", answer: "This often points to airflow or defrost-related issues, a fan problem, or a sensor/control issue affecting one compartment more than the other. We confirm airflow and component operation before recommending parts." },
          { question: "What causes ice or frost buildup inside the unit?", answer: "Frost buildup is commonly tied to defrost system failures, airflow restrictions, or door seal issues. We identify the cause and repair the correct components so frost does not return." },
          { question: "My GE Monogram is making unusual noises. Is that serious?", answer: "Noises may come from fan motors, airflow obstruction, vibration, or compressor-related behavior. We pinpoint the source and address it early to prevent additional damage." },
          { question: "My ice maker stopped making ice. Do I always need an ice maker replacement?", answer: "Not always. Ice issues can be caused by water supply, inlet valves, filters, a frozen fill path, temperature problems, or control/sensor faults. Diagnosis helps avoid replacing the wrong part." },
          { question: "Why is the refrigerator leaking water?", answer: "Leaks may come from a clogged defrost drain, loose water lines, inlet valve issues, or ice maker-related causes. We locate the source and fix it to prevent cabinet and floor damage." },
          { question: "Is it worth repairing a GE Monogram refrigerator?", answer: "In many cases, yes. Built-in systems are expensive to replace, and many failures can be repaired cost-effectively. The best answer depends on the failure type and overall unit condition." },
          { question: "Do you repair built-in and column units?", answer: "Yes. Built-in and column configurations require careful access and model-specific diagnostics. We troubleshoot these systems in place and provide repair options that make sense for long-term use." },
          { question: "Why does the unit cool sometimes and then warm up again?", answer: "Intermittent cooling can be caused by control/sensor issues, defrost problems, fan failures, or electrical faults. We test under real operating conditions to confirm the root cause." },
          { question: "Can you help if the refrigerator section is freezing food?", answer: "Yes. Over-freezing may be related to sensor placement, airflow issues, control problems, or component failures. We diagnose why temperatures are drifting and correct the cause." },
          { question: "Do you offer preventive maintenance?", answer: "Preventive checks can help catch airflow restrictions, early fan issues, and temperature irregularities before they become major failures. We can recommend a practical maintenance plan based on age and usage." },
          { question: "How quickly can you come out?", answer: "Availability varies by day, but we aim for prompt scheduling, especially for not-cooling situations and active leaks." },
          { question: "Do you use genuine parts?", answer: "Whenever the correct genuine part is available and appropriate for the model, we prioritize parts that maintain performance and reliability for high-end refrigeration." },
        ]}
      />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default RefrigeratorGEMonogram;

const Section = styled.section<{ $highlight?: boolean }>`
  width: 100%;
  padding: 4rem 1rem;
  background: ${({ $highlight }) => ($highlight ? 'var(--gray-50)' : 'white')};

  @media (min-width: 1440px) {
    padding: 6rem 2rem;
  }
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const SectionTitle = styled.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 1.2;
  color: var(--blue-500);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const SectionDescription = styled.p`
  font-family: var(--main-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: var(--black-500);
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const ServiceList = styled.ul<{ $single?: boolean }>`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: ${({ $single }) => ($single ? '1fr' : '1fr 1fr')};
  }
`;
const ServiceItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-family: var(--main-family);
  font-size: 16px;
  line-height: 1.5;
  color: var(--black-500);

  &:before {
    content: '✓';
    color: var(--blue-500);
    font-weight: bold;
    font-size: 20px;
    flex-shrink: 0;
  }
`;

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
