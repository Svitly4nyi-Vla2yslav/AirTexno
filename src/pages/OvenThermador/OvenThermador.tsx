import React from 'react';
import { styled } from 'styled-components';
import { OvenBrandHero, OvenBrandProblems, OvenBrandFAQ } from '../../components/OvenBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import image1 from '../../assets/brands/oven/thermador/o_the_01.jpg';
import image2 from '../../assets/brands/oven/thermador/o_the_02.jpg';

const OvenThermador: React.FC = () => {
  return (
    <Container id='ap'>
      <OvenBrandHero 
        brandName="Thermador"
        description="Thermador ovens are premium appliances with advanced electronics and precise temperature control. If your Thermador oven won't heat, shows error codes, bakes unevenly, or has control panel issues, we can help. Airtexno Appliance Repair provides brand-specific Thermador oven diagnosis and reliable repairs focused on safety and long-term performance."
        image1={image1}
        image2={image2}
      />
      <Partners />
      <OvenBrandProblems
        brandName="Thermador"
        models={[
          "Thermador single wall ovens and double wall ovens",
          "Built-in ovens and combination units (model-dependent)",
          "Convection ovens and models with advanced cooking modes",
          "Thermador ranges with oven compartments (model-dependent)",
        ]}
        problems={[
          "Oven not heating (bake or broil not working)",
          "Uneven baking, hot spots, or slow preheat",
          "Temperature inaccurate or drifting",
          "Error codes or intermittent shutdowns",
          "Touch panel/buttons not responding",
          "Convection fan not running or noisy fan operation",
          "Self-clean issues (won't start, stuck, or locked door)",
          "Breaker trips, sparks, or burning smell (urgent safety issues)",
        ]}
        problemsIntro="Many symptoms can have multiple causes. A structured diagnosis is the fastest way to avoid replacing the wrong part and to reduce repeat failures."
        diagnostics={[
          {
            title: "Power and safety circuit checks",
            text: "We confirm proper voltage, connections, and safety devices before component testing.",
          },
          {
            title: "Heating system testing",
            text: "We evaluate bake/broil circuits, relays, and heating performance under load.",
          },
          {
            title: "Temperature sensor verification",
            text: "We test sensor readings and calibration behavior to address temperature accuracy.",
          },
          {
            title: "Control and user interface inspection",
            text: "We check control boards, harness connections, and signs of heat damage.",
          },
          {
            title: "Door and lock system checks",
            text: "We verify door switches and lock mechanisms, especially after self-clean events.",
          },
        ]}
      />
      <OvenBrandFAQ
        brandName="Thermador"
        faqData={[
          {
            question: "Why is my Thermador oven not heating at all?",
            answer: "This may be caused by heating circuit failure, temperature sensor issues, control board problems, or power/safety faults. Diagnosis confirms what failed before replacing parts.",
          },
          {
            question: "Why does the oven take a long time to preheat?",
            answer: "Slow preheat can indicate weakening heat output, sensor issues, or control/relay problems. We measure performance and verify true temperature behavior.",
          },
          {
            question: "My Thermador oven bakes unevenly—what causes that?",
            answer: "Uneven results can come from heating performance, convection airflow issues, or sensor/calibration drift. We identify whether it's heat source, airflow, or sensing.",
          },
          {
            question: "Is it normal to have issues after self-clean?",
            answer: "Self-clean creates extreme heat that can stress electronics and safety devices. If issues started after self-clean, diagnosis should focus on protection circuits and controls.",
          },
          {
            question: "The breaker trips when I use the oven—should I keep trying?",
            answer: "No. Repeated breaker trips can indicate a dangerous short or failing component. Stop use and schedule diagnosis.",
          },
          {
            question: "Do you repair built-in wall ovens?",
            answer: "Yes. We work carefully around cabinetry and recommend safe access steps when needed.",
          },
          {
            question: "Can you fix a touch panel that stopped responding?",
            answer: "Sometimes it's a connection issue; other times the user interface or control board needs service. We confirm the cause with testing.",
          },
          {
            question: "How quickly can you come out?",
            answer: "Availability varies, but we aim for prompt scheduling—especially for no-heat and electrical symptoms.",
          },
        ]}
      />
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
