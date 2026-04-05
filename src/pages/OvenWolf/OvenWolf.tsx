import React from 'react';
import { styled } from 'styled-components';
import { OvenBrandHero, OvenBrandProblems, OvenBrandFAQ } from '../../components/OvenBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import image1 from '../../assets/brands/oven/wolf/o_wolf_01.jpg';
import image2 from '../../assets/brands/oven/wolf/o_wolf_02.jpg';

const OvenWolf: React.FC = () => {
  return (
    <Container id='ap'>
      <OvenBrandHero 
        brandName="Wolf"
        description="Wolf ovens and ranges are premium cooking systems designed for precision and performance. If your Wolf oven won't heat, temperature is unstable, burners won't ignite, or controls are acting up, Airtexno Appliance Repair can help with accurate diagnostics and reliable repairs. We focus on the root cause and provide repair options that protect your investment."
        image1={image1}
        image2={image2}
      />
      <Partners />
      <OvenBrandProblems
        brandName="Wolf"
        models={[
          "Wolf gas ranges and dual-fuel ranges",
          "Wolf wall ovens (single and double) and built-in configurations",
          "Convection ovens and specialty cooking modes",
          "Units with simmer burners and high-output burners (range models)",
        ]}
        problems={[
          "Oven not heating, weak heat, or broil issues",
          "Burners not igniting, delayed ignition, or uneven flame",
          "Gas odor or ignition safety concerns (urgent)",
          "Temperature inaccurate or inconsistent cooking results",
          "Convection fan problems or noisy operation",
          "Control panel/display issues or intermittent shutdowns",
          "Door lock/self-clean issues (model-dependent)",
        ]}
        problemsIntro="Many symptoms can have multiple causes. A structured diagnosis is the fastest way to avoid replacing the wrong part and to reduce repeat failures."
        diagnostics={[
          {
            title: "Safety and supply checks",
            text: "We confirm proper electrical supply and safe gas operation before component testing.",
          },
          {
            title: "Ignition and burner performance testing",
            text: "We test igniters, flame behavior, valves, and related safety components.",
          },
          {
            title: "Oven heating and temperature stability testing",
            text: "We verify bake/broil performance and temperature control under load.",
          },
          {
            title: "Sensor and control verification",
            text: "We test sensors and control outputs to confirm accurate regulation.",
          },
          {
            title: "Wiring and connection inspection",
            text: "We inspect harnesses and connections for heat-related wear and reliability issues.",
          },
        ]}
      />
      <OvenBrandFAQ
        brandName="Wolf"
        faqData={[
          {
            question: "Why won't my Wolf burners ignite?",
            answer: "Ignition issues can come from igniters, switches, wiring, gas supply, or burner alignment. Diagnosis identifies the specific cause for a reliable fix.",
          },
          {
            question: "My Wolf oven heats unevenly—what causes that?",
            answer: "It can be a heat source issue, convection airflow problem, or sensor/calibration drift. We test performance under real conditions.",
          },
          {
            question: "I smell gas—what should I do?",
            answer: "Ventilate the area, avoid flames/sparks, and turn off gas if safe. Gas odor should be treated as urgent and checked by a professional.",
          },
          {
            question: "Are Wolf appliances worth repairing?",
            answer: "In most cases, yes. Premium units are built to last, and many failures can be repaired cost-effectively.",
          },
          {
            question: "Do you repair dual-fuel models?",
            answer: "Yes. Dual-fuel units require testing of both gas and electric systems, which we handle carefully.",
          },
          {
            question: "Can you service built-in wall ovens?",
            answer: "Yes, when access allows. We protect cabinetry and recommend safe access steps when needed.",
          },
          {
            question: "Why does the unit shut off mid-cook?",
            answer: "Intermittent shutdown can be caused by overheating protection, control issues, or wiring faults. We diagnose the root cause before repairs.",
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

export default OvenWolf;

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
