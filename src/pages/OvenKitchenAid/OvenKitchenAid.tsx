import React from 'react';
import { styled } from 'styled-components';
import { OvenBrandHero, OvenBrandProblems, OvenBrandFAQ } from '../../components/OvenBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import image1 from '../../assets/brands/oven/kitchenaid/o_Kad_01.jpg';
import image2 from '../../assets/brands/oven/kitchenaid/o_kad_02.jpg';

const OvenKitchenAid: React.FC = () => {
  return (
    <Container id='ap'>
      <OvenBrandHero 
        brandName="KitchenAid"
        description="If your KitchenAid oven won't heat, won't turn on, bakes unevenly, or has control panel issues, you need accurate diagnostics—not guesses. Airtexno Appliance Repair provides professional KitchenAid oven repair with a clear, step-by-step process and transparent recommendations, so you can get back to safe, reliable cooking."
        image1={image1}
        image2={image2}
      />
      <Partners />
      <OvenBrandProblems
        brandName="KitchenAid"
        models={[
          "KitchenAid wall ovens (single and double)",
          "Built-in ovens and combination units (model-dependent)",
          "Slide-in and freestanding ranges with oven compartments",
          "Convection ovens and models with touch controls",
        ]}
        problems={[
          "Oven not heating (bake or broil not working)",
          "Slow preheat or uneven baking",
          "Temperature too hot/too cold or drifting",
          "Error codes or intermittent shutdowns",
          "Buttons/touch panel not responding",
          "Convection fan not running or noisy",
          "Door not closing properly or heat escaping",
          "Breaker trips, sparks, or burning smell (urgent safety issues)",
        ]}
        problemsIntro="Many symptoms can have multiple causes. A structured diagnosis is the fastest way to avoid replacing the wrong part and to reduce repeat failures."
        diagnostics={[
          {
            title: "Confirm symptoms and operating conditions",
            text: "We verify preheat behavior, temperature stability, and any error messages.",
          },
          {
            title: "Power and safety checks",
            text: "We check supply voltage, thermal protection, and safety circuits.",
          },
          {
            title: "Heating and temperature control testing",
            text: "We evaluate heating performance, sensors, and control outputs under load.",
          },
          {
            title: "Control and interface inspection",
            text: "We inspect boards, harness connections, and signs of heat damage.",
          },
          {
            title: "Door/lock system checks",
            text: "We verify door switches and lock mechanisms, especially after self-clean events.",
          },
        ]}
      />
      <OvenBrandFAQ
        brandName="KitchenAid"
        faqData={[
          {
            question: "Why is my KitchenAid oven not heating at all?",
            answer: "This may involve a heating circuit failure, sensor problems, control board issues, or power/safety faults. Diagnosis confirms what failed before replacing parts.",
          },
          {
            question: "Why does my oven take a long time to preheat?",
            answer: "Slow preheat can indicate weak heat output, sensor drift, or control/relay issues. We measure performance to identify the cause.",
          },
          {
            question: "My oven heats but the temperature is wrong—what causes that?",
            answer: "Common causes include a drifting temperature sensor, calibration problems, or heating components failing under load. Testing prevents unnecessary replacements.",
          },
          {
            question: "The touch panel doesn't respond—can it be repaired?",
            answer: "Sometimes it's a connection issue; other times the interface or control board needs service. We verify the cause during diagnosis.",
          },
          {
            question: "The breaker trips—should I keep trying?",
            answer: "No. Repeated breaker trips may indicate a dangerous short. Stop using the oven and schedule service.",
          },
          {
            question: "Why is baking uneven?",
            answer: "Uneven baking can be caused by heating performance, convection airflow issues, or calibration drift. We determine whether it's a heat source or airflow problem.",
          },
          {
            question: "Is it worth repairing a KitchenAid oven?",
            answer: "Often yes, especially for built-in units. The best answer depends on the failure type and overall condition.",
          },
          {
            question: "How quickly can you come out?",
            answer: "Availability varies, but we aim to schedule promptly—especially for no-heat and electrical symptoms.",
          },
        ]}
      />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default OvenKitchenAid;

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
