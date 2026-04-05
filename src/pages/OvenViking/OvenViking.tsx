import React from 'react';
import { styled } from 'styled-components';
import { OvenBrandHero, OvenBrandProblems, OvenBrandFAQ } from '../../components/OvenBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import image1 from '../../assets/brands/oven/viking/o_vik_01.jpg';
import image2 from '../../assets/brands/oven/viking/o_vik_02.jpg';

const OvenViking: React.FC = () => {
  return (
    <Container id='ap'>
      <OvenBrandHero 
        brandName="Viking"
        description="Viking ranges and ovens are powerful, high-end cooking appliances that require brand-specific troubleshooting. If your Viking oven won't heat, burners won't ignite, temperatures are inconsistent, or you see error behavior, Airtexno Appliance Repair can help. We diagnose the root cause, explain your options clearly, and perform reliable repairs for long-term performance."
        image1={image1}
        image2={image2}
      />
      <Partners />
      <OvenBrandProblems
        brandName="Viking"
        models={[
          "Viking gas and electric ranges",
          "Dual-fuel ranges (gas cooktop + electric oven)",
          "Single and double oven configurations (model-dependent)",
          "Convection ovens and specialty cooking modes",
        ]}
        problems={[
          "Oven not heating or weak heat (bake/broil issues)",
          "Burners clicking but not lighting, uneven flame, or weak ignition",
          "Gas odor or delayed ignition (urgent safety issue)",
          "Uneven baking or inaccurate temperatures",
          "Convection fan not running or noisy fan",
          "Control/display problems or intermittent operation",
          "Self-clean issues, door lock problems, or stuck door",
        ]}
        problemsIntro="Many symptoms can have multiple causes. A structured diagnosis is the fastest way to avoid replacing the wrong part and to reduce repeat failures."
        diagnostics={[
          {
            title: "Safety and power checks",
            text: "We confirm proper electrical supply and safe gas operation before deeper testing.",
          },
          {
            title: "Ignition and gas system testing (when applicable)",
            text: "We test igniters, flame sensing, valves, and burner performance.",
          },
          {
            title: "Oven heating performance testing",
            text: "We check bake/broil circuits and verify temperature stability under load.",
          },
          {
            title: "Control and wiring inspection",
            text: "We inspect control boards, harnesses, and connections for heat-related damage.",
          },
          {
            title: "Airflow and convection evaluation",
            text: "We verify fan operation and airflow behavior for consistent baking results.",
          },
        ]}
      />
      <OvenBrandFAQ
        brandName="Viking"
        faqData={[
          {
            question: "Why do my Viking burners keep clicking?",
            answer: "Continuous clicking can be caused by moisture, ignition switch problems, misalignment, or wiring faults. Diagnosis identifies the specific cause so the fix lasts.",
          },
          {
            question: "My Viking oven won't heat—what are common causes?",
            answer: "Possible causes include heating component failure, control/relay issues, sensor problems, or power faults. Testing confirms the root cause.",
          },
          {
            question: "I smell gas near the range—what should I do?",
            answer: "Turn off the gas supply if safe, ventilate the area, avoid flames/sparks, and schedule service. Gas odor should be treated as urgent.",
          },
          {
            question: "Why is baking uneven or temperature inaccurate?",
            answer: "It may be sensor calibration drift, airflow/convection issues, or heat output problems. We verify performance with real measurements.",
          },
          {
            question: "Can you repair dual-fuel models?",
            answer: "Yes. Dual-fuel ranges require careful testing of both gas and electric systems.",
          },
          {
            question: "Is it worth repairing a Viking range?",
            answer: "Often yes—especially for premium units. The best answer depends on the specific failure and overall condition.",
          },
          {
            question: "Do you service built-in Viking ovens?",
            answer: "Yes, when access allows. We work carefully around cabinetry and surrounding finishes.",
          },
          {
            question: "How quickly can you come out?",
            answer: "Availability varies, but we aim for prompt scheduling for no-heat and safety-related issues.",
          },
        ]}
      />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default OvenViking;

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
